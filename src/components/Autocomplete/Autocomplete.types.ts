import { ReactNode } from 'react';

import { AutocompleteClasses } from './Autocomplete.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { OutlinedInputProps, PopoverProps, TextFieldProps } from '@mui/material';

export type AutocompleteProps<T> = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Array of the options. */
  options: T[];
  /** Used to determine the value for a given option. It's used for options comparison. */
  getOptionValue: (option: T) => number | string;
  /** Used to determine the string value for a given option. It's used to fill the input and the list box options. */
  getOptionLabel: (option: T) => number | string;
  /** Used to determine the disabled state for a given option. */
  getOptionDisabled?: (option: T) => boolean;

  /** If true, the component is in a loading state. This shows the labelLoading in place of options (only if options are empty). */
  loading?: boolean;
  /** Children content for the menu footer. */
  footer?: ReactNode;

  /** If true, the popover is opened. */
  open?: boolean;
  /** Callback fired when the menu requests to be opened. */
  onOpen?: () => void;
  /** Callback fired when the menu requests to be closed. */
  onClose?: () => void;
  /** Callback fired when the menu list is scrolled to the end. */
  onLoadMore?: () => void;

  /** Props applied to the popover component. */
  PopoverProps?: PopoverProps;
  /** Props applied to the search field component. If present, shows the component. */
  SearchProps?: TextFieldProps;

  /** Text for the empty state. */
  labelNoOptions?: ReactNode;
  /** Text for the empty state when search value is not empty. */
  labelNoMatches?: ReactNode;
  /** Text for the loading state. */
  labelLoading?: ReactNode;
  /** Text for the search field placeholder. */
  labelSearch?: string;
  /** Text for the search field clear button aria-label. */
  labelSearchClear?: string;

  /** Icon for the search field startAdornment. */
  iconSearch?: ReactNode;
  /** Icon for the search field clear button. */
  iconSearchClear?: ReactNode;
} & (
  | {
      value: T | null;
      onChange?: (value: T | null) => void;
      multiple?: false;
    }
  | {
      value: T[];
      onChange?: (value: T[]) => void;
      multiple: true;
    }
) &
  Pick<OutlinedInputProps, 'id' | 'label' | 'startAdornment' | 'endAdornment' | 'autoFocus'>;