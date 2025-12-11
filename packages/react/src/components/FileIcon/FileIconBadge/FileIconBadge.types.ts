import { CSSProperties, ReactNode } from 'react';

export interface FileIconBadgeProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * The component background color.
   */
  color: string;

  /**
   * The component size.
   * @default 'md'
   */
  size?: 'md' | 'sm';
}
