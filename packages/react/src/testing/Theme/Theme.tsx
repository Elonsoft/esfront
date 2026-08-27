import { useEffect, useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { PhoneFieldProvider } from '../../components/PhoneField';
import { DefaultPropsProvider } from '../../theming';

import metadata from 'libphonenumber-js/max/metadata';

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const components = useMemo(() => {
    return locale === 'ru' ? ru.components : en.components;
  }, [locale]);

  useEffect(() => {
    const { classList } = document.documentElement;

    classList.toggle('mode-dark', isDarkMode === true);
    classList.toggle('mode-light', isDarkMode !== true);
  }, [isDarkMode]);

  return (
    <DefaultPropsProvider value={components}>
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          <PhoneFieldProvider metadata={metadata}>{children}</PhoneFieldProvider>
        </DateAdapterProvider>
      </DialogStackProvider>
    </DefaultPropsProvider>
  );
};
