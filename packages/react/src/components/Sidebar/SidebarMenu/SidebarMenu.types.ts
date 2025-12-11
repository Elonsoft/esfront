import { CSSProperties, ReactNode } from 'react';

export interface SidebarMenuProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
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
