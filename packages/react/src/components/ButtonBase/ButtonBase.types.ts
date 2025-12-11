/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { TouchRippleParams } from '../TouchRipple';

export interface ButtonBaseOwnProps {
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** If true, the touch ripple effect is disabled. */
  disableTouchRipple?: boolean;
  /** Props applied to the touch ripple component. */
  TouchRippleProps?: Partial<Pick<TouchRippleParams, 'center' | 'pressGrowDuration' | 'minimumPressDuration'>>;
}

export interface ButtonBaseTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'button'> {
  props: AdditionalProps & ButtonBaseOwnProps;
  defaultComponent: RootComponent;
}

export interface ExtendButtonBaseTypeMap<TypeMap extends OverridableTypeMap> {
  props: TypeMap['props'] & Omit<ButtonBaseTypeMap['props'], 'classes'>;
  defaultComponent: TypeMap['defaultComponent'];
}

export type ExtendButtonBase<TypeMap extends OverridableTypeMap> = ((
  props: {} & OverrideProps<ExtendButtonBaseTypeMap<TypeMap>, 'button'>
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<TypeMap>>;

export type ButtonBaseProps<
  RootComponent extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<ButtonBaseTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};
