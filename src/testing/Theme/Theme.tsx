import { FC, useMemo } from 'react';
import { IThemeProps } from './Theme.types';

import { enUS, ruRU } from '@mui/material/locale';

import DateFnsAdapter from '@date-io/date-fns';
import { ru as dateRU, enUS as dateEN } from 'date-fns/locale';

import { ThemeProvider, palettes } from '../../theming';
import { en, ru, DateAdapterProvider } from '../../ui';

export const Theme: FC<IThemeProps> = ({ children, isDarkMode, locale }) => {
  const palette = useMemo(() => {
    return {
      mode: isDarkMode ? ('dark' as const) : ('light' as const),
      ...palettes.common,
      ...(isDarkMode ? palettes.dark : palettes.light)
    };
  }, [isDarkMode]);

  const args = useMemo(() => {
    return locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en };
  }, [locale]);

  return (
    <ThemeProvider palette={palette} args={args}>
      <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
        {children}
      </DateAdapterProvider>
    </ThemeProvider>
  );
};
