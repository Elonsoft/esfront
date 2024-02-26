import { ReactNode } from 'react';

import { GalleryThumbnailsItemClasses } from './GalleryThumbnailsItem.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface GalleryThumbnailsItemProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryThumbnailsItemClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Whether the item is active. */
  isActive?: boolean;
  /** Callback fired when user clicks on the element. */
  onClick?: () => void;
}
