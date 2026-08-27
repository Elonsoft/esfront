import { forwardRef, HTMLAttributes, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { CollapseProps } from './Collapse.types';

import clsx from 'clsx';

import { useForkRef, useTimeout } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { duration, getAutoHeightDuration } from '../../transitions';
import { createTransitionCallbacks } from '../../transitions/transitionCallbacks';
import { getTransitionProps } from '../../transitions/utils';

/**
 * The Collapse transition expands a container from a collapsed size to the size of its content.
 */
export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(function Collapse(inProps, ref) {
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    style,
    timeout = duration.standard,
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESCollapse',
  });

  const timer = useTimeout();
  const autoTransitionDuration = useRef<number>(0);

  const nodeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleRef = useForkRef(nodeRef, ref);

  const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === 'horizontal';
  const size = isHorizontal ? 'width' : 'height';

  const callbacks = createTransitionCallbacks(nodeRef);

  const getWrapperSize = () =>
    wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;

  const setTransitionDuration = (node: HTMLElement, wrapperSize: number, mode: 'enter' | 'exit') => {
    const { duration: transitionDuration, easing: transitionTimingFunction } = getTransitionProps(
      { style, timeout, easing },
      { mode }
    );

    if (timeout === 'auto') {
      autoTransitionDuration.current = getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${autoTransitionDuration.current}ms`;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    if (transitionTimingFunction) {
      node.style.transitionTimingFunction = transitionTimingFunction;
    }
  };

  const handleEnter = callbacks.enter((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      // Set an absolute position to be able to measure the size of the collapsed content.
      wrapperRef.current.style.position = 'absolute';
    }

    node.style[size] = collapsedSize;

    onEnter?.(node, isAppearing);
  });

  const handleEntering = callbacks.enter((node, isAppearing) => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to the default one.
      wrapperRef.current.style.position = '';
    }

    setTransitionDuration(node, wrapperSize, 'enter');
    node.style[size] = `${wrapperSize}px`;

    onEntering?.(node, isAppearing);
  });

  const handleEntered = callbacks.enter((node, isAppearing) => {
    node.style[size] = 'auto';

    onEntered?.(node, isAppearing);
  });

  const handleExit = callbacks.exit((node) => {
    node.style[size] = `${getWrapperSize()}px`;

    onExit?.(node);
  });

  const handleExiting = callbacks.exit((node) => {
    setTransitionDuration(node, getWrapperSize(), 'exit');
    node.style[size] = collapsedSize;

    onExiting?.(node);
  });

  const handleExited = callbacks.exit(onExited);

  const handleAddEndListener = (next: () => void) => {
    if (timeout === 'auto') {
      timer.start(autoTransitionDuration.current || 0, next);
    }

    if (addEndListener && nodeRef.current) {
      addEndListener(nodeRef.current, next);
    }
  };

  return (
    <Transition
      addEndListener={handleAddEndListener}
      in={inProp}
      nodeRef={nodeRef}
      timeout={timeout === 'auto' ? undefined : timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      {...other}
    >
      {(state, childProps) => {
        return (
          <div
            ref={handleRef}
            className={clsx(
              className,
              `es-collapse--${orientation}`,
              'es-collapse',
              state === 'entered' && 'es-collapse--entered',
              state === 'exited' && !inProp && collapsedSize === '0px' && 'es-collapse--hidden'
            )}
            style={{ [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize, ...style }}
            {...(childProps as HTMLAttributes<HTMLDivElement>)}
          >
            <div ref={wrapperRef} className={clsx('es-collapse__wrapper', `es-collapse__wrapper--${orientation}`)}>
              <div className={clsx('es-collapse__wrapper-inner', `es-collapse__wrapper-inner--${orientation}`)}>
                {children}
              </div>
            </div>
          </div>
        );
      }}
    </Transition>
  );
});
