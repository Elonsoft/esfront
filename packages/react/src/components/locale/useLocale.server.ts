import { cache } from 'react';

import { DEFAULT_LOCALE, getLocaleData } from './registry';

const getStore = cache(() => ({ locale: DEFAULT_LOCALE }));

export const setLocale = (locale: string) => {
  getStore().locale = locale;
};

export const useLocale = () => getLocaleData(getStore().locale);
