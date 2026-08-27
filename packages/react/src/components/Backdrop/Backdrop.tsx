import { forwardRef } from 'react';

import { BackdropProps } from './Backdrop.types';

import clsx from 'clsx';

import { useDefaultProps } from '../../theming';
import { Fade } from '../Fade';

/**
 * The Backdrop dims the content behind an overlay, signalling that the rest of the interface is not available.
 */
export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(inProps, ref) {
  const {
    children,
    className,
    invisible = false,
    open,
    transitionDuration,
    slots = {},
    slotProps = {},
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESBackdrop',
  });

  const Root = slots.root || 'div';
  const Transition = slots.transition || Fade;

  return (
    <Transition in={open} timeout={transitionDuration} {...slotProps.transition}>
      <Root
        ref={ref}
        aria-hidden
        className={clsx(className, 'es-backdrop', invisible && 'es-backdrop--invisible')}
        {...other}
        {...slotProps.root}
      >
        {children}
      </Root>
    </Transition>
  );
});
