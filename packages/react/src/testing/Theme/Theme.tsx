import { useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { enUS, ruRU } from '@mui/material/locale';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { createTheme, palettes, ThemeProvider } from '../../theming';

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const theme = useMemo(() => {
    return createTheme(
      {
        palette: {
          mode: isDarkMode ? ('dark' as const) : ('light' as const),
          ...palettes.common,
          ...(isDarkMode ? palettes.dark : palettes.light)
        }
      },
      locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en }
    );
  }, [isDarkMode, locale]);

  return (
    <ThemeProvider theme={theme}>
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          {children}
        </DateAdapterProvider>
      </DialogStackProvider>
    </ThemeProvider>
  );
};
