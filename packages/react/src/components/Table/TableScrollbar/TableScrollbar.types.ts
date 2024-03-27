import { TableScrollbarClasses } from './TableScrollbar.classes';

import { SxProps, Theme } from '@mui/material';

export interface TableScrollbarProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableScrollbarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
