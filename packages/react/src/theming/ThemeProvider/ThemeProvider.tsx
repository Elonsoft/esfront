import { ThemeProviderProps } from './ThemeProvider.types';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type {} from '@mui/material/themeCssVarsAugmentation';

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
      {children}
    </>
  );
};
