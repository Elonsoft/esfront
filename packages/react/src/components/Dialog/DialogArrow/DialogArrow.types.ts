import { CSSProperties } from 'react';

export type DialogArrowDirection = 'prev' | 'next';

export interface DialogArrowProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  direction: 'prev' | 'next';
  /** Callback fired when the button is clicked.*/
  onClick?: () => void;

  /** Text for the prev button aria-label. */
  labelPrev?: string;
  /** Text for the next button aria-label. */
  labelNext?: string;

  /** Icon for the prev button. */
  iconPrev?: string;
  /** Icon for the next button. */
  iconNext?: string;
}
