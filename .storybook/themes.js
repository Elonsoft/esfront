import { themes } from '@storybook/theming';

const themeCommon = {
  brandTitle: 'Elonkit'
};

export const themeLight = {
  ...themes.light,
  ...themeCommon
};

export const themeDark = {
  ...themes.dark,
  ...themeCommon
};
