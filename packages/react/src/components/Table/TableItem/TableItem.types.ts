import { ReactNode } from 'react';

import { TableItemClasses } from './TableItem.classes';

import { SxProps, Theme } from '@mui/material';

export interface TableItemProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableItemClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /**
   * The avatar to display.
   */
  avatar?: ReactNode;
  /**
   * The primary text  to display.
   */
  primary?: ReactNode;
  /**
   * The secondary text to display.
   */
  secondary?: ReactNode;
}
