import { ReactNode } from 'react';

import { GalleryPanelClasses } from './GalleryPanel.classes';

import { SxProps, Theme } from '@mui/material';

export interface GalleryPanelProps {
  /** Function to render the text. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryPanelClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Position of the panel. */
  position: 'top' | 'bottom';
  /** Layout direction inside of the panel. */
  direction: 'row' | 'column';
}
