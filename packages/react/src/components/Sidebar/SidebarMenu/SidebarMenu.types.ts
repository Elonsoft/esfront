import { ReactNode } from 'react';

import { SidebarMenuClasses } from './SidebarMenu.classes';

import { SxProps, Theme } from '@mui/material';

export interface SidebarMenuProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarMenuClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * How the menu items should be opened.
   * @default 'click'
   */
  behaviour?: 'click' | 'hover';
  /** If `true`, only one menu item can be opened at the same time. */
  exclusive?: boolean;
  /** `SidebarItems` ids that should be open on initial render. */
  defaultOpenIds?: string[];
}
