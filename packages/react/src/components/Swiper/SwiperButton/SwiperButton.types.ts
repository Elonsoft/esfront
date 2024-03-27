import { SwiperButtonClasses } from './SwiperButton.classes';

import { SxProps, Theme } from '@mui/material';

export interface SwiperButtonProps {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SwiperButtonClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * Count of slides to scroll when pressing a button.
   * @default 1
   */
  step: number;

  /** Text for the prev button aria-label. */
  labelPrev?: string;
  /** Text for the prev button aria-label. */
  labelNext?: string;

  /** Icon for prev button if Swiper's direction is 'vertical'. */
  iconUp?: React.ReactNode;
  /** Icon for next button in Swiper's direction is 'vertical'. */
  iconDown?: React.ReactNode;
  /** Icon for prev button in Swiper's direction is 'horizontal'. */
  iconLeft?: React.ReactNode;
  /** Icon for next button in Swiper's direction is 'horizontal'. */
  iconRight?: React.ReactNode;
}
