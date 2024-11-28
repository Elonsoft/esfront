/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { ListItemTypeMap } from '../ListItem';

export interface ExtendMenuItemTypeMap<TypeMap extends OverridableTypeMap> {
  props: TypeMap['props'] & ListItemTypeMap['props'];
  defaultComponent: TypeMap['defaultComponent'];
}

export type MenuItemTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'li',
> = ExtendMenuItemTypeMap<{
  props: AdditionalProps & {};
  defaultComponent: RootComponent;
}>;

export type MenuItemProps<D extends React.ElementType = MenuItemTypeMap['defaultComponent'], P = {}> = OverrideProps<
  MenuItemTypeMap<P, D>,
  D
>;
