import { ReactNode } from 'react';

import { TextFieldProps } from '@mui/material';

export type SearchProps = {
  /** Callback fired when the clear button is clicked. If prop is passed clear button will appear. */
  onClear?: () => void;
  /** The aria-label input content. */
  ariaLabel?: string;
  /** The aria-label for the clear button. */
  labelClear?: string;
  /** The icon placed in clear button. */
  iconClear?: ReactNode;
  /** The icon placed in before the search input. */
  iconSearch?: ReactNode;
} & TextFieldProps;
