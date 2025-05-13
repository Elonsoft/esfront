import { ReactNode } from 'react';

import { HeaderNavigationClasses } from './HeaderNavigation.classes';

import { SxProps, Theme } from '@mui/material';

export interface HeaderNavigationProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<HeaderNavigationClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
