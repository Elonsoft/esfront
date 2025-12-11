import { CSSProperties, ReactNode } from 'react';

export interface TableFootProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** If present, makes element sticky and specifies a threshold for sticky positioning. */
  sticky?: number;
}
