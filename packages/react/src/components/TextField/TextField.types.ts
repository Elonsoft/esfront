import { FormFieldProps } from '../FormField';

export interface TextFieldProps {
  variant?: FormFieldProps['variant'];
  size?: FormFieldProps['size'];

  required?: FormFieldProps['required'];
  disabled?: FormFieldProps['disabled'];
  error?: FormFieldProps['error'];
  fullWidth?: FormFieldProps['fullWidth'];
}
