import { TableActionsClasses } from './TableActions.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface TableActionsProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TableActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The number of selected rows. */
  count?: number;
  /** Customize the selected rows count label. */
  label?: string;
}
