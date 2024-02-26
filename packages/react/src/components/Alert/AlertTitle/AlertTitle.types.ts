import { ReactNode } from 'react';

import { AlertTitleClasses } from './AlertTitle.classes';

import { SxProps, Theme } from '@mui/material';

export interface AlertTitleProps {
  children?: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AlertTitleClasses>;
  /** Class applied to the root element. */
  className?: string;
}
