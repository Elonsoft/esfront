import { FileIconTextClasses } from './FileIconText.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface FileIconTextProps {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FileIconTextClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
