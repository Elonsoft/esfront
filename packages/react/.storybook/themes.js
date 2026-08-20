import logoDark from './assets/logo-dark.svg';
import logoLight from './assets/logo-light.svg';

import { themes } from 'storybook/theming';

const themeCommon = {
  brandTitle: 'Elonsoft',
  brandUrl: 'https://elonsoft.ru/',
};

export const themeLight = {
  ...themes.light,
  ...themeCommon,
  brandImage: logoLight,
};

export const themeDark = {
  ...themes.dark,
  ...themeCommon,
  brandImage: logoDark,
};
