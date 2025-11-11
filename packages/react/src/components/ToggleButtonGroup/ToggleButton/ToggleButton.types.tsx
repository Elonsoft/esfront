/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ToggleButtonClasses } from './ToggleButton.classes';

import { SxProps, Theme } from '@mui/material';
import { OverridableComponent, OverridableTypeMap, OverrideProps } from '@mui/material/OverridableComponent';

import { ExtendButtonBaseTypeMap } from '../../ButtonBase';

import { DistributiveOmit, OverridableStringUnion } from '@mui/types';

export interface ToggleButtonPropsSizeOverrides {}

export interface ToggleButtonOwnProps {
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ToggleButtonClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;

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
  endIcon?: React.ReactNode;

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
  startIcon?: React.ReactNode;

  /**
   * If true, the button is rendered in an active state.
   * @default false
   */
  selected?: boolean;

  /** Callback fired when the state changes. */
  onChange?: (event: React.FormEvent<HTMLButtonElement>, value: any) => void;
  /** Callback fired when the button clicked. */
  onClick?: (event: React.MouseEvent, value: any) => void;
}

export type ToggleButtonTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button',
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & ToggleButtonOwnProps;
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
      ? DistributiveOmit<ToggleButtonTypeMap['props'], 'classes'>
      : ToggleButtonTypeMap['props']);
  defaultComponent: TypeMap['defaultComponent'];
}

export type ExtendToggleButton<TypeMap extends OverridableTypeMap> = ((
  props: {} & OverrideProps<ExtendButtonBaseTypeMap<TypeMap>, 'button'>
) => JSX.Element) &
  OverridableComponent<ExtendButtonBaseTypeMap<TypeMap>>;
