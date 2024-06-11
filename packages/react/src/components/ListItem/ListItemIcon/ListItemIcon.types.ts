import { ReactNode } from 'react';

import { ListItemIconClasses } from './ListItemIcon.classes';

import { SxProps, Theme } from '@mui/material';

export interface ListItemIconProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ListItemIconClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
