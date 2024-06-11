/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { ListItemClasses } from './ListItem.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface ListItemPropsSizeOverrides {}

export interface ListItemOwnProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ListItemClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';

  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   */
  button?: boolean;

  /**
   * The size of the component.
   * @default '200'
   */
  size?: OverridableStringUnion<'100' | '200' | '300' | '400', ListItemPropsSizeOverrides>;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Use to apply selected styling.
   * @default false
   */
  selected?: boolean;

  /**
   * Use to apply error styling.
   * @default false
   */
  error?: boolean;
}

export interface ListItemTypeMap<P = {}, D extends React.ElementType = 'li'> {
  props: P & ListItemOwnProps;
  defaultComponent: D;
}

export type ListItemProps<D extends React.ElementType = ListItemTypeMap['defaultComponent'], P = {}> = OverrideProps<
  ListItemTypeMap<P, D>,
  D
>;
