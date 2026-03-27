import { InputHTMLAttributes } from 'react';

export type FormFieldInputElement = HTMLInputElement | HTMLTextAreaElement;

export interface FormFieldInputProps extends InputHTMLAttributes<FormFieldInputElement> {
  /** If `true`, a `textarea` that grows with its content is rendered instead of an `input`. */
  multiline?: boolean;
  /** Number of rows the textarea is tall before it starts to grow. Only applies together with `multiline`. */
  rows?: number;
}
