import { ReactNode } from 'react';

import { GalleryMetaClasses } from './GalleryMeta.classes';

import { SxProps, Theme } from '@mui/material';

export interface GalleryMetaProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryMetaClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Text for the close button aria-label. */
  labelClose?: string;

  /** Icon for the close button. */
  iconClose?: ReactNode;
}
