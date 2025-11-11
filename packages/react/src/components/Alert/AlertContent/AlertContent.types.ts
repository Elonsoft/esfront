import { ReactNode } from 'react';

import { AlertContentClasses } from './AlertContent.classes';

import { Breakpoint, SxProps, Theme } from '@mui/material';

export interface AlertContentProps {
  children?: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AlertContentClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The screen width at which the flex items are ordered along the cross axis.
   * @default 'tabletXS'
   */
  breakpoint?: number | Breakpoint;

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  actions?: ReactNode;
}
