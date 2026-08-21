import { forwardRef } from 'react';

import { DrawerProps } from './Drawer.types';

import clsx from 'clsx';

import { duration } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

// The drawer slides in from the anchored edge towards the opposite one.
const slideDirection = { left: 'right', right: 'left' } as const;

const getTransitionDuration = (transitionDuration: DrawerProps['transitionDuration'], open: boolean) => {
  if (typeof transitionDuration === 'number') {
    return transitionDuration;
  }

  return (open ? transitionDuration?.enter : transitionDuration?.exit) || 0;
};

/**
 * Navigation drawers provide access to destinations and app functionality, such as switching accounts.
 */
export const Drawer = forwardRef<HTMLDivElement | null, DrawerProps>(function Drawer(inProps, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledby,
    anchor = 'right',
    children,
    className,
    disableEscapeKeyDown = false,
    hideBackdrop = false,
    open = false,
    style,
    variant = 'temporary',
    width = '400px',
    BackdropProps,
    TransitionProps,
    transitionDuration = defaultTransitionDuration,
    onClose,
    ...other
  } = useDefaultProps({ props: inProps, name: 'ESDrawer' });

  const paperClassName = clsx('es-drawer__paper', `es-drawer__paper--anchor--${anchor}`);

  if (variant !== 'temporary') {
    const isOpen = variant === 'permanent' || open;
    const transition = variant === 'permanent' ? 0 : getTransitionDuration(transitionDuration, open);

    return (
      <div
        ref={ref}
        className={clsx(
          'es-drawer',
          'es-drawer--docked',
          `es-drawer--anchor--${anchor}`,
          isOpen && 'es-drawer--open',
          className
        )}
        style={
          {
            '--es-drawer-width': width,
            '--es-drawer-transition-duration': `${transition}ms`,
            ...style,
          } as React.CSSProperties
        }
        {...other}
      >
        <div aria-describedby={ariaDescribedby} aria-labelledby={ariaLabelledby} className={paperClassName}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <Modal
      ref={ref}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        transitionDuration,
        ...BackdropProps,
        className: clsx('es-drawer__backdrop', BackdropProps?.className),
      }}
      className={clsx('es-drawer', 'es-drawer--temporary', className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      hideBackdrop={hideBackdrop}
      open={open}
      style={{ '--es-drawer-width': width, ...style } as React.CSSProperties}
      onClose={onClose}
      {...other}
    >
      <Slide appear direction={slideDirection[anchor]} in={open} timeout={transitionDuration} {...TransitionProps}>
        <div
          aria-describedby={ariaDescribedby}
          aria-labelledby={ariaLabelledby}
          aria-modal="true"
          className={paperClassName}
          role="dialog"
        >
          {children}
        </div>
      </Slide>
    </Modal>
  );
});
