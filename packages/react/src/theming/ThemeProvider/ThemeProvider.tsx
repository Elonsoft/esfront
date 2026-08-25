import { ThemeProviderProps } from './ThemeProvider.types';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
