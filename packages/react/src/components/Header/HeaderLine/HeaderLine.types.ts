import { ReactNode } from 'react';

import { HeaderLineClasses } from './HeaderLine.classes';

import { SxProps, Theme } from '@mui/material';

export interface HeaderLineProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<HeaderLineClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
