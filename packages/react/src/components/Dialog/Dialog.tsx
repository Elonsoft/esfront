import { forwardRef, useRef } from 'react';

import { DialogProps } from './Dialog.types';

import clsx from 'clsx';

import { duration } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { unstable_useId as useId } from '@mui/utils';

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 */
export const Dialog = forwardRef<HTMLDivElement | null, DialogProps>(function Dialog(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'MuiDialog' });
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    children,
    before,
    after,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = fullScreen,
    maxWidth = '100%',
    align = 'center',
    onClose,
    open,
    BackdropProps,
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const backdropClick = useRef<boolean | null>(null);

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.

    if (wrapperRef.current && wrapperRef.current === event.target) {
      backdropClick.current = true;
    } else {
      backdropClick.current = false;
    }
  };

  const onDialogBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const ariaLabelledby = useId(ariaLabelledbyProp);

  return (
    <Modal
      ref={ref}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        transitionDuration,
        ...BackdropProps,
        className: clsx('es-dialog__backdrop', BackdropProps?.className),
      }}
      className={clsx('es-dialog', className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      open={open || false}
      onClick={onDialogBackdropClick}
      onClose={onClose}
      {...other}
    >
      <TransitionComponent appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
        <div
          className={clsx('es-dialog__container', fullScreen && 'es-dialog__container--full-screen')}
          onMouseDown={onMouseDown}
        >
          <div
            ref={wrapperRef}
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            className={clsx(
              'es-dialog__wrapper',
              `es-dialog__wrapper--align--${align}`,
              fullScreen && 'es-dialog__wrapper--full-screen'
            )}
            role="dialog"
          >
            <div
              className={clsx(
                'es-dialog__content',
                fullWidth && 'es-dialog__content--full-width',
                fullScreen && 'es-dialog__content--full-screen'
              )}
              style={{ maxWidth }}
            >
              {before}
              <div className={clsx('es-dialog__paper', fullScreen && 'es-dialog__paper--full-screen')}>{children}</div>
              {after}
            </div>
          </div>
        </div>
      </TransitionComponent>
    </Modal>
  );
});
