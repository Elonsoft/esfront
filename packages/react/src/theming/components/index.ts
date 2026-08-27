import { Components, CssVarsTheme, Theme, TypographyVariantsOptions } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createComponents = (theme: Theme, typography: TypographyVariantsOptions) => {
  const components: Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme> = {};

  return components;
};
