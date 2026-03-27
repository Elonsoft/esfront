import { CSSProperties, ReactNode } from 'react';

import { AutocompleteProps } from '../Autocomplete';
import { FormFieldHelperTextProps, FormFieldLabelProps, FormFieldProps } from '../FormField';

export type AutocompleteFieldProps<T> = {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** If true, the popover will close after menu item is selected. */
  closeAfterSelect?: boolean;
  /** The helper text content. */
  helperText?: ReactNode;
  /** The size of the component. */
  size?: FormFieldProps['size'];
  /** The variant of the component. */
  variant?: FormFieldProps['variant'];

  /** Props applied to the `Autocomplete` element. */
  InputProps?: Partial<
    Omit<
      AutocompleteProps<T>,
      | 'value'
      | 'onChange'
      | 'multiple'
      | 'getDisplayValue'
      | 'options'
      | 'getOptionLabel'
      | 'getOptionValue'
      | 'getOptionDisabled'
      | 'groupBy'
    >
  >;
  /** Props applied to the `FormFieldLabel` element. */
  InputLabelProps?: FormFieldLabelProps;
  /** Props applied to the `FormFieldHelperText` element. */
  FormHelperTextProps?: FormFieldHelperTextProps;
} & (
  | {
      value: T | null;
      onChange?: (value: T | null) => void;
      getDisplayValue?: (value: T | null) => ReactNode;
      multiple?: false;
    }
  | {
      value: T[];
      onChange?: (value: T[]) => void;
      getDisplayValue?: (value: T[]) => ReactNode;
      multiple: true;
    }
) &
  Pick<FormFieldProps, 'disabled' | 'error' | 'fullWidth' | 'required'> &
  Pick<
    AutocompleteProps<T>,
    | 'autoFocus'
    | 'footer'
    | 'getOptionDisabled'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'groupBy'
    | 'MenuGroupProps'
    | 'header'
    | 'id'
    | 'inlineSearch'
    | 'label'
    | 'loading'
    | 'name'
    | 'open'
    | 'options'
    | 'placeholder'
    | 'onBlur'
  >;
