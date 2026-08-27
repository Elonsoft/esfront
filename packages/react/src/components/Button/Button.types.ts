/* eslint-disable @typescript-eslint/no-empty-object-type */

import {
  DistributiveOmit,
  OverridableComponent,
  OverridableStringUnion,
  OverridableTypeMap,
  OverrideProps,
} from '../../types';
import { ExtendButtonBaseTypeMap } from '../ButtonBase';

export interface ButtonPropsVariantOverrides {}

export interface ButtonPropsColorOverrides {}

export interface ButtonPropsSizeOverrides {}

export interface ButtonOwnProps {
  children?: React.ReactNode;
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'mono-a'
    | 'mono-b'
    | 'black'
    | 'white',
    ButtonPropsColorOverrides
  >;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default '500'
   */
  size?: OverridableStringUnion<
    '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000',
    ButtonPropsSizeOverrides
  >;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides>;

  /**
   * If `true`, the component is rounded.
   * @default false
   */
  rounded?: boolean;
}

export type ButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & ButtonOwnProps;
  defaultComponent: RootComponent;
}>;

/**
 * Utility to create component types that inherit props from ButtonBase.
 * This component has an additional overload if the `href` prop is set which
 * can make extension quite tricky
 */
export interface ExtendButtonTypeMap<TypeMap extends OverridableTypeMap> {
  props: TypeMap['props'] &
    (TypeMap['props'] extends { classes?: Record<string, string> }
      ? DistributiveOmit<ButtonTypeMap['props'], 'classes'>
      : ButtonTypeMap['props']);
  defaultComponent: TypeMap['defaultComponent'];
}

export type ExtendButton<TypeMap extends OverridableTypeMap> = ((
  props: {} & OverrideProps<ExtendButtonBaseTypeMap<TypeMap>, 'button'>
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<TypeMap>>;
