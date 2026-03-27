import { CSSProperties, ReactNode, Ref } from 'react';

import { FormFieldInputElement, FormFieldInputProps, FormFieldProps } from '../FormField';

export interface TextFieldProps extends Omit<FormFieldInputProps, 'className' | 'id' | 'size' | 'style' | 'value'> {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Id of the input. The label, the helper text and the input are wired together with it. */
  id?: string;

  /** Content of the label. */
  label?: ReactNode;
  /** Content of the helper text rendered below the field. */
  helperText?: ReactNode;

  /** Element rendered before the input. Wrap it in a `FormFieldAdornment` with `position="start"`. */
  startAdornment?: ReactNode;
  /** Element rendered after the input. Wrap it in a `FormFieldAdornment` with `position="end"`. */
  endAdornment?: ReactNode;

  variant?: FormFieldProps['variant'];
  size?: FormFieldProps['size'];

  required?: FormFieldProps['required'];
  disabled?: FormFieldProps['disabled'];
  error?: FormFieldProps['error'];
  fullWidth?: FormFieldProps['fullWidth'];

  /**
   * Value of the input, which turns it into a controlled component. Omit it and pass `defaultValue` instead to keep the
   * input uncontrolled.
   */
  value?: FormFieldInputProps['value'];

  /** Ref forwarded to the input. The ref of the component itself points at the root element. */
  inputRef?: Ref<FormFieldInputElement>;
}
