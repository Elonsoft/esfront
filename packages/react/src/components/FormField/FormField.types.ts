import { CSSProperties, ReactNode } from 'react';

export type FormFieldVariant = 'outlined' | 'outlined-notched' | 'filled';

export type FormFieldSize = '400' | '500' | '600' | '700' | '800' | '900' | '1000';

export interface FormFieldProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  id?: string;

  variant?: FormFieldVariant;
  size?: FormFieldSize;

  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
}
