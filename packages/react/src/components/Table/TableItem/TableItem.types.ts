import { CSSProperties, ReactNode } from 'react';

export interface TableItemProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The avatar to display.
   */
  avatar?: ReactNode;
  /**
   * The primary text  to display.
   */
  primary?: ReactNode;
  /**
   * The secondary text to display.
   */
  secondary?: ReactNode;
}
