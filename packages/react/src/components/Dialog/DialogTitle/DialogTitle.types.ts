import { CSSProperties, ReactNode } from 'react';

export interface DialogTitleProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** Whether the title should be sticky. */
  sticky?: boolean;
}
