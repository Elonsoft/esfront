import { CSSProperties } from 'react';

export interface GallerySwiperImageProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The `src` attribute for the `img` element. */
  src: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;
}
