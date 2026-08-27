import { cloneElement, useEffect, useRef } from 'react';

import { ClickAwayListenerProps } from './ClickAwayListener.types';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useEvent, useForkRef } from '../../hooks';
import { getReactElementRef, ownerDocument } from '../../utils';

/** Turns a react event prop name (`onMouseDown`) into a native event name (`mousedown`). */
const mapEventPropToEvent = (eventProp: string) => {
  return eventProp.substring(2).toLowerCase();
};

/** A click on the document scrollbar is reported outside of the viewport, so it must not count as a click away. */
const clickedRootScrollbar = (event: MouseEvent, doc: Document) => {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
};

/**
 * Detects clicks that happen outside of a single child element. The child has to accept a ref and spread the event
 * handlers it receives, since the listener relies on both a document listener and a synthetic one to support portals.
 */
export const ClickAwayListener = (inProps: ClickAwayListenerProps) => {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    touchEvent = 'onTouchEnd',
    onClickAway,
  } = useDefaultProps({
    props: inProps,
    name: 'ESClickAwayListener',
  });

  const movedRef = useRef(false);
  const nodeRef = useRef<HTMLElement>(null);
  const activatedRef = useRef(false);
  const syntheticEventRef = useRef(false);

  useEffect(() => {
    // The listener must not be activated synchronously, otherwise the very click that mounted the component would be
    // reported as a click away.
    const timeout = setTimeout(() => {
      activatedRef.current = true;
    }, 0);

    return () => {
      clearTimeout(timeout);
      activatedRef.current = false;
    };
  }, []);

  const handleRef = useForkRef(getReactElementRef(children), nodeRef);

  // The listener is attached to the document, which only knows about `Event`, but it is only ever registered for mouse
  // and touch events.
  const handleClickAway = useEvent((event: Event) => {
    // Developers can stop the propagation of the synthetic event, so only a positive value is trustworthy.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;

    const doc = ownerDocument(nodeRef.current);

    // The child might render null, and a click on the root scrollbar should behave like a click inside.
    if (
      !activatedRef.current ||
      !nodeRef.current ||
      ('clientX' in event && clickedRootScrollbar(event as MouseEvent, doc))
    ) {
      return;
    }

    // Do not act if the user performed a touchmove.
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM: boolean;

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target as Node) || nodeRef.current.contains(event.target as Node);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through a portal.
  const createHandleSynthetic = (handlerName: string) => (event: unknown) => {
    syntheticEventRef.current = true;

    const childrenPropsHandler = children.props[handlerName];

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps: Record<string, unknown> = { ref: handleRef };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  useEffect(() => {
    if (touchEvent === false) {
      return;
    }

    const mappedTouchEvent = mapEventPropToEvent(touchEvent);
    const doc = ownerDocument(nodeRef.current);

    const onTouchMove = () => {
      movedRef.current = true;
    };

    doc.addEventListener(mappedTouchEvent, handleClickAway);
    doc.addEventListener('touchmove', onTouchMove);

    return () => {
      doc.removeEventListener(mappedTouchEvent, handleClickAway);
      doc.removeEventListener('touchmove', onTouchMove);
    };
  }, [handleClickAway, touchEvent]);

  useEffect(() => {
    if (mouseEvent === false) {
      return;
    }

    const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
    const doc = ownerDocument(nodeRef.current);

    doc.addEventListener(mappedMouseEvent, handleClickAway);

    return () => {
      doc.removeEventListener(mappedMouseEvent, handleClickAway);
    };
  }, [handleClickAway, mouseEvent]);

  return <>{cloneElement(children, childrenProps)}</>;
};
