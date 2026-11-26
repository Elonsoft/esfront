import { CSSProperties, ReactNode } from 'react';

export interface FiltersFooterProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Whether the footer should be sticky. */
  sticky?: boolean;
}
