import { CSSProperties } from '@mui/material';

export interface SwiperPaginationProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
  /** The pagination position. */
  position?: 'start' | 'end';
  /** The pagination variant. */
  variant?: 'small' | 'long' | 'big';
  /** Number of always visible items before and after active slide. */
  siblingCount?: number;
  /** The length of time a transition animation should take to complete. */
  transitionDuration?: number;
}
