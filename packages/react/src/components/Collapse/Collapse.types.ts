import { ReactNode } from 'react';

import { TransitionProps } from '../../transitions';

export interface CollapseProps extends Omit<TransitionProps, 'timeout'> {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;

  /**
   * The size of the container when collapsed. A number is interpreted as pixels.
   * @default '0px'
   */
  collapsedSize?: number | string;

  /** If `true`, the component will transition in. */
  in?: boolean;

  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * Set to `'auto'` to calculate the duration from the size of the content.
   * @default duration.standard
   */
  timeout?: TransitionProps['timeout'] | 'auto';
}
