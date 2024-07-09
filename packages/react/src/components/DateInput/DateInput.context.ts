'use client';

import { createContext, useContext } from 'react';

import { DateInputFormatter } from './DateInput.types';

export const DateInputContext = createContext<Map<string, DateInputFormatter> | null>(null);

export const useDateInputContext = () => {
  const value = useContext(DateInputContext);

  if (value === null) {
    throw new Error('No provider for DateInputContext.');
  }

  return value;
};
