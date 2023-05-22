import { ReactNode } from 'react';

import { ChipsClasses } from './Chips.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface ChipsProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ChipsClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The amount of visible lines.
   * @default 1
   */
  maxLines?: number;

  /** Text for the hide button. */
  labelHide?: ReactNode;
  /** Text for the show button aria-label. */
  labelShow?: string;

  /** Icon for the hide button. */
  iconHide?: ReactNode;
  /** Icon for the show button. */
  iconShow?: ReactNode;
}
