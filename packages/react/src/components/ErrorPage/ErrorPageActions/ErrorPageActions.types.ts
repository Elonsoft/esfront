import { CSSProperties, ReactNode } from 'react';

export interface ErrorPageActionsProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
}
