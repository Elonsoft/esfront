import { useMemo } from 'react';

import { DateAdapterProviderProps } from './DateAdapterProvider.types';

import { DateAdapterContext } from './DateAdapter.context';

/**
 * The provider for the date-engine that is used in variuos components.
 */
export const DateAdapterProvider = ({ children, adapter, formats, locale }: DateAdapterProviderProps) => {
  const value = useMemo(() => {
    return { adapter: new adapter({ formats, locale }) };
  }, [adapter, formats, locale]);

  return <DateAdapterContext.Provider value={value}>{children}</DateAdapterContext.Provider>;
};
