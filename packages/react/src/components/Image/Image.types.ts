import { ReactNode } from 'react';

import { ImageClasses } from './Image.classes';

import { SxProps, Theme } from '@mui/material';

export interface ImageProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: ImageClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  maxZoom?: number;
}
