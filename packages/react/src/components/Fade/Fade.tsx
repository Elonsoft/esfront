import { cloneElement, CSSProperties, forwardRef, useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { FadeProps } from './Fade.types';

import { useForkRef } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { createTransition, duration } from '../../transitions';
import { createTransitionCallbacks } from '../../transitions/transitionCallbacks';
import { getTransitionProps, reflow } from '../../transitions/utils';
import { getReactElementRef } from '../../utils';

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const styles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
};

/**
 * The Fade transition animates the opacity of a single child element.
 */
export const Fade = forwardRef<unknown, FadeProps>(function Fade(inProps, ref) {
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
    name: 'ESFade',
  });

  const nodeRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  const callbacks = createTransitionCallbacks(nodeRef);

  const handleEnter = callbacks.enter((node, isAppearing) => {
    // So the animation always starts from the start.
    reflow(node);

    const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'enter' });

    node.style.webkitTransition = createTransition('opacity', transitionProps);
    node.style.transition = createTransition('opacity', transitionProps);

    onEnter?.(node, isAppearing);
  });

  const handleExit = callbacks.exit((node) => {
    const transitionProps = getTransitionProps({ style, timeout, easing }, { mode: 'exit' });

    node.style.webkitTransition = createTransition('opacity', transitionProps);
    node.style.transition = createTransition('opacity', transitionProps);

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
        return cloneElement(children, {
          ref: handleRef,
          style: {
            opacity: 0,
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
