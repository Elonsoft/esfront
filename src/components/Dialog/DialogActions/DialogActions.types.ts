import { ReactNode } from 'react';

import { DialogActionsClasses } from './DialogActions.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface DialogActionsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Whether the actions should be sticky. */
  sticky?: boolean;
}
