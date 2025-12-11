import { ThemeOptions } from './ThemeProvider.types';

import { extendTheme as extendMUITheme } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import { en } from '../../components/locale';
import { breakpoints as defaultBreakpoints } from '../breakpoints';
import { createComponents as createDefaultComponents } from '../components';
import { createTypography as createDefaultTypography } from '../typography';

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export const createTheme = (
  { components: createComponents, typography: createTypography, breakpoints = defaultBreakpoints }: ThemeOptions,
  ...args: any
) => {
  const cssVarPrefix = 'es';

  const theme = extendMUITheme({
    cssVarPrefix,
    colorSchemeSelector: '.mode-%s',
    breakpoints: {
      values: {
        ...breakpoints,
      },
    },
  });

  const typography = { ...createDefaultTypography(theme), ...(createTypography ? createTypography(theme) : {}) };
  const components = {
    ...createDefaultComponents(theme, typography),
    ...(createComponents ? createComponents(theme, typography) : {}),
  };

  return extendMUITheme(
    {
      cssVarPrefix,
      colorSchemeSelector: '.mode-%s',
      colorSchemes: {
        dark: true,
        light: true,
      },
      breakpoints: {
        values: {
          ...theme.breakpoints.values,
        },
      },
      components,
      typography: {
        fontFamily: "'Nunito Sans', sans-serif",
        ...typography,
      },
    },
    enUS,
    en,
    ...(args as any)
  );
};
