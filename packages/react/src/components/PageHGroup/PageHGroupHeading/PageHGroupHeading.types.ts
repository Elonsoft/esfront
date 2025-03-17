import { ReactNode } from 'react';

import { PageHGroupHeadingClasses } from './PageHGroupHeading.classes';

import { SxProps, Theme } from '@mui/material';

import { TooltipEllipsisProps } from '../../TooltipEllipsis';

export interface PageHGroupHeadingProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<PageHGroupHeadingClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

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
