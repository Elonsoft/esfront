import { ReactNode } from 'react';

export interface IThemeProps {
  children?: ReactNode;
  isDarkMode?: boolean;
  locale?: string;
}
