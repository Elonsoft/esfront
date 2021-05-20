import React, { useMemo } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '@material-ui/core/GlobalStyles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { enUS, ruRU } from '@material-ui/core/locale';

import { useDarkMode } from 'storybook-dark-mode';

import { themeLight, themeDark } from './themes';

// @elonkit/react
import { breakpoints, createTypography } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    light: themeLight,
    dark: themeDark
  }
};

export const decorators = [
  (Story, context) => {
    const locale = context.globals.locale;
    const isDarkMode = useDarkMode();

    const theme = useMemo(() => {
      const theme = createTheme({
        breakpoints: {
          values: {
            ...breakpoints
          }
        }
      });

      const typography = createTypography(theme);

      return createTheme(
        {
          breakpoints: {
            values: {
              ...theme.breakpoints.values
            }
          },
          palette: {
            mode: isDarkMode ? 'dark' : 'light'
          },
          typography: {
            fontFamily: "'Roboto', sans-serif",
            ...typography
          },
          components: {
            MuiButton: {
              defaultProps: {
                disableElevation: true
              }
            }
          }
        },
        locale === 'ru' ? ruRU : enUS
      );
    }, [isDarkMode, locale]);

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
        <Story />
      </ThemeProvider>
    );
  }
];

const isRussian = window.navigator.language === 'ru-RU';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Set the locale of the components',
    defaultValue: isRussian ? 'ru' : 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' }
      ]
    }
  }
};
