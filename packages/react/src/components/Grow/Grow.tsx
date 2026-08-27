import { cloneElement, CSSProperties, forwardRef, useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { GrowProps } from './Grow.types';

import { useForkRef, useTimeout } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { createTransition, getAutoHeightDuration } from '../../transitions';
import { createTransitionCallbacks } from '../../transitions/transitionCallbacks';
import { getTransitionProps, reflow } from '../../transitions/utils';
import { getReactElementRef } from '../../utils';

const getScale = (value: number) => `scale(${value}, ${value ** 2})`;

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: 'none',
  },
};

/**
 * The Grow transition scales and fades a single child element in and out.
 */
const GrowComponent = forwardRef<unknown, GrowProps>(function Grow(inProps, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = 'auto',
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESGrow',
  });

  const timer = useTimeout();
  const autoTimeout = useRef<number>(0);

  const nodeRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  const callbacks = createTransitionCallbacks(nodeRef);

  const getStyleTransition = (node: HTMLElement, mode: 'enter' | 'exit') => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction,
    } = getTransitionProps({ style, timeout, easing }, { mode });

    if (timeout === 'auto') {
      autoTimeout.current = getAutoHeightDuration(node.clientHeight);
    }

    const resolvedDuration = timeout === 'auto' ? autoTimeout.current : transitionDuration;

    const transformDuration = typeof resolvedDuration === 'number' ? resolvedDuration * 0.666 : resolvedDuration;
    const exitDelay = delay || (typeof resolvedDuration === 'number' ? resolvedDuration * 0.333 : 0);

    return [
      createTransition('opacity', { duration: resolvedDuration, delay }),
      createTransition('transform', {
        duration: transformDuration,
        delay: mode === 'enter' ? delay : exitDelay,
        easing: transitionTimingFunction,
      }),
    ].join(',');
  };

  const handleEnter = callbacks.enter((node, isAppearing) => {
    // So the animation always starts from the start.
    reflow(node);

    node.style.transition = getStyleTransition(node, 'enter');

    onEnter?.(node, isAppearing);
  });

  const handleExit = callbacks.exit((node) => {
    node.style.transition = getStyleTransition(node, 'exit');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    onExit?.(node);
  });

  const handleEntering = callbacks.enter(onEntering);
  const handleEntered = callbacks.enter(onEntered);
  const handleExiting = callbacks.exit(onExiting);
  const handleExited = callbacks.exit(onExited);

  const handleAddEndListener = (next: () => void) => {
    if (timeout === 'auto') {
      timer.start(autoTimeout.current || 0, next);
    }

    if (addEndListener && nodeRef.current) {
      addEndListener(nodeRef.current, next);
    }
  };

  return (
    <Transition
      addEndListener={handleAddEndListener}
      appear={appear}
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
        return cloneElement(children, {
          ref: handleRef,
          style: {
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...style,
            ...children.props.style,
          },
          ...childProps,
        });
      }}
    </Transition>
  );
});

export const Grow = Object.assign(GrowComponent, {
  /**
   * The following flag tells components, such as Popover, that the transition supports `timeout="auto"`.
   */
  esSupportAuto: true,
});
