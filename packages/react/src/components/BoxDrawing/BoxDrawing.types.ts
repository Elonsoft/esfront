/* eslint-disable @typescript-eslint/ban-types */

import { BoxDrawingClasses } from './BoxDrawing.classes';

import { SxProps, Theme } from '@mui/material';

export interface BoxDrawingProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BoxDrawingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  bottomOffset?: string;
}
