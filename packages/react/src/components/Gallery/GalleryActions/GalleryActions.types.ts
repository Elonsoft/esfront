import { ReactNode } from 'react';

import { GalleryActionsClasses } from './GalleryActions.classes';

import { SxProps, Theme } from '@mui/material';

export interface GalleryActionsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Text for the close button aria-label. */
  labelClose?: string;
  /** Text for the thumbnails button aria-label. */
  labelThumbnails?: string;

  /** Icon for the close button. */
  iconClose?: ReactNode;
  /** Icon for the thumbnails button. */
  iconThumbnails?: ReactNode;
}
