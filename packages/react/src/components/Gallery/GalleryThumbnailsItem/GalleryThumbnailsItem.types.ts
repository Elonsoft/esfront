import { CSSProperties, ReactNode } from 'react';

export interface GalleryThumbnailsItemProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Whether the item is active. */
  isActive?: boolean;
  /** Callback fired when user clicks on the element. */
  onClick?: () => void;
}
