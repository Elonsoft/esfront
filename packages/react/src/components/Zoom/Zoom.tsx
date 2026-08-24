import { cloneElement, CSSProperties, forwardRef, useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { ZoomProps } from './Zoom.types';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useForkRef } from '../../hooks';
import { createTransition, duration } from '../../transitions';
import { createTransitionCallbacks } from '../../transitions/transitionCallbacks';
import { getTransitionProps, omitOwnerState, reflow } from '../../transitions/utils';
import { getReactElementRef } from '../../utils';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: {
    transform: 'none',
  },
  entered: {
    transform: 'none',
  },
};

/**
 * The Zoom transition scales a single child element in and out.
 */
export const Zoom = forwardRef<unknown, ZoomProps>(function Zoom(inProps, ref) {
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
    timeout = defaultTimeout,
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESZoom',
  });

  const nodeRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  const callbacks = createTransitionCallbacks(nodeRef);

  const handleEnter = callbacks.enter((node, isAppearing) => {
    // So the animation always starts from the start.
    reflow(node);

    const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' });

    node.style.webkitTransition = createTransition('transform', transitionProps);
    node.style.transition = createTransition('transform', transitionProps);

    onEnter?.(node, isAppearing);
  });

  const handleExit = callbacks.exit((node) => {
    const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' });

    node.style.webkitTransition = createTransition('transform', transitionProps);
    node.style.transition = createTransition('transform', transitionProps);

    onExit?.(node);
  });

  const handleEntering = callbacks.enter(onEntering);
  const handleEntered = callbacks.enter(onEntered);
  const handleExiting = callbacks.exit(onExiting);
  const handleExited = callbacks.exit(onExited);

  const handleAddEndListener = (next: () => void) => {
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
      timeout={timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      {...other}
    >
      {(state, childProps) => {
        const restChildProps = omitOwnerState(childProps);

        return cloneElement(children, {
          ref: handleRef,
          style: {
            transform: 'scale(0)',
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...style,
            ...children.props.style,
          },
          ...restChildProps,
        });
      }}
    </Transition>
  );
});
