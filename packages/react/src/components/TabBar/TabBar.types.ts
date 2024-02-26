import { ReactNode } from 'react';

import { TabBarClasses } from './TabBar.classes';

import { SxProps, Theme } from '@mui/material';

export interface TabBarProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  sx?: SxProps<Theme>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  classes?: Partial<TabBarClasses>;
  /** Class applied to the root element. */
  className?: string;
}
