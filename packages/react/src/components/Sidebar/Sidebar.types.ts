import { CSSProperties, ReactNode } from 'react';

export interface SidebarProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary';
  /**
   * The width of the component.
   * @default 280
   */
  width?: number;
  /**
   * The min width of the component.
   * @default 220
   */
  minWidth?: number;
  /**
   * The max width of the component.
   * @default 400
   */
  maxWidth?: number;
  /** Callback function that is fired when the cell's width changed. */
  onWidthChange?: (width: number) => void;
  /** Callback function that is fired when the cell's width finished changing. */
  onWidthChangeCommit?: (width: number) => void;
}
