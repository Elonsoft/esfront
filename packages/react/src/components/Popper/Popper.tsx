'use client';

import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';

import { PopperAnchorEl, PopperChildrenProps, PopperProps, PopperTransitionProps } from './Popper.types';

import clsx from 'clsx';

import { useForkRef } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { ownerDocument } from '../../utils';
import { Portal } from '../Portal';

import { autoUpdate, flip, limitShift, shift, useFloating, VirtualElement } from '@floating-ui/react-dom';

// `limitShift` keeps the popper tethered to its anchor: once the anchor scrolls out of the clipping container the popper
// follows it out of view instead of sticking to the boundary. It is the equivalent of popper.js's `preventOverflow`
// `tether` option, which defaulted to `true`.
const defaultMiddleware = [flip(), shift({ limiter: limitShift() })];

const resolveAnchorEl = (anchorEl: PopperAnchorEl | undefined) => {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
};

const isElement = (value: Element | VirtualElement): value is Element => {
  return (value as Element).nodeType !== undefined;
};

type PopperRootProps = PopperProps & {
  display?: 'none';
  transitionProps?: PopperTransitionProps;
};

const PopperRoot = forwardRef<HTMLDivElement, PopperRootProps>(function PopperRoot(props, ref) {
  const {
    anchorEl,
    children,
    className,
    disableAutoUpdate = false,
    display,
    middleware = defaultMiddleware,
    open,
    placement: placementProp = 'bottom',
    popperRef,
    strategy = 'absolute',
    style,
    transitionProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;

  // `container`, `disablePortal`, `keepMounted` and `transition` are part of `PopperProps` (they arrive here through the
  // `{...props}` spread in `Popper` below) but are not valid DOM attributes — drop them so they never reach `Root`.
  delete other.container;
  delete other.disablePortal;
  delete other.keepMounted;
  delete other.transition;

  const reference = useMemo(() => resolveAnchorEl(anchorEl) ?? null, [anchorEl]);

  const { refs, floatingStyles, placement, middlewareData, update } = useFloating({
    elements: { reference },
    open,
    placement: placementProp,
    strategy,
    middleware,
    whileElementsMounted: disableAutoUpdate ? undefined : autoUpdate,
  });

  useImperativeHandle(popperRef, () => ({ update }), [update]);

  const handleRef = useForkRef(refs.setFloating, ref);

  const childProps: PopperChildrenProps = { placement, middlewareData };

  if (transitionProps) {
    childProps.TransitionProps = transitionProps;
  }

  const Root = slots.root || 'div';

  return (
    <Root
      role="tooltip"
      {...other}
      {...slotProps.root}
      ref={handleRef}
      className={clsx(className, 'es-popper', slotProps.root?.className)}
      data-es-placement={placement}
      data-es-reference-hidden={middlewareData.hide?.referenceHidden ? '' : undefined}
      style={{ ...floatingStyles, display, ...style, ...slotProps.root?.style }}
    >
      {typeof children === 'function' ? children(childProps) : children}
    </Root>
  );
});

/**
 * The Popper positions a floating element next to an anchor. It is a lower-level construct — prefer the Tooltip or the
 * AutocompleteMenu when building an overlay.
 */
export const Popper = forwardRef<HTMLDivElement, PopperProps>(function Popper(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESPopper' });

  const {
    anchorEl,
    container: containerProp,
    disablePortal = false,
    keepMounted = false,
    open,
    transition = false,
  } = props;

  const [exited, setExited] = useState(true);

  const onEnter = () => {
    setExited(false);
  };

  const onExited = () => {
    setExited(true);
  };

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that. If the anchorEl prop is provided, use its owner document body.
  // Otherwise let the Portal choose.
  let container = containerProp;

  if (!container && anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);

    container =
      resolvedAnchorEl && isElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }

  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? { in: open, onEnter, onExited } : undefined;

  return (
    <Portal container={container} disablePortal={disablePortal}>
      <PopperRoot
        {...props}
        ref={ref}
        display={display}
        open={transition ? !exited : open}
        transitionProps={transitionProps}
      />
    </Portal>
  );
});
