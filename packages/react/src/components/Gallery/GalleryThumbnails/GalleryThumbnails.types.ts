import { CSSProperties, ReactNode } from 'react';

import { SwiperProps } from '../../Swiper';

export interface GalleryThumbnailsProps {
  /** Function to render the item. */
  children: (item: any, index: number) => ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
