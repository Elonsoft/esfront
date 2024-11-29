/* eslint-disable @typescript-eslint/no-empty-object-type */

import { InformationIconClasses } from './InformationIcon.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { SvgIconProps } from '../SvgIcon';

import { OverridableStringUnion } from '@mui/types';

export interface InformationIconPropsVariantOverrides {}

export interface InformationIconTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /** Override or extend the styles applied to the component. */
    classes?: Partial<InformationIconClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Class applied to the root element. */
    className?: string;

    /**
     * The variant of the alert. This defines the color and icon used.
     * @default 'info'
     */
    variant?: OverridableStringUnion<'info' | 'question', InformationIconPropsVariantOverrides>;

    /**
     * The component maps the variant prop to a range of different icons.
     * If you wish to change this mapping, you can provide your own.
     */
    iconMapping?: Record<
      OverridableStringUnion<'info' | 'question', InformationIconPropsVariantOverrides>,
      React.ComponentType | React.ElementType
    >;

    /**
     * The component maps the variant prop to a range of different active icons.
     * If you wish to change this mapping, you can provide your own.
     */
    activeIconMapping?: Record<
      OverridableStringUnion<'info' | 'question', InformationIconPropsVariantOverrides>,
      React.ComponentType | React.ElementType
    >;

    /**
     * The extra props for the slot components.
     * You can override the existing props or add new ones.
     * @default {}
     */
    slotProps?: {
      icon?: Partial<SvgIconProps>;
      activeIcon?: Partial<SvgIconProps>;
    };
  };
  defaultComponent: D;
}

export type InformationIconProps<
  D extends React.ElementType = InformationIconTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<InformationIconTypeMap<P, D>, D> & {
  component?: React.ElementType;
};
