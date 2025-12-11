import { CSSProperties, ReactNode } from 'react';

export interface BadgePlacementControlProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   *  Element used as a badge.
   */
  badge: ReactNode;
  /**
   * Offset of the badge in pixels. First value used for the X-axis and second used for the Y-axis.
   * @default "[0, 0]"
   */
  offset?: [number, number];
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap?: 'rectangular' | 'circular';
  /**
   * Position of the badge.
   * @default 'top-right'
   */
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
