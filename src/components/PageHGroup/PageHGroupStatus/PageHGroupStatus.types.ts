import { ReactNode } from 'react';

import { PageHGroupStatusClasses } from './PageHGroupStatus.classes';

import { SxProps, Theme } from '@mui/material';

export interface PageHGroupStatusProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PageHGroupStatusClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
