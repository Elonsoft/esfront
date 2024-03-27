import { GalleryMetaSeparatorClasses } from './GalleryMetaSeparator.classes';

import { SxProps, Theme } from '@mui/material';

export interface GalleryMetaSeparatorProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryMetaSeparatorClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
