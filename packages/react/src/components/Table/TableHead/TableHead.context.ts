import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface TableHeadContextValue {
  ref: HTMLDivElement | null;
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
}

export const TableHeadContext = createContext<TableHeadContextValue | null>(null);

/**
 * The hook that returns the table head context. Throws when used outside of `Table`.
 */
export const useTableHeadContext = () => {
  const value = useContext(TableHeadContext);

  if (value === null) {
    throw new Error('No provider for TableHeadContext.');
  }

  return value;
};
