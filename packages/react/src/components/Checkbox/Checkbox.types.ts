/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { CheckboxClasses } from './Checkbox.classes';

import { SxProps, Theme } from '@mui/material';

import { SwitchBaseProps } from '../SwitchBase';

import { OverridableStringUnion } from '@mui/types';

export interface CheckboxPropsVariantOverrides {}

export interface CheckboxPropsColorOverrides {}

export interface CheckboxPropsSizeOverrides {}

export interface CheckboxProps extends Omit<SwitchBaseProps, 'checkedIcon' | 'color' | 'icon' | 'type'> {
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * If `true`, the component is error.
   */
  error?: boolean;

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: ReactNode;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CheckboxClasses>;

  /** Class applied to the root element. */
  className?: string;

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'monoA' | 'monoB' | 'black' | 'white',
    CheckboxPropsColorOverrides
  >;

  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant?: OverridableStringUnion<'contained' | 'outlined' | 'hybrid', CheckboxPropsVariantOverrides>;

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean;

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;

  /**
   * The icon to display when the component is unchecked.
   */
  icon?: ReactNode;

  /**
   * The icon to display when the component is unchecked.
   */
  iconMapping?: {
    large: ReactNode;
    medium: ReactNode;
    small: ReactNode;
  };

  /**
   * The id of the `input` element.
   */
  id?: string;

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon?: ReactNode;

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: SwitchBaseProps['inputProps'];

  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'large' | 'medium' | 'small', CheckboxPropsSizeOverrides>;

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: SwitchBaseProps['value'];
}
