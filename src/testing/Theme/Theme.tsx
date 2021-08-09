import { FC, useMemo } from 'react';
import { IThemeProps } from './Theme.types';

import { enUS, ruRU } from '@material-ui/core/locale';

import { ThemeProvider, palettes } from '../../theming';
import { en, ru } from '../../ui';

export const Theme: FC<IThemeProps> = ({ children, isDarkMode, locale }) => {
  const palette = useMemo(() => {
    return {
      mode: isDarkMode ? ('dark' as const) : ('light' as const),
      ...palettes.common,
      ...(isDarkMode ? palettes.dark : palettes.light)
    };
  }, [isDarkMode]);

  const args = useMemo(() => {
    return locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en };
  }, [locale]);

  return (
    <ThemeProvider palette={palette} args={args}>
      {children}
    </ThemeProvider>
  );
};
