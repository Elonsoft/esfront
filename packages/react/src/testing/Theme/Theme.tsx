import { IThemeProps } from './Theme.types';

// import DateFnsAdapter from '@date-io/date-fns';
// import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import { enUS, ruRU } from '@mui/material/locale';
import { globalCss } from '@mui/material-pigment-css';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { defaultProps } from '../../theming';

// eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-expressions
globalCss`
  body {
    font-family: Roboto, sans-serif;
  }
`;

export const Theme = ({ children, locale }: IThemeProps) => {
  return (
    <DefaultPropsProvider
      value={{
        ...(locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en }),
        ...defaultProps,
      }}
    >
      <DialogStackProvider enableHistoryOverride>{children}</DialogStackProvider>
    </DefaultPropsProvider>
  );
};

// <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
