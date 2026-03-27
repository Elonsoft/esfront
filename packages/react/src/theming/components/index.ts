import { Components, CssVarsTheme, Theme, TypographyVariantsOptions } from '@mui/material/styles';

import { createList, createMenu } from './menu';
export { createMenu } from './menu';

export const createComponents = (theme: Theme, typography: TypographyVariantsOptions) => {
  const MuiMenu = createMenu(theme, typography);

  const MuiList = createList(theme, typography);

  const components: Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme> = {
    MuiMenu,
    MuiList,
  };

  return components;
};
