/* eslint-disable @typescript-eslint/no-empty-object-type */

import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface RibbonBadgePropsOrientationOverrides {}

export interface RibbonBadgePropsColorOverrides {}

export interface RibbonBadgeTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & {
    /** Class applied to the root element. */
    className?: string;

    /**
     * Badge orientation.
     * @default left
     */
    orientation?: OverridableStringUnion<'left' | 'right', RibbonBadgePropsOrientationOverrides>;

    /**
     * Badge variant.
     * @default success
     */
    color?: OverridableStringUnion<
      'success' | 'warning' | 'error' | 'info' | 'secondary' | 'primary' | 'mono-b-500',
      RibbonBadgePropsColorOverrides
    >;

    /**
     * If `true`, the badge will appear clickable, even if the onClick prop is not defined.
     * If `false`, the badge will not appear clickable, even if onClick prop is defined.
     * */
    clickable?: boolean;
  };
  defaultComponent: D;
}

export type RibbonBadgeProps<
  D extends React.ElementType = RibbonBadgeTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<RibbonBadgeTypeMap<P, D>, D>;
