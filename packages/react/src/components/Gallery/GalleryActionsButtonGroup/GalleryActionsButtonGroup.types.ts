import { ReactNode } from 'react';

import { GalleryActionsButtonGroupClasses } from './GalleryActionsButtonGroup.classes';

import { SxProps, Theme } from '@mui/material';

export interface GalleryActionsButtonGroupProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryActionsButtonGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
