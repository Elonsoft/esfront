'use client';

import { useMemo } from 'react';

import { LocaleContext } from './LocaleContext';
import { DEFAULT_LOCALE, getLocaleData } from './registry';
import type { LocaleProviderProps } from './types';

export const LocaleProvider = ({ children, locale = DEFAULT_LOCALE }: LocaleProviderProps) => {
  const value = useMemo(() => getLocaleData(locale), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
