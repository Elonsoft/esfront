import { PaginationClasses } from './Pagination.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface PaginationProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<PaginationClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
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
