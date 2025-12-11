import { CSSProperties, ReactNode } from 'react';

export interface TableActionsProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The number of selected rows. */
  count?: number;
  /** Customize the selected rows count label. */
  label?: string;
}
