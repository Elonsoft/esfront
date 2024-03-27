import { ReactNode } from 'react';

import { GallerySwiperClasses } from './GallerySwiper.classes';

import { SxProps, Theme } from '@mui/material';

import { SwiperProps } from '../../Swiper';

export interface GallerySwiperProps {
  /** Function to render the item. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GallerySwiperClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** Props applied to the Swiper element. */
  SwiperProps?: Partial<SwiperProps>;

  /** Text for the prev button aria-label. */
  labelPrev?: string;
  /** Text for the next button aria-label. */
  labelNext?: string;

  /** Icon for the prev button. */
  iconPrev?: ReactNode;
  /** Icon for the text button. */
  iconNext?: ReactNode;
}
