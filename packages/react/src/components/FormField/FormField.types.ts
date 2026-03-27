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

  /**
   * If `true`, the field is shown as focused. Defaults to whether the control inside it holds the focus, pass it to
   * take over, e.g. to keep the field lit up while a menu is shown.
   */
  focused?: boolean;
}
