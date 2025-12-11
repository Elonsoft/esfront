import { CSSProperties, ReactNode } from 'react';

export interface AppBarProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Element placed before the children. */
  startAdornment?: ReactNode;
  /** Element placed after the children. */
  endAdornment?: ReactNode;

  /** If true, the children will be show below the root element. */
  prominent?: boolean;
}
