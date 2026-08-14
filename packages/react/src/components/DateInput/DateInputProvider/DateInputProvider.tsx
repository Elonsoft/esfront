'use client';

import { DateInputProviderProps } from './DateInputProvider.types';

import { DateInputContext } from '../DateInput.context';

/**
 * Supplies the formatters a date input reads its format with, by the token each one is registered under.
 * @see `DateInput`
 */
export const DateInputProvider = ({ children, registry }: DateInputProviderProps) => {
  return <DateInputContext.Provider value={registry}>{children}</DateInputContext.Provider>;
};
