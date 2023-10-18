import { ReactNode } from 'react';

import { PageHGroupMainClasses } from './PageHGroupMain.classes';

import { SxProps, Theme } from '@mui/material';

export interface PageHGroupMainProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PageHGroupMainClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
