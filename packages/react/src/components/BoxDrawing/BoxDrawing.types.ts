/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { BoxDrawingClasses } from './BoxDrawing.classes';

import { SxProps, Theme } from '@mui/material';

export interface BoxDrawingProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BoxDrawingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /**
   * Header of box always visible.
   */
  header?: ReactNode;

  /** If true, the children will be collapsed. */
  collapsed?: boolean;

  /** Callback fired when the collapsed attribute has been updated. */
  onChangeCollapsed?: () => void;
}
