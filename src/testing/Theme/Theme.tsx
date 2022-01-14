import { FC, useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { enUS, ruRU } from '@mui/material/locale';

import { palettes, ThemeProvider } from '../../theming';
import { DateAdapterProvider, en, ru } from '../../ui';

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