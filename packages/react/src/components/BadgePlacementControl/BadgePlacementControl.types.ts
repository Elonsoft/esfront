import { ReactNode } from 'react';

import { BadgePlacementControlClasses } from './BadgePlacementControl.classes';

import { SxProps, Theme } from '@mui/material';

export interface BadgePlacementControlProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<BadgePlacementControlClasses>;
  /**
   * Class applied to the root element.
   */
  className?: string;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   *  Element used as a badge.
   */
  badge: ReactNode;
  /**
   * Offset of the badge in pixels. First value used for the X-axis and second used for the Y-axis.
   * @default "[0, 0]"
   */
  offset?: [number, number];
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap?: 'rectangular' | 'circular';
  /**
   * Position of the badge.
   * @default 'top-right'
   */
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}
