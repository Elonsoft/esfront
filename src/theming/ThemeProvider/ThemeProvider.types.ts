import { ReactNode } from 'react';

import { Breakpoint, PaletteOptions, Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export interface ThemeProviderProps {
  children?: ReactNode;
  /** Breakpoints provided to the theme. */
  breakpoints?: { [key in Breakpoint]: number };
  /** Palette provided to thetheme. */
  palette?: PaletteOptions;
  /** Function to create a scrollbars object from the theme with breakpoints and palette. */
  createScrollbars?: (theme: Theme) => any;
  /** Function to create a typography object from the theme with breakpoints and palette. */
  createTypography?: (theme: Theme) => TypographyOptions;
  /** Function to create a components object from the typography and the theme with breakpoints and palette. */
  createComponents?: (theme: Theme, typography: TypographyOptions) => Components;
  /** Deep merge the arguments with the about to be returned theme. */
  args?: Record<string, unknown>;
}
