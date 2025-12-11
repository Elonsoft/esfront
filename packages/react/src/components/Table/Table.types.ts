import { CSSProperties, ReactNode } from 'react';

export interface TableProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The width of the columns. */
  columns: string[];
}
