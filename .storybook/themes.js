import { themes } from '@storybook/theming';

import logoLight from './assets/logo-light.svg';
import logoDark from './assets/logo-dark.svg';

const themeCommon = {
  brandTitle: 'Elonsoft',
  brandUrl: 'https://elonsoft.ru/'
};

export const themeLight = {
  ...themes.light,
  ...themeCommon,
  brandImage: logoLight
};

export const themeDark = {
  ...themes.dark,
  ...themeCommon,
  brandImage: logoDark
};
