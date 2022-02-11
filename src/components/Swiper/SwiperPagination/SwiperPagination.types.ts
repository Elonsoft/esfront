import { SwiperPaginationClasses } from './SwiperPagination.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface SwiperPaginationProps {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SwiperPaginationClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The pagination postion. */
  position?: 'start' | 'end';
  /** The pagination variant. */
  variant?: 'small' | 'long' | 'big';
  /** Number of always visible items before and after active slide. */
  siblingCount?: number;
  /** The length of time a transition animation should take to complete. */
  transitionDuration?: number;
}
