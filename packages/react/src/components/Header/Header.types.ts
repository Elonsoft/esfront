import { ReactNode } from 'react';

import { HeaderClasses } from './Header.classes';

import { SxProps, Theme } from '@mui/material';

export interface HeaderProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<HeaderClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
