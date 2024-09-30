import { useEffect, useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN } from 'date-fns/locale';

import { useColorScheme } from '@mui/material/styles';
import { enUS, ruRU } from '@mui/material/locale';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { createTheme, palettes, ThemeProvider } from '../../theming';

import locale from '@esfront/date-fns/ru-Ru';

const dateRU = locale;

function ColorScheme({ isDarkMode }: { isDarkMode?: boolean }) {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkMode === true ? 'dark' : 'light');
  }, [isDarkMode]);

  return null;
}

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const theme = useMemo(() => {
    return createTheme(
      {
        paletteDark: {
          ...palettes.common,
          ...palettes.dark,
        },
        paletteLight: {
          ...palettes.common,
          ...palettes.light,
        },
      },
      locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en }
    );
  }, [locale]);

  return (
    <ThemeProvider theme={theme}>
      <ColorScheme isDarkMode={isDarkMode} />
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          {children}
        </DateAdapterProvider>
      </DialogStackProvider>
    </ThemeProvider>
  );
};
