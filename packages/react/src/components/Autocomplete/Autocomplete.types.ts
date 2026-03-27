import { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

import { AutocompleteMenuProps } from '../AutocompleteMenu';
import { TextFieldProps } from '../TextField';

export type AutocompleteProps<T> = {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Id of the control. */
  id?: string;
  /** Ref forwarded to the control. */
  inputRef?: Ref<HTMLDivElement | null>;
  /** Name of the control, reported back by `onBlur`. */
  name?: string;
  /** Content of the label. Only used to cut the notch in the outline. */
  label?: ReactNode;
  /** Text shown while nothing is selected. */
  placeholder?: string;
  /** Id of the element that describes the control. */
  'aria-describedby'?: string;
  /** If true, the control is focused on mount. */
  autoFocus?: boolean;
  /** Props applied to the control element. */
  inputProps?: HTMLAttributes<HTMLDivElement>;

  /** Element rendered before the control. */
  startAdornment?: ReactNode;
  /** Element rendered after the control. */
  endAdornment?: ReactNode;

  /** If true, it is possible to enter a search string in the input itself. */
  inlineSearch?: boolean;

  /** If true, the popper is opened. */
  open?: boolean;
  /** Callback fired when the menu requests to be opened. */
  onOpen?: () => void;
  /** Callback fired when the menu requests to be closed. */
  onClose?: () => void;

  /** Callback fired when the input loses focus. */
  onBlur?: (event: { target: { name?: string } }) => void;

  /** Props applied to the menu component. */
  MenuProps?: Partial<
    Omit<
      AutocompleteMenuProps<T>,
      | 'value'
      | 'onChange'
      | 'multiple'
      | 'getDisplayValue'
      | 'options'
      | 'getOptionLabel'
      | 'getOptionValue'
      | 'getOptionDisabled'
      | 'groupBy'
      | 'actions'
    >
  >;
  /** Props applied to the search field component. If present, shows the component. */
  SearchProps?: Partial<TextFieldProps>;
} & (
  | {
      multiple?: false;
      value: T | null;
      onChange?: (value: T | null) => void;
      getDisplayValue?: (value: T | null) => ReactNode;
    }
  | {
      multiple: true;
      value: T[];
      onChange?: (value: T[]) => void;
      getDisplayValue?: (value: T[]) => ReactNode;
    }
) &
  Pick<
    AutocompleteMenuProps<T>,
    | 'options'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'getOptionDisabled'
    | 'groupBy'
    | 'MenuGroupProps'
    | 'loading'
    | 'header'
    | 'footer'
    | 'onLoadMore'
  >;
