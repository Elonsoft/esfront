import { createContext, useContext } from 'react';

export interface PaginationContextValue {
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

export const PaginationContext = createContext<PaginationContextValue | null>(null);

export const usePaginationContext = () => {
  const value = useContext(PaginationContext);

  if (value === null) {
    throw new Error('No provider for PaginationContext.');
  }

  return value;
};
