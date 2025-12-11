import { CSSProperties, ReactNode } from 'react';

import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputLabelProps } from '@mui/material/InputLabel';
import { TextFieldProps } from '@mui/material/TextField';

import { AutocompleteProps } from '../Autocomplete';

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
  size?: TextFieldProps['size'];

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
  /** Props applied to the `InputLabel` element. */
  InputLabelProps?: InputLabelProps;
  /** Props applied to the `FormHelperText` element. */
  FormHelperTextProps?: FormHelperTextProps;
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
  Pick<
    AutocompleteProps<T>,
    | 'autoFocus'
    | 'disabled'
    | 'error'
    | 'footer'
    | 'fullWidth'
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
    | 'required'
    | 'onBlur'
  >;
