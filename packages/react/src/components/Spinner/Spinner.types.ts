import { CSSProperties } from 'react';

export type SpinnerColor = 'inherit' | 'primary' | 'secondary' | 'mono-a';

export interface SpinnerProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
}
