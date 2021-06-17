import { FC, useMemo } from 'react';
import { IThemeProps } from './Theme.types';

import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from '@material-ui/core/GlobalStyles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { enUS, ruRU } from '@material-ui/core/locale';

import { breakpoints, palettes, createTypography } from '../../theming';
import { en, ru } from '../../ui';

export const Theme: FC<IThemeProps> = ({ children, isDarkMode, locale }) => {
  const theme = useMemo(() => {
    const theme = createTheme({
      breakpoints: {
        values: {
          ...breakpoints
        }
      }
    });

    const typography = createTypography(theme);

    return createTheme(
      {
        breakpoints: {
          values: {
            ...theme.breakpoints.values
          }
        },
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          ...palettes.common,
          ...(isDarkMode ? palettes.dark : palettes.light)
        },
        typography: {
          fontFamily: "'Roboto', sans-serif",
          ...typography
        },
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true
            }
          }
        }
      },
      locale === 'ru' ? ruRU : enUS,
      locale === 'ru' ? ru : en
    );
  }, [isDarkMode, locale]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
      {children}
    </ThemeProvider>
  );
};
