import { FileInfoNameClasses } from './FileInfoName.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface FileInfoNameProps {
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoNameClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Text for the close button aria-label. */
  deleteLabel?: string;
  /** Callback fired when the close button is clicked.*/
  onDelete?: () => void;
}
