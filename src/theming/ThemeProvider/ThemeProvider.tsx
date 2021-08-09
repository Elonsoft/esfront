import { FC, useMemo } from 'react';
import { ThemeProviderProps } from './ThemeProvider.types';

import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '@material-ui/core/GlobalStyles';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { enUS } from '@material-ui/core/locale';

import {
  breakpoints as defaultBreakpoints,
  palettes as defaultPalettes,
  createTypography as createDefaultTypography,
  createComponents as createDefaultComponents
} from '../../theming';
import { en } from '../../ui';

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
