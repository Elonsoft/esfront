import { cloneElement, forwardRef, useCallback, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { SlideDirection, SlideProps } from './Slide.types';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useForkRef } from '../../hooks';
import { createTransition, duration, easing } from '../../transitions';
import { debounce } from '../../transitions/debounce';
import { createTransitionCallbacks } from '../../transitions/transitionCallbacks';
import { getTransitionProps, omitOwnerState, reflow } from '../../transitions/utils';
import { getReactElementRef, ownerWindow } from '../../utils';

const defaultEasing = {
  enter: easing.easeOut,
  exit: easing.sharp,
};

const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const resolveContainer = (container: SlideProps['container']) =>
  typeof container === 'function' ? container() : container;

/** Calculates the transform that moves the node out of the screen or out of its container. */
const getTranslateValue = (direction: SlideDirection, node: HTMLElement, container?: HTMLElement | null) => {
  const rect = node.getBoundingClientRect();
  const containerRect = container?.getBoundingClientRect();
  const containerWindow = ownerWindow(node);

  const computedStyle = containerWindow.getComputedStyle(node);
  const transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }

    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }

  if (direction === 'right') {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }

    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === 'up') {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }

    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }

  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }

  return `translateY(-${rect.top + rect.height - offsetY}px)`;
};

const setTranslateValue = (direction: SlideDirection, node: HTMLElement, container: SlideProps['container']) => {
  const transform = getTranslateValue(direction, node, resolveContainer(container));

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
};

/**
 * The Slide transition moves a single child element in from the edge of the screen or of a container.
 */
export const Slide = forwardRef<unknown, SlideProps>(function Slide(inProps, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    container,
    direction = 'down',
    easing: easingProp = defaultEasing,
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
    name: 'ESSlide',
  });

  const nodeRef = useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);

  const callbacks = createTransitionCallbacks(nodeRef);

  const handleEnter = callbacks.enter((node, isAppearing) => {
    setTranslateValue(direction, node, container);
    reflow(node);

    onEnter?.(node, isAppearing);
  });

  const handleEntering = callbacks.enter((node, isAppearing) => {
    const transitionProps = getTransitionProps({ style, timeout, easing: easingProp }, { mode: 'enter' });

    node.style.webkitTransition = createTransition('-webkit-transform', transitionProps);
    node.style.transition = createTransition('transform', transitionProps);

    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    onEntering?.(node, isAppearing);
  });

  const handleExit = callbacks.exit((node) => {
    const transitionProps = getTransitionProps({ style, timeout, easing: easingProp }, { mode: 'exit' });

    node.style.webkitTransition = createTransition('-webkit-transform', transitionProps);
    node.style.transition = createTransition('transform', transitionProps);

    setTranslateValue(direction, node, container);

    onExit?.(node);
  });

  const handleExited = callbacks.exit((node) => {
    // No need for transitions when the component is hidden.
    node.style.webkitTransition = '';
    node.style.transition = '';

    onExited?.(node);
  });

  const handleEntered = callbacks.enter(onEntered);
  const handleExiting = callbacks.exit(onExiting);

  const handleAddEndListener = (next: () => void) => {
    if (addEndListener && nodeRef.current) {
      addEndListener(nodeRef.current, next);
    }
  };

  const updatePosition = useCallback(() => {
    if (nodeRef.current) {
      setTranslateValue(direction, nodeRef.current, container);
    }
  }, [direction, container]);

  useEffect(() => {
    // Skip the configurations where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    const handleResize = debounce(() => {
      updatePosition();
    });

    const containerWindow = ownerWindow(nodeRef.current);
    containerWindow.addEventListener('resize', handleResize);

    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp, updatePosition]);

  useEffect(() => {
    // The position has to be updated when the direction changes while the child is hidden.
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);

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
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...style,
            ...children.props.style,
          },
          ...restChildProps,
        });
      }}
    </Transition>
  );
});
