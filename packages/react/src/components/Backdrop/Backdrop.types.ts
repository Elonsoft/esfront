import { ElementType, HTMLAttributes } from 'react';

import { TransitionProps } from '../../transitions';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the backdrop is invisible. It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible?: boolean;
  /** If `true`, the component is shown. */
  open: boolean;
  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or
   * individually with an object.
   */
  transitionDuration?: TransitionProps['timeout'];
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    transition?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
    transition?: TransitionProps;
  };
}
