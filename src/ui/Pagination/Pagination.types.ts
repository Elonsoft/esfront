import { PaginationClasses } from './Pagination.classes';

export interface PaginationProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PaginationClasses>;
  /** Class applied to the root element. */
  className?: string;
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
