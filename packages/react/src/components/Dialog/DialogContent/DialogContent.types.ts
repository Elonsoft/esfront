import { ReactNode } from 'react';

import { DialogContentClasses } from './DialogContent.classes';

import { SxProps, Theme } from '@mui/material';

export interface DialogContentProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogContentClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
