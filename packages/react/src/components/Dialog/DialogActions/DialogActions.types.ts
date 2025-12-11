import { CSSProperties, ReactNode } from 'react';

export interface DialogActionsProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the actions should be sticky. */
  sticky?: boolean;
}
