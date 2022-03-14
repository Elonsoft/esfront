import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * The color of the component.
   * @default 'default'
   */
  color?: 'default' | 'error';
}
