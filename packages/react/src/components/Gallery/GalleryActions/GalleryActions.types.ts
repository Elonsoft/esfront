import { CSSProperties, ReactNode } from 'react';

export interface GalleryActionsProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Text for the close button aria-label. */
  labelClose?: string;
  /** Text for the thumbnails button aria-label. */
  labelThumbnails?: string;

  /** Icon for the close button. */
  iconClose?: ReactNode;
  /** Icon for the thumbnails button. */
  iconThumbnails?: ReactNode;
}
