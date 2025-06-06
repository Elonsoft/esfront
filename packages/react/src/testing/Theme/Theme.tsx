import { useEffect } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { useColorScheme } from '@mui/material/styles';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import { enUS, ruRU } from '@mui/material/locale';
import { globalCss } from '@mui/material-pigment-css';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';

function ColorScheme({ isDarkMode }: { isDarkMode?: boolean }) {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkMode === true ? 'dark' : 'light');
  }, [isDarkMode]);

  return null;
}

// eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
globalCss`
  body {
    font-family: Roboto, sans-serif;
  }
`;

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  return (
    <DefaultPropsProvider
      value={{
        ...(locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en }),
      }}
    >
      <DialogStackProvider enableHistoryOverride>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          {children}
        </DateAdapterProvider>
      </DialogStackProvider>
    </DefaultPropsProvider>
  );
};
// <ColorScheme isDarkMode={isDarkMode} />
