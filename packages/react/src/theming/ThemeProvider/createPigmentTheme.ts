import { ThemeOptions } from './ThemeProvider.types';

import { alpha as generateAlpha, createTheme as createMUITheme, Palette, PaletteOptions } from '@mui/material/styles';

import { palettes as defaultPalettes } from '../../theming/palettes';
import { createScrollbars as createDefaultScrollbars } from '../../theming/scrollbars';
import { createTypography as createDefaultTypography } from '../../theming/typography';
import { breakpoints as defaultBreakpoints } from '../breakpoints';
import { createComponents as createDefaultComponents } from '../components';

const defaultPaletteDark = {
  mode: 'dark' as const,
  ...defaultPalettes.common,
  ...defaultPalettes.dark,
};

const defaultPaletteLight = {
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

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export const createTheme = (
  {
    paletteDark = defaultPaletteDark,
    paletteLight = defaultPaletteLight,
    components: createComponents,
    scrollbars: createScrollbars,
    typography: createTypography,
    breakpoints = defaultBreakpoints,
  }: ThemeOptions,
  ...args: any
) => {
  const cssVarPrefix = 'es';
  const colorSchemeSelector = '.mode-%s';

  const dark = createPalette(paletteDark);
  const light = createPalette(paletteLight);

  const theme = createMUITheme({
    cssVariables: {
      cssVarPrefix,
      colorSchemeSelector,
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

  const scrollbars = { ...createDefaultScrollbars(theme), ...(createScrollbars ? createScrollbars(theme) : {}) };
  const typography = { ...createDefaultTypography(theme), ...(createTypography ? createTypography(theme) : {}) };
  const components = {
    ...createDefaultComponents(theme, typography),
    ...(createComponents ? createComponents(theme, typography) : {}),
  };

  return createMUITheme(
    {
      cssVariables: {
        cssVarPrefix,
        colorSchemeSelector,
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
      components,
      scrollbars,
      typography: {
        fontFamily: "'Roboto', sans-serif",
        ...typography,
      },
    },
    ...args
  );
};
