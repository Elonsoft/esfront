import { GallerySwiperImageClasses } from './GallerySwiperImage.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface GallerySwiperImageProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GallerySwiperImageClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The `src` attribute for the `img` element. */
  src: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;
}
