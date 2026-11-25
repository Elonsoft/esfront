import { useEffect, useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { ru as dateRU } from '@esfront/date-fns';
import { enUS as dateEN } from 'date-fns/locale';

import { DateAdapterProvider, DateInputProvider } from '../../components';
import {
  createDateInputRegistry,
  DATE_INPUT_PLACEHOLDERS_EN,
  DATE_INPUT_PLACEHOLDERS_RU,
} from '../../components/DateInput';
import { DialogStackProvider } from '../../components/DialogStack';
import { DialogStack } from '../../components/DialogStackV2';
import { LocaleProvider } from '../../components/locale/LocaleProvider.client';
import { PhoneFieldProvider } from '../../components/PhoneField';

import metadata from 'libphonenumber-js/max/metadata';

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const dateInputRegistry = useMemo(() => {
    return createDateInputRegistry(locale === 'ru' ? DATE_INPUT_PLACEHOLDERS_RU : DATE_INPUT_PLACEHOLDERS_EN);
  }, [locale]);

  useEffect(() => {
    const { classList } = document.documentElement;

    classList.toggle('mode-dark', isDarkMode === true);
    classList.toggle('mode-light', isDarkMode !== true);
  }, [isDarkMode]);

  return (
    <LocaleProvider locale={locale === 'ru' ? 'ru' : 'en'}>
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          <DateInputProvider registry={dateInputRegistry}>
            <PhoneFieldProvider metadata={metadata}>
              {children}
              <DialogStack />
            </PhoneFieldProvider>
          </DateInputProvider>
        </DateAdapterProvider>
      </DialogStackProvider>
    </LocaleProvider>
  );
};
