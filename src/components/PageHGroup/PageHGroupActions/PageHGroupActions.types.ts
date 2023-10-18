import { ReactNode } from 'react';

import { PageHGroupActionsClasses } from './PageHGroupActions.classes';

import { SxProps, Theme } from '@mui/material';

export interface PageHGroupActionsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PageHGroupActionsClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
