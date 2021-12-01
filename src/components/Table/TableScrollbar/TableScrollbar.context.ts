import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface TableScrollbarContextValue {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  ref: HTMLDivElement | null;
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
}

export const TableScrollbarContext = createContext<TableScrollbarContextValue | null>(null);

export const useTableScrollbarContext = () => {
  const value = useContext(TableScrollbarContext);

  if (value === null) {
    throw new Error('No provider for TableScrollbarContext.');
  }

  return value;
};
