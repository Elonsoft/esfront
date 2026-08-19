import { createContext, useContext } from 'react';

import { IUtils } from '@date-io/core/IUtils';

export interface DateAdapterContextValue {
  /** The instance of date-io adapter. */
  adapter?: IUtils<Date>;
}

export const DateAdapterContext = createContext<DateAdapterContextValue | null>(null);

/**
 * The hook that returns the date adapter context. Throws when used outside of `DateAdapterProvider`.
 */
export const useDateAdapterContext = () => {
  const value = useContext(DateAdapterContext);

  if (value === null) {
    throw new Error('No provider for DateAdapterContext.');
  }

  return value;
};
