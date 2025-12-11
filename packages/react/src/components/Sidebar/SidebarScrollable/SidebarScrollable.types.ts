import { CSSProperties, ReactNode } from 'react';

export interface SidebarScrollableProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Content before scrollbar. */
  beforeScroll?: ReactNode;
  /** Content after scrollbar. */
  afterScroll?: ReactNode;
}
