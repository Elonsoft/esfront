'use client';

import { createContext, useContext } from 'react';

import { DateInputFormatter } from './DateInput.types';

export const DateInputContext = createContext<Map<string, DateInputFormatter> | null>(null);

/**
 * Returns the formatter registry of the closest `DateInputProvider`. Throws outside of one.
 */
export const useDateInputContext = () => {
  const value = useContext(DateInputContext);

  if (value === null) {
    throw new Error('No provider for DateInputContext.');
  }

  return value;
};
