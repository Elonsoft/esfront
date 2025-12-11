import { CSSProperties, ReactNode } from 'react';

export interface GalleryMetaTextProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Whether the text is primary. */
  primary?: boolean;
}
