import { CSSProperties, ReactNode } from 'react';

export interface FormFieldLabelProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
}
