import { createContext, useContext } from 'react';

export interface TableCellContextValue {
  variant: 'head' | 'body';
  rowDividers?: boolean;
  colDividers?: boolean;
}

export const TableCellContext = createContext<TableCellContextValue | null>(null);

/**
 * The hook that returns the table cell context. Throws when used outside of `Table`, `TableHead` or
 * `TableBody`.
 */
export const useTableCellContext = () => {
  const value = useContext(TableCellContext);

  if (value === null) {
    throw new Error('Not provider for TableCellContext.');
  }

  return value;
};
