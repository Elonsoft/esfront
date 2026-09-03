'use client';

import { KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import {
  UseModalBackdropSlotProps,
  UseModalParameters,
  UseModalReturnValue,
  UseModalRootSlotProps,
} from './useModal.types';

import { ariaHidden, ModalManager } from './ModalManager';

import { useEvent, useForkRef } from '../../hooks';
import { createChainedFunction, EventHandlers, extractEventHandlers, ownerDocument } from '../../utils';

const getContainer = (container: UseModalParameters['container']) => {
  return typeof container === 'function' ? container() : container;
};

const getHasTransition = (children: UseModalParameters['children']) => {
  return children ? Object.prototype.hasOwnProperty.call(children.props, 'in') : false;
};

const noop = () => {};

// A modal manager used to track and manage the state of open modals. Modals don't open on the server so this won't
// conflict with concurrent requests.
const manager = new ModalManager();

/** The hook implementing the behaviour of the Modal, without any of its markup. */
export const useModal = (parameters: UseModalParameters): UseModalReturnValue => {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef,
  } = parameters;

  const modal = useRef({} as { modalRef: HTMLDivElement; mount: HTMLElement });
  const mountNodeRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = useState(!open);
  const hasTransition = getHasTransition(children);

  let ariaHiddenProp = true;

  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }

  const getDoc = () => ownerDocument(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current as HTMLDivElement;
    modal.current.mount = mountNodeRef.current as HTMLElement;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), { disableScrollLock });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };

  const handleOpen = useEvent(() => {
    const resolvedContainer = (getContainer(container) || getDoc().body) as HTMLElement;

    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });

  const isTopModal = () => manager.isTopModal(getModal());

  const handlePortalRef = useEvent((node: Element | null) => {
    mountNodeRef.current = node as HTMLElement | null;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });

  const handleClose = useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);

  useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const createHandleKeyDown = (otherHandlers: EventHandlers) => (event: KeyboardEvent) => {
    otherHandlers.onKeyDown?.(event);

    // The handler doesn't take event.defaultPrevented into account, because event.preventDefault() is meant to stop
    // default behaviors like clicking a checkbox to check it, hitting a button to submit a form, and hitting left arrow
    // to move the cursor in a text input etc. Only special HTML elements have these default behaviors.
    if (
      event.key !== 'Escape' ||
      // Wait until IME is settled.
      event.which === 229 ||
      !isTopModal()
    ) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const createHandleBackdropClick = (otherHandlers: EventHandlers) => (event: MouseEvent) => {
    otherHandlers.onClick?.(event);

    if (event.target !== event.currentTarget) {
      return;
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const getRootProps = <TOther extends Record<string, any> = object>(
    otherHandlers: TOther = {} as TOther
  ): UseModalRootSlotProps<TOther> => {
    // The custom event handlers shouldn't be spread on the root element.
    const propsEventHandlers = extractEventHandlers(parameters as Record<string, unknown>, [
      'onClose',
      'onTransitionEnter',
      'onTransitionExited',
    ]);

    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers,
    };

    return {
      // Marking an element with the role presentation indicates to assistive technology that this element should be
      // ignored; it exists to support the web application and is not meant for humans to interact with directly.
      role: 'presentation',
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef,
    } as UseModalRootSlotProps<TOther>;
  };

  const getBackdropProps = <TOther extends Record<string, any> = object>(
    otherHandlers: TOther = {} as TOther
  ): UseModalBackdropSlotProps<TOther> => {
    return {
      'aria-hidden': true,
      ...otherHandlers,
      onClick: createHandleBackdropClick(otherHandlers),
      open,
    } as UseModalBackdropSlotProps<TOther>;
  };

  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);

      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };

    const handleExited = () => {
      setExited(true);

      if (onTransitionExited) {
        onTransitionExited();
      }

      if (closeAfterTransition) {
        handleClose();
      }
    };

    return {
      onEnter: createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
      onExited: createChainedFunction(handleExited, children?.props.onExited ?? noop),
    };
  };

  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition,
  };
};
