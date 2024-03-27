import React from 'react';

import { DialogCloseClasses } from './DialogClose.classes';

import { SxProps, Theme } from '@mui/material';

export interface DialogCloseProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogCloseClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Callback fired when the button is clicked.*/
  onClick?: () => void;
  /** Text for the button aria-label. */
  label?: string;
  /** Text for the escape key. */
  labelEscapeKey?: string;
  /** Icon for the button. */
  icon?: React.ReactNode;
}
