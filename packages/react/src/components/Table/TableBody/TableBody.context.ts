import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface TableBodyContextValue {
  ref: HTMLDivElement | null;
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
}

export const TableBodyContext = createContext<TableBodyContextValue | null>(null);

/**
 * The hook that returns the table body context. Throws when used outside of `Table`.
 */
export const useTableBodyContext = () => {
  const value = useContext(TableBodyContext);

  if (value === null) {
    throw new Error('No provider for TableBodyContext.');
  }

  return value;
};
