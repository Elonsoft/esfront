import { CSSProperties, ReactNode } from 'react';

import { TooltipEllipsisProps } from '../../TooltipEllipsis';

export interface PageHGroupHeadingProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /**
   * Truncates a text at a specified number of lines.
   * @default 1
   */
  maxLines?: number;

  /** Element placed after the children. */
  endAdornment?: ReactNode;

  /** Props applied to the Tooltip component. */
  TooltipProps?: Partial<Omit<TooltipEllipsisProps, 'children'>>;
}
