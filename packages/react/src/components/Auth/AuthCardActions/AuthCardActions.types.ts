import { ReactNode } from 'react';

import { AuthCardActionsClasses } from './AuthCardActions.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface AuthCardActionsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthCardActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
