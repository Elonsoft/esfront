import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
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
  (Story) => {
    const isDarkMode = useDarkMode();

    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: isDarkMode ? 'dark' : 'light'
          }
        }),
      [isDarkMode]
    );

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  }
];
