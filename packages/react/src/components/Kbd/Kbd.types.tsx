import { CSSProperties, ReactNode } from 'react';

export interface KbdProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * Variant of the component.
   * @default 'raised'
   */
  variant?: 'raised' | 'contained' | 'outlined';
}
