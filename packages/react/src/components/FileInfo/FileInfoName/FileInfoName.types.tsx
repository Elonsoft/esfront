import { ReactNode } from 'react';

import { FileInfoNameClasses } from './FileInfoName.classes';

import { SxProps, Theme } from '@mui/material';

export interface FileInfoNameProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoNameClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Callback fired when the close button is clicked.*/
  onDelete?: () => void;

  /** Text for the delete button aria-label. */
  labelDelete?: string;

  /** Icon for the delete button. */
  iconDelete?: React.ReactNode;
}
