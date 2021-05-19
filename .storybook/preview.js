import React, { useMemo } from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { enUS, ruRU } from '@material-ui/core/locale';

import { useDarkMode } from 'storybook-dark-mode';

import { themeLight, themeDark } from './themes';

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

    const theme = useMemo(
      () =>
        createTheme(
          {
            palette: {
              mode: isDarkMode ? 'dark' : 'light'
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
        ),
      [isDarkMode, locale]
    );

    return (
      <ThemeProvider theme={theme}>
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
