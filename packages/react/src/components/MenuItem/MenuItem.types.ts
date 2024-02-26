/* eslint-disable @typescript-eslint/ban-types */

import { MenuItemTypeMap as MuiMenuItemTypeMap } from '@mui/material/MenuItem';
import { OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

export interface ExtendMuiMenuItemTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & Omit<MuiMenuItemTypeMap['props'], 'classes'>;
  defaultComponent: M['defaultComponent'];
}

export type MenuItemTypeMap<P = {}, D extends React.ElementType = 'li'> = ExtendMuiMenuItemTypeMap<{
  props: P & {
    /**
     * The color of the component.
     * @default 'default'
     */
    color?: 'default' | 'error';
  };
  defaultComponent: D;
}>;

export type MenuItemProps<D extends React.ElementType = MenuItemTypeMap['defaultComponent'], P = {}> = OverrideProps<
  MenuItemTypeMap<P, D>,
  D
>;
