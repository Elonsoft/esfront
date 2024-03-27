import { ReactNode } from 'react';

import { FileInfoClasses } from './FileInfo.classes';

import { SxProps, Theme } from '@mui/material';

export interface FileInfoProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
