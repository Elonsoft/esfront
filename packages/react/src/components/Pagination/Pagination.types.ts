import { CSSProperties, ReactNode } from 'react';

export interface PaginationProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The total number of items. */
  count: number;
  /** The number of items per page. */
  itemsPerPage: number;
  /** The current page. */
  page: number;
  /** Callback fired when the page is changed. */
  onPageChange: (page: number) => void;
  /** Callback fired when the items per page is changed. */
  onItemsPerPageChange: (itemPerPage: number) => void;
}
