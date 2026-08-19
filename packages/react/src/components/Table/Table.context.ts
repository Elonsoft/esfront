import { createContext, useContext } from 'react';

export interface TableContextValue {
  columns: string[];
}

export const TableContext = createContext<TableContextValue | null>(null);

/**
 * The hook that returns the table context. Throws when used outside of `Table`.
 */
export const useTableContext = () => {
  const value = useContext(TableContext);

  if (value === null) {
    throw new Error('No provider for TableContext.');
  }

  return value;
};
