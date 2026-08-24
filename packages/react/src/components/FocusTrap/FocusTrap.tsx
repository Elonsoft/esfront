import { cloneElement, FocusEvent, Fragment, useEffect, useRef } from 'react';

import { FocusTrapProps } from './FocusTrap.types';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useForkRef } from '../../hooks';
import { getActiveElement, getReactElementRef, ownerDocument } from '../../utils';

// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

interface OrderedTabNode {
  documentOrder: number;
  tabIndex: number;
  node: HTMLElement;
}

const getTabIndex = (node: HTMLElement): number => {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes
  // (https://issues.chromium.org/issues/41283952), so if they don't have a tabindex attribute specifically set, assume
  // it's 0. In Chrome, <details/>, <audio controls/> and <video controls/> elements get a default `tabIndex` of -1 when
  // the 'tabindex' attribute isn't specified in the DOM, yet they are still part of the regular tab order; in FF, they
  // get a default `tabIndex` of 0. Since Chrome still puts those elements in the regular tab order, consider their tab
  // index to be 0.
  if (
    node.contentEditable === 'true' ||
    ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') &&
      node.getAttribute('tabindex') === null)
  ) {
    return 0;
  }

  return node.tabIndex;
};

const isNonTabbableRadio = (node: HTMLInputElement): boolean => {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = (selector: string) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  const roving = getRadio(`[name="${node.name}"]:checked`) || getRadio(`[name="${node.name}"]`);

  return roving !== node;
};

const isNodeMatchingSelectorFocusable = (node: HTMLInputElement): boolean => {
  return !(node.disabled || (node.tagName === 'INPUT' && node.type === 'hidden') || isNonTabbableRadio(node));
};

const defaultGetTabbable = (root: HTMLElement): HTMLElement[] => {
  const regularTabNodes: HTMLElement[] = [];
  const orderedTabNodes: OrderedTabNode[] = [];

  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node as HTMLElement);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node as HTMLInputElement)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node as HTMLElement);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node as HTMLElement,
      });
    }
  });

  return orderedTabNodes
    .sort((a, b) => (a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex))
    .map((a) => a.node)
    .concat(regularTabNodes);
};

const defaultIsEnabled = (): boolean => true;

/**
 * The FocusTrap locks the focus inside of a single child element, which is required to make overlays accessible.
 */
export const FocusTrap = (inProps: FocusTrapProps) => {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open,
  } = useDefaultProps({
    props: inProps,
    name: 'ESFocusTrap',
  });

  const ignoreNextEnforceFocus = useRef(false);
  const sentinelStart = useRef<HTMLDivElement>(null);
  const sentinelEnd = useRef<HTMLDivElement>(null);
  const nodeToRestore = useRef<EventTarget | null>(null);
  const reactFocusEventTarget = useRef<EventTarget | null>(null);

  // This variable is useful when disableAutoFocus is true. It waits for the active element to move into the component
  // to activate.
  const activated = useRef(false);

  const rootRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(getReactElementRef(children), rootRef);
  const lastKeydown = useRef<KeyboardEvent | null>(null);

  useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);

  useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);
    const activeElement = getActiveElement(doc);

    if (!rootRef.current.contains(activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(
            [
              'ESFront: The focus trap content node does not accept focus.',
              'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".',
            ].join('\n')
          );
        }

        rootRef.current.setAttribute('tabIndex', '-1');
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && (nodeToRestore.current as HTMLElement).focus) {
          ignoreNextEnforceFocus.current = true;
          (nodeToRestore.current as HTMLElement).focus();
        }

        nodeToRestore.current = null;
      }
    };

    // Missing `disableRestoreFocus` which is fine, changing that prop on an open FocusTrap is not supported.
  }, [open]);

  useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    const loopFocus = (nativeEvent: KeyboardEvent) => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      const activeElement = getActiveElement(doc);

      // Make sure the next tab starts from the right place, activeElement refers to the origin.
      if (activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };

    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17. Contain can be called between the component being unmounted
      // and its cleanup function being run.
      if (rootElement === null) {
        return;
      }

      const activeEl = getActiveElement(doc);

      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside.
      if (rootElement.contains(activeEl)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes).
      if (disableEnforceFocus && activeEl !== sentinelStart.current && activeEl !== sentinelEnd.current) {
        return;
      }

      // If the focus event is not coming from inside the children's react tree, reset the refs.
      if (activeEl !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }

      if (!activated.current) {
        return;
      }

      let tabbable: ReadonlyArray<HTMLElement> = [];

      if (activeEl === sentinelStart.current || activeEl === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current as HTMLElement);
      }

      // One of the sentinel nodes was focused, so move the focus to the first/last tabbable element inside the focus
      // trap.
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === 'Tab');

        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];

        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused
    // area, for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561. Instead, we can look if the active element
    // was restored on the BODY element. The whatwg spec defines how the browser should behave but does not explicitly
    // mention any events: https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      const activeEl = getActiveElement(doc);

      if (activeEl && activeEl.tagName === 'BODY') {
        contain();
      }
    }, 50);

    return () => {
      clearInterval(interval);

      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = (event: FocusEvent<Element, Element>) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;

    children.props.onFocus?.(event);
  };

  const onFocusSentinel = (event: FocusEvent<HTMLDivElement>) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return (
    <>
      <div ref={sentinelStart} data-testid="sentinelStart" tabIndex={open ? 0 : -1} onFocus={onFocusSentinel} />
      {cloneElement(children, { ref: handleRef, onFocus })}
      <div ref={sentinelEnd} data-testid="sentinelEnd" tabIndex={open ? 0 : -1} onFocus={onFocusSentinel} />
    </>
  );
};
