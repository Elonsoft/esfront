import { alpha as generateAlpha, createTheme, Palette, PaletteOptions } from '@mui/material/styles';

import { breakpoints } from '../../theming/breakpoints';
import { palettes as defaultPalettes } from '../../theming/palettes';
import { createScrollbars as createDefaultScrollbars } from '../../theming/scrollbars';
import { createTypography as createDefaultTypography } from '../../theming/typography';

const paletteDark = {
  mode: 'dark' as const,
  ...defaultPalettes.common,
  ...defaultPalettes.dark,
};

const paletteLight = {
  mode: 'light' as const,
  ...defaultPalettes.common,
  ...defaultPalettes.light,
};

const createPalette = ({ alpha = defaultPalettes.common.alpha, ...palette }: PaletteOptions): Palette => {
  for (const p in palette) {
    if ((palette as any)[p] && (palette as any)[p].alpha) {
      const paletteWithAlpha: Record<string, string> = {};

      for (const a in alpha) {
        paletteWithAlpha[a] = generateAlpha((palette as any)[p][(palette as any)[p].alpha], (alpha as any)[a]);
      }

      (palette as any)[p] = { ...paletteWithAlpha, ...(palette as any)[p] };
    }
  }

  return palette as Palette;
};

const dark = createPalette(paletteDark);
const light = createPalette(paletteLight);

const theme1 = createTheme({
  cssVariables: {
    cssVarPrefix: 'es',
  },
  colorSchemes: {
    dark: {
      palette: dark,
    },
    light: {
      palette: light,
    },
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
});

const scrollbars = { ...createDefaultScrollbars(theme1) };
const typography = { ...createDefaultTypography(theme1) };

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: 'es',
  },
  colorSchemes: {
    dark: {
      palette: dark,
    },
    light: {
      palette: light,
    },
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
  scrollbars,
  typography: {
    fontFamily: "'Roboto', sans-serif",
    ...typography,
  },
});
