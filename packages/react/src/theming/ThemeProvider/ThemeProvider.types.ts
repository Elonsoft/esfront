import { ReactNode } from 'react';

import { Breakpoint, Components, CssVarsTheme, Theme, TypographyVariantsOptions } from '@mui/material/styles';

export interface ThemeProviderProps {
  children: ReactNode;
  /** A theme object, usually the result of `createTheme()`. */
  theme: Theme;
}

export interface ThemeOptions {
  /** Breakpoints provided to the theme. */
  breakpoints?: { [key in Breakpoint]: number };
  /** Function to create a components object from the typography and the theme with breakpoints and palette. */
  components?: (
    theme: Theme,
    typography: TypographyVariantsOptions
  ) => Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;
  /** Function to create a typography object from the theme with breakpoints and palette. */
  typography?: (theme: Theme) => TypographyVariantsOptions;
}
