import { SxProps, Theme } from '@mui/material/styles';

export type SpinnerColor = 'inherit' | 'primary' | 'secondary' | 'monoA';

export interface SpinnerBaseProps<T> {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<T>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Size of the spinner component.
   * @default 40
   **/
  size?: number;

  /**
   * Color of the spinner component.
   * @default 'primary'
   **/
  color?: SpinnerColor;

  /**
   * Duration of the spinner animation in milliseconds.
   * @default 1000
   **/
  duration?: number;

  /**
   * Easing function of the spinner animation.
   * @default 'linear'
   **/
  ease?: string;
}
