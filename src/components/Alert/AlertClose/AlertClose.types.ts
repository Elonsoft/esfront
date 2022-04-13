import { ReactNode } from 'react';

import { AlertCloseClasses } from './AlertClose.classes';

import { SxProps, Theme } from '@mui/material';

export interface AlertCloseProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AlertCloseClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Text for the button aria-label. */
  label?: string;
  /** Icon for the button. */
  icon?: ReactNode;
  /** Callback fired when the button is clicked.*/
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
