import { CSSProperties, ReactNode } from 'react';

export interface FormFieldFieldProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
