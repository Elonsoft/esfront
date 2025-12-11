import { CSSProperties, ReactNode } from 'react';

export interface FileIconProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The icon's width.
   * @default 36
   */
  width?: number;

  /**
   * The icon's height.
   * @default 48
   */
  height?: number;

  /** The background icon component. */
  icon?: React.FC;
}
