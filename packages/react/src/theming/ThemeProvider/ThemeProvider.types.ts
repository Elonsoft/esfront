import { ReactNode } from 'react';

import { Breakpoint, Components, CssVarsTheme, PaletteOptions, Theme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export interface ThemeProviderProps {
  children: ReactNode;
  /** A theme object, usually the result of `createTheme()`. */
  theme: Theme;
}

export interface ThemeOptions {
  /** Breakpoints provided to the theme. */
  breakpoints?: { [key in Breakpoint]: number };
  /** Palette provided to the theme. */
  paletteDark?: PaletteOptions;
  /** Palette provided to the theme. */
  paletteLight?: PaletteOptions;
  /** Function to create a components object from the typography and the theme with breakpoints and palette. */
  components?: (
    theme: Theme,
    typography: TypographyOptions
  ) => Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme>;
  /** Function to create a scrollbars object from the theme with breakpoints and palette. */
  scrollbars?: (theme: Theme) => any;
  /** Function to create a typography object from the theme with breakpoints and palette. */
  typography?: (theme: Theme) => TypographyOptions;
}
