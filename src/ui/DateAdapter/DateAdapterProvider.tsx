import { FC, useMemo } from 'react';

import { DateAdapterProviderProps } from './DateAdapterProvider.types';
import { DateAdapterContext } from './DateAdapter.context';

export const DateAdapterProvider: FC<DateAdapterProviderProps> = ({ children, adapter, formats, locale }) => {
  const value = useMemo(() => {
    return { adapter: new adapter({ formats, locale }) };
  }, [adapter, formats, locale]);

  return <DateAdapterContext.Provider value={value}>{children}</DateAdapterContext.Provider>;
};
