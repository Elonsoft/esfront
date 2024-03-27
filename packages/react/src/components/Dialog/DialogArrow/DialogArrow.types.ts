import { DialogArrowClasses } from './DialogArrow.classes';

import { SxProps, Theme } from '@mui/material';

export type DialogArrowDirection = 'prev' | 'next';

export interface DialogArrowProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogArrowClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
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
