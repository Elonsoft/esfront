/* eslint-disable @typescript-eslint/no-empty-object-type */

import { MouseEvent, ReactNode } from 'react';

import { OverridableStringUnion, OverrideProps } from '../../../types';
import { ExtendButtonBaseTypeMap } from '../../ButtonBase';

export interface ToggleButtonPropsSizeOverrides {}

export interface ToggleButtonOwnProps {
  children?: ReactNode;
  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
   */
  value: string;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * @default '500'
   */
  size?: OverridableStringUnion<'400' | '500' | '600' | '700', ToggleButtonPropsSizeOverrides>;
  /**
   * Element placed before the children.
   */
  startIcon?: ReactNode;
  /**
   * If `true`, the button is rendered in an active state.
   * @default false
   */
  selected?: boolean;
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: (event: MouseEvent, value: string) => void;
}

export type ToggleButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & ToggleButtonOwnProps;
  defaultComponent: RootComponent;
}>;

export type ToggleButtonProps<
  RootComponent extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<ToggleButtonTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};
