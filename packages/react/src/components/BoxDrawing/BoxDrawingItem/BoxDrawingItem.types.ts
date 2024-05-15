/* eslint-disable @typescript-eslint/ban-types */

import { BoxDrawingItemClasses } from './BoxDrawingItem.classes';

import { SxProps, Theme } from '@mui/material';

export interface BoxDrawingItemProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BoxDrawingItemClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  isLast?: boolean;
}
