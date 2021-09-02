import { createContext, useContext } from 'react';
import { IUtils } from '@date-io/core/IUtils';

export interface DateAdapterContextValue {
  /** The instance of date-io adapter. */
  adapter?: IUtils<Date>;
}

export const DateAdapterContext = createContext<DateAdapterContextValue | null>(null);

export const useDateAdapterContext = () => {
  const value = useContext(DateAdapterContext);

  if (value === null) {
    throw new Error('Not provider for DateAdapterContext.');
  }

  return value;
};
