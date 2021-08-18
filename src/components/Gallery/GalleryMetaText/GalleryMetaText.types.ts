import { ReactNode } from 'react';

import { GalleryMetaTextClasses } from './GalleryMetaText.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface GalleryMetaTextProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryMetaTextClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Whether the text is primary. */
  primary?: boolean;
}
