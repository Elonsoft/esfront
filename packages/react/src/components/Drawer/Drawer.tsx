import { forwardRef, useEffect, useRef, useState } from 'react';

import { DrawerAnchor, DrawerProps } from './Drawer.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { duration, TransitionProps } from '../../transitions';
import { createChainedFunction } from '../../utils';
import { Backdrop } from '../Backdrop';
import { Modal } from '../Modal';
import { Slide, SlideDirection } from '../Slide';

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

/** The edge the paper slides in from, keyed by the edge it is anchored to. */
const oppositeDirection: Record<DrawerAnchor, SlideDirection> = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up',
};

/**
 * The Drawer is a panel anchored to an edge of the screen. The `temporary` variant renders above the page inside a
 * modal, the `persistent` one is docked into the regular document flow.
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESDrawer' });

  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledby,
    anchor = 'left',
    children,
    className,
    hideBackdrop = false,
    onClose,
    open = false,
    slotProps = {},
    slots = {},
    style,
    transitionDuration = defaultTransitionDuration,
    variant = 'temporary',
  } = props;

  // Let's assume that the drawer will always be rendered on user space. We use this ref in order to skip the appear
  // transition during the initial mount of the component.
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  // A docked drawer stays in the document flow, so it has to be taken out of it once the exit transition is over.
  const [exited, setExited] = useState(!open);

  const isDocked = variant === 'persistent';

  const RootSlot = slots.root || Modal;
  const DockedSlot = slots.docked || 'div';
  const PaperSlot = slots.paper || 'div';
  const TransitionSlot = slots.transition || Slide;
  const BackdropSlot = slots.backdrop || Backdrop;

  const onEnter: TransitionProps['onEnter'] = () => {
    setExited(false);
  };

  const onExited: TransitionProps['onExited'] = () => {
    setExited(true);
  };

  const paper = (
    <PaperSlot
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      {...(!isDocked && { 'aria-modal': true, role: 'dialog' })}
      {...slotProps.paper}
      className={clsx(
        'es-drawer__paper',
        `es-drawer__paper--anchor-${anchor}`,
        isDocked ? 'es-drawer__paper--docked' : 'es-drawer__paper--temporary',
        slotProps.paper?.className
      )}
    >
      {children}
    </PaperSlot>
  );

  const transition = (
    <TransitionSlot
      appear={mounted.current}
      direction={oppositeDirection[anchor]}
      in={open}
      timeout={transitionDuration}
      {...slotProps.transition}
      onEnter={createChainedFunction(onEnter, slotProps.transition?.onEnter)}
      onExited={createChainedFunction(onExited, slotProps.transition?.onExited)}
    >
      {paper}
    </TransitionSlot>
  );

  if (isDocked) {
    return (
      <DockedSlot
        ref={ref}
        {...slotProps.docked}
        className={clsx(
          'es-drawer',
          'es-drawer--docked',
          `es-drawer--anchor-${anchor}`,
          !open && exited && 'es-drawer--hidden',
          className,
          slotProps.docked?.className
        )}
        style={{ ...style, ...slotProps.docked?.style }}
      >
        {transition}
      </DockedSlot>
    );
  }

  return (
    <RootSlot
      ref={ref}
      {...slotProps.root}
      className={clsx('es-drawer', `es-drawer--anchor-${anchor}`, className, slotProps.root?.className)}
      hideBackdrop={hideBackdrop}
      open={open}
      slotProps={{ backdrop: { transitionDuration, ...slotProps.backdrop } }}
      slots={{ backdrop: BackdropSlot }}
      style={{ ...style, ...slotProps.root?.style }}
      onClose={onClose}
    >
      {transition}
    </RootSlot>
  );
});
