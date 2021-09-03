import { Theme, Breakpoint, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Components } from '@mui/material/styles/components';

export interface ThemeProviderProps {
  /** Breakpoints provided to the theme. */
  breakpoints?: { [key in Breakpoint]: number };
  /** Palette provided to thetheme. */
  palette?: PaletteOptions;
  /** Function to create a typography object from the theme with breakpoints and palette. */
  createTypography?: (theme: Theme) => TypographyOptions;
  /** Function to create a components object from the typography and the theme with breakpoints and palette. */
  createComponents?: (theme: Theme, typography: TypographyOptions) => Components;
  /** Deep merge the arguments with the about to be returned theme. */
  args?: Record<string, unknown>;
}
