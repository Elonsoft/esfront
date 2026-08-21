import { CSSProperties, ReactElement } from 'react';

import { TransitionProps } from '../../transitions';

export interface GrowProps extends Omit<TransitionProps, 'timeout'> {
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

  /** If `true`, the component will transition in. */
  in?: boolean;

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * Set to `'auto'` to calculate the duration from the height of the element.
   * @default 'auto'
   */
  timeout?: TransitionProps['timeout'] | 'auto';
}
