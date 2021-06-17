import { SwiperPaginationBaseProps } from './Swiper.types';

export interface SwiperPaginationProps extends SwiperPaginationBaseProps {
  /** The pagination postion. */
  position?: 'start' | 'end';
  /** The pagination variant. */
  variant?: 'small' | 'long' | 'big';
  /** Number of always visible items before and after active slide. */
  siblingCount?: number;
  /** The length of time a transition animation should take to complete. */
  transitionDuration?: number;
}
