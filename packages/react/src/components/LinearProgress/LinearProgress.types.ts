import { CSSProperties } from 'react';

export interface LinearProgressProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value?: number;

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer?: number;

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer';

  /**
   * The width of the progress line.
   * @default 4
   */
  width?: number;
}
