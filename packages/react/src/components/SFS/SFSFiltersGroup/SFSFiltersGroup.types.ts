import { CSSProperties, ReactNode } from 'react';

export interface SFSFiltersGroupProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The title content. */
  title?: ReactNode;
}
