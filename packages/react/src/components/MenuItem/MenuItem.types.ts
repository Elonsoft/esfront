/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { ListItemTypeMap } from '../ListItem';

export interface ExtendMuiMenuItemTypeMap<M extends OverridableTypeMap> {
  props: M['props'] & ListItemTypeMap['props'];
  defaultComponent: M['defaultComponent'];
}

export type MenuItemTypeMap<P = {}, D extends React.ElementType = 'li'> = ExtendMuiMenuItemTypeMap<{
  props: P;
  defaultComponent: D;
}>;

export type MenuItemProps<D extends React.ElementType = MenuItemTypeMap['defaultComponent'], P = {}> = OverrideProps<
  MenuItemTypeMap<P, D>,
  D
>;
