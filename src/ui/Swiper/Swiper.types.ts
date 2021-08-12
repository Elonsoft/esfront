import { Ref, ComponentType, ReactNode } from 'react';
import { SwiperClasses } from './Swiper.classes';
import { SwiperPaginationClasses } from './SwiperPagination.classes';

export type SwiperDirection = 'horizontal' | 'vertical';
export type SwiperAlignment = 'center' | 'start';

export interface SwiperButtonProps {
  /** Class applied to the root element. */
  className?: string;
  /** Text for the aria-label. */
  label?: string;
  /** Callback fired when the button is clicked.*/
  onClick: () => void;
}

export type SwiperPaginationBaseProps = {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SwiperPaginationClasses>;
  /** The swiper direction. */
  direction: SwiperDirection;
  /** Index of active slide. */
  active: number;
  /** Start index for pagination. */
  from: number;
  /** End index for pagination. */
  to: number;
  /** Callback fired when active slide changes through pagination. */
  onChange?: (index: number) => void;
};

export interface SwiperImperativeActions {
  /** Set active slide by its index. */
  setActiveSlide: (index: number) => void;
}

export interface SwiperProps<P extends SwiperPaginationBaseProps> {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;

  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SwiperClasses>;

  /**
   * The swiper direction.
   * @default 'horizontal'
   */
  direction?: SwiperDirection;

  /**
   * Alignment of the slides.
   * @default 'center'
   **/
  alignment?: SwiperAlignment;

  /**
   * The gap between slides.
   * @default 16
   */
  gap?: number;

  /** Whether CSS Scroll Snap is enabled. */
  snap?: boolean;
  /** Whether the swiper can be scrolled by mouse drag. Not working well with snap mode. */
  draggable?: boolean;
  /** Whether the loop mode is enabled and the interval between slides change. */
  loop?: number;

  /**
   * Slides count to loop.
   * @default 1
   */
  loopCount?: number;

  /** A ref for imperative actions. */
  actions?: Ref<SwiperImperativeActions>;

  /** Callback fired when active slide (closest to the center) changes. */
  onActiveSlideChange?: (index: number) => void;
  /** Callback fired when pagination range changes. */
  onPaginationRangeChange?: (from: number, to: number) => void;

  /** The component used for the prev button. */
  buttonPrev?: ComponentType<SwiperButtonProps> | null;
  /** Text for the prev button aria-label. */
  buttonPrevLabel?: string;
  /** The component used for the next button. */
  buttonNext?: ComponentType<SwiperButtonProps> | null;
  /** Text for the next button aria-label. */
  buttonNextLabel?: string;

  /**
   * Count of slides to scroll when pressing a button.
   * @default 1
   */
  buttonScrollDistance?: number;

  /** The component used for the pagination. */
  pagination?: ComponentType<P> | null;
  /** Props applied to the pagination component. */
  PaginationProps?: Partial<P>;
}
