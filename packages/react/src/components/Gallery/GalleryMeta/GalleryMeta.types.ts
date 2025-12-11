import { CSSProperties, ReactNode } from 'react';

export interface GalleryMetaProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Text for the close button aria-label. */
  labelClose?: string;

  /** Icon for the close button. */
  iconClose?: ReactNode;
}
