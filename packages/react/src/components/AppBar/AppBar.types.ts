import { ReactNode } from 'react';

import { AppBarClasses } from './AppBar.classes';

import { SxProps, Theme } from '@mui/material';

export interface AppBarProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AppBarClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** Element placed before the children. */
  startAdornment?: ReactNode;
  /** Element placed after the children. */
  endAdornment?: ReactNode;

  /** If true, the children will be show below the root element. */
  prominent?: boolean;
}
