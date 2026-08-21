import { CSSProperties, ReactElement } from 'react';

import { TransitionProps } from '../../transitions';

export type SlideDirection = 'left' | 'right' | 'up' | 'down';

export interface SlideProps extends TransitionProps {
  /** A single child content element. */
  children: ReactElement<any, any>;

  /** Style applied to the child element. */
  style?: CSSProperties;

  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear?: boolean;

  /**
   * An HTML element, or a function that returns one.
   * It is used to set the container the child is transitioning from.
   */
  container?: HTMLElement | (() => HTMLElement | null) | null;

  /**
   * The direction the child element enters from.
   * @default 'down'
   */
  direction?: SlideDirection;

  /** If `true`, the component will transition in. */
  in?: boolean;

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  timeout?: TransitionProps['timeout'];
}
