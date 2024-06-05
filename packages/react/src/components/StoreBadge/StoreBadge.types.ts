/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { StoreBadgeClasses } from './StoreBadge.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { ExtendButtonTypeMap } from '../Button';

export interface StoreBadgeOwnProps {
  children: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<StoreBadgeClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * The color of the component.
   * @default 'monoA'
   */
  color?: 'monoA' | 'monoB';
  /**
   * The variant of the component.
   * @default 'contained'
   */
  variant: 'contained' | 'outlined';
  /** Element placed before the children. */
  startIcon?: ReactNode;
  /** Text placed up the children. */
  upperText?: string;
  /** The URL to link to when the button is clicked. */
  href?: string;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
}

export type StoreBadgeTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'button'
> = ExtendButtonTypeMap<{
  props: AdditionalProps & StoreBadgeOwnProps;
  defaultComponent: RootComponent;
}>;

export type StoreBadgeProps<
  RootComponent extends React.ElementType = StoreBadgeTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<StoreBadgeTypeMap<AdditionalProps, RootComponent>, RootComponent>;
