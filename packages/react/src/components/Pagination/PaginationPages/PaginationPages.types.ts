import { CSSProperties, ElementType, ReactNode } from 'react';

import { UsePaginationItem } from '../../../hooks/usePagination';

export interface PaginationPagesProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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

  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    page?: ElementType;
    previous?: ElementType;
    next?: ElementType;
  };

  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    page?: (item: UsePaginationItem) => Record<string, any>;
    previous?: (item: UsePaginationItem) => Record<string, any>;
    next?: (item: UsePaginationItem) => Record<string, any>;
  };
}
