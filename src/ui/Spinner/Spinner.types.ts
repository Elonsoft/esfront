export type SpinnerColor = 'inherit' | 'primary' | 'secondary' | 'monoA';

export interface SpinnerBaseProps<T> {
  /**
   * Size of the spinner component.
   * @default 40
   **/
  size?: number;

  /** Class applied to the root element. */
  className?: string;

  /**
   * Color of the spinner component.
   * @default 'primary'
   **/
  color?: SpinnerColor;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<T>;

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
