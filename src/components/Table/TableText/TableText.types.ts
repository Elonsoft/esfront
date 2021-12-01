import { ReactNode } from 'react';

import { TableTextClasses } from './TableText.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface TableTextProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableTextClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
