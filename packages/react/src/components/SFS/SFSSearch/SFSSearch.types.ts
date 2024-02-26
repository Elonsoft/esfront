import { ReactNode } from 'react';

import { SxProps, Theme } from '@mui/material';

export interface SFSSearchProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<any>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Callback fired when the value is changed. */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  /** The value of the input element. */
  value: string;
  /** Callback fired when the clear button is clicked. If prop is passed clear button will appear. */
  onClear?: () => void;
  /** The aria-label input content. */
  ariaLabel?: string;
  /** The aria-label clear button content. */
  labelClear?: string;
  /** The placeholder content. */
  placeholder?: string;
  /** The icon placed in clear button. */
  iconClear?: ReactNode;
  /** The icon placed in before the search input. */
  iconSearch?: ReactNode;
}
