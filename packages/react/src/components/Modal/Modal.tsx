import { cloneElement, forwardRef } from 'react';

import { ModalProps } from './Modal.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useModal } from './useModal';

import { Backdrop } from '../Backdrop';
import { FocusTrap } from '../FocusTrap';
import { Portal } from '../Portal';

/**
 * The Modal is a lower-level construct that renders its children above the rest of the page, locks the focus inside of
 * them and dims the content behind. Prefer the Dialog or the BottomSheet when building a dialog.
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESModal' });

  const {
    children,
    className,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    onTransitionEnter,
    onTransitionExited,
    open,
    slots = {},
    slotProps = {},
    ...other
  } = props;

  const { getRootProps, getBackdropProps, getTransitionProps, portalRef, isTopModal, exited, hasTransition } = useModal(
    {
      ...props,
      closeAfterTransition,
      disableEscapeKeyDown,
      disableScrollLock,
      onClose,
      onTransitionEnter,
      onTransitionExited,
      rootRef: ref,
    }
  );

  const childProps: { tabIndex?: number; onEnter?: () => void; onExited?: () => void } = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = -1;
  }

  if (hasTransition) {
    const { onEnter, onExited } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const Root = slots.root || 'div';
  const BackdropSlot = slots.backdrop || Backdrop;

  const rootProps = getRootProps({ ...other, ...slotProps.root });
  const backdropProps = getBackdropProps({ ...slotProps.backdrop });

  return (
    <Portal ref={portalRef} container={container} disablePortal={disablePortal}>
      <Root
        {...rootProps}
        className={clsx(className, 'es-modal', !open && exited && 'es-modal--hidden', slotProps.root?.className)}
      >
        {!hideBackdrop && <BackdropSlot {...backdropProps} />}
        <FocusTrap
          disableAutoFocus={disableAutoFocus}
          disableEnforceFocus={disableEnforceFocus}
          disableRestoreFocus={disableRestoreFocus}
          isEnabled={isTopModal}
          open={open}
        >
          {cloneElement(children, childProps)}
        </FocusTrap>
      </Root>
    </Portal>
  );
});
