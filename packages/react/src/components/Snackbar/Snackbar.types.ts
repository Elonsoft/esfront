/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { SnackbarClasses } from './Snackbar.classes';

import { SxProps, Theme } from '@mui/material/styles';

import { OverridableStringUnion } from '@mui/types';

export interface SnackbarPropsSeverityOverrides {}

export interface SnackbarPropsColorOverrides {}

export interface SnackbarPropsSizeOverrides {}

export type SnackbarPropsSeverity = OverridableStringUnion<
  'default' | 'success' | 'warning' | 'error' | 'info',
  SnackbarPropsSeverityOverrides
>;

export type SnackbarPropsColor = OverridableStringUnion<
  'success' | 'warning' | 'error' | 'info' | 'monoA',
  SnackbarPropsSeverityOverrides
>;

export type SnackbarPropsSize = OverridableStringUnion<'s' | 'm' | 'l' | 'xl', SnackbarPropsSeverityOverrides>;

export interface SnackbarProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SnackbarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /* The message to display. */
  message?: ReactNode;
  /** The icon to display. */
  icon?: ReactNode;
  /** The action to display. It renders after the message, at the end of the snackbar. */
  action?: ReactNode;

  /* The number of milliseconds wait before calling the onClose function. */
  autoHideDuration?: number;
  /** Snackbar stays on the screen, unless it is dismissed. */
  persist?: boolean;

  /** If true, the hide progress is shown. */
  progress?: boolean;

  /**
   * The severity of the snackbar. This defines the color and icon used.
   * @default 'default'
   */
  severity?: SnackbarPropsSeverity;
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   */
  color?: SnackbarPropsColor;
  /**
   * The size of the component.
   * @default '40'
   */
  size?: SnackbarPropsSize;

  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  colorMapping?: Record<SnackbarPropsSeverity, SnackbarPropsColor>;
  /**
   * The component maps the severity prop to a range of different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Record<SnackbarPropsSeverity, ReactNode>;

  /* Callback fired when the component requests to be closed. */
  onClose?: () => void;
}
