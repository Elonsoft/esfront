import { useEffect, useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { enUS, ruRU } from '@mui/material/locale';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { PhoneFieldProvider } from '../../components/PhoneField';
import { createTheme, ThemeProvider } from '../../theming';

import metadata from 'libphonenumber-js/max/metadata';

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const theme = useMemo(() => {
    return createTheme({}, locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en });
  }, [locale]);

  useEffect(() => {
    const { classList } = document.documentElement;

    classList.toggle('mode-dark', isDarkMode === true);
    classList.toggle('mode-light', isDarkMode !== true);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          <PhoneFieldProvider metadata={metadata}>{children}</PhoneFieldProvider>
        </DateAdapterProvider>
      </DialogStackProvider>
    </ThemeProvider>
  );
};
