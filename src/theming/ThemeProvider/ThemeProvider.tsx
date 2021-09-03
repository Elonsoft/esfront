import { FC, useMemo } from 'react';
import { ThemeProviderProps } from './ThemeProvider.types';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import { breakpoints as defaultBreakpoints } from '../breakpoints';
import { palettes as defaultPalettes } from '../palettes';
import { createTypography as createDefaultTypography } from '../typography';
import { createComponents as createDefaultComponents } from '../components';
import { en } from '../../ui/locale';

const defaultPalette = {
  mode: 'light' as const,
  ...defaultPalettes.common,
  ...defaultPalettes.light
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  breakpoints = defaultBreakpoints,
  palette = defaultPalette,
  createTypography = createDefaultTypography,
  createComponents = createDefaultComponents,
  args = {}
}) => {
  const theme = useMemo(() => {
    const theme = createTheme({
      breakpoints: {
        values: {
          ...breakpoints
        }
      },
      palette
    });

    const typography = createTypography(theme);
    const components = createComponents(theme, typography);

    return createTheme(
      {
        breakpoints: {
          values: {
            ...theme.breakpoints.values
          }
        },
        palette,
        typography: {
          fontFamily: "'Roboto', sans-serif",
          ...typography
        },
        components
      },
      enUS,
      en,
      args
    );
  }, [breakpoints, palette, createTypography, args]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
      {children}
    </MuiThemeProvider>
  );
};
