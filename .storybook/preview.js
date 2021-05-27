import React from 'react';

import { useDarkMode } from 'storybook-dark-mode';

import { themeLight, themeDark } from './themes';

import { Theme } from '../src/testing';

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

    return (
      <Theme isDarkMode={isDarkMode} locale={locale}>
        <Story />
      </Theme>
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
