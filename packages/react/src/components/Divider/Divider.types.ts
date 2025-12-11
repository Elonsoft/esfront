import { CSSProperties, ReactNode } from 'react';

export interface DividerProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The color of the divider.
   * @default 'var(--es-mono-a-a100)'
   */
  color?: string;

  /**
   * The width of the divider line.
   * @default 1
   */
  width?: number;

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign?: 'center' | 'start' | 'end';

  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   */
  flexItem?: boolean;
}
