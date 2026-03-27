import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { FormFieldSize, FormFieldVariant } from './FormField.types';

export interface FormFieldContextValue {
  id: string;

  variant: FormFieldVariant;
  size: FormFieldSize;

  required: boolean;
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;

  filled: boolean;
  focused: boolean;
  adornedStart: boolean;
  setAdornedStart: Dispatch<SetStateAction<boolean>>;

  onFilled: () => void;
  onEmpty: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

export const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export const useFormFieldContext = () => {
  const value = useContext(FormFieldContext);

  if (value === null) {
    throw new Error('No provider for FormFieldContext.');
  }

  return value;
};
