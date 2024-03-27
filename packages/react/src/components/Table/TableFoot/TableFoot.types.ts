import { ReactNode } from 'react';

import { TableFootClasses } from './TableFoot.classes';

import { SxProps, Theme } from '@mui/material';

export interface TableFootProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableFootClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** If present, makes element sticky and specifies a threshold for sticky positioning. */
  sticky?: number;
}
