import { ReactNode } from 'react';

import { PaginationPagesClasses } from './PaginationPages.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface PaginationPagesProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PaginationPagesClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Number of always visible pages at the beginning and end. */
  boundaryCount?: number;
  /** Number of always visible pages before and after the current page. */
  siblingCount?: number;

  /** Text for the previous page button aria-label. */
  labelPrevPage?: string;
  /** Text for the next page button aria-label. */
  labelNextPage?: string;
  /** Text for the input placeholder. */
  labelPage?: string;

  /** Icon for the previous page button. */
  iconPrevPage?: React.ReactNode;
  /** Icon for the next page button. */
  iconNextPage?: React.ReactNode;
  /** Icon for the pagination ellipsis. */
  iconEllipsis?: React.ReactNode;
  /** Icon for the previous page hint in tooltip. */
  iconTooltipPrevPage?: React.ReactNode;
  /** Icon for the next page hint in tooltip. */
  iconTooltipNextPage?: React.ReactNode;
}
