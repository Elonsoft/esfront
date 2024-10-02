/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { TagClasses } from './Tag.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { OverridableStringUnion } from '@mui/types';

export interface TagPropsColorOverrides {}

export interface TagTypeMap<P = {}, D extends ElementType = 'button'> {
  props: P & {
    /** The content of the component. */
    children?: string;
    /** Override or extend the styles applied to the component. */
    /** Class applied to the root element. */
    className?: string;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<TagClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
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
      | 'monoA'
      | 'monoB'
      | 'black'
      | 'white',
      TagPropsColorOverrides
    >;
    /** Element placed before the children. */
    startIcon?: ReactNode;
    /** Element placed after the children. */
    endIcon?: ReactNode;
    /**
     * Applies the theme typography styles.
     * @default 'overline'
     */
    variant?: 'overline' | 'caption';
    /**
     * If `true`, the tag will appear clickable, even if the onClick prop is not defined. If `false`, the tag will not appear clickable, even if onClick prop is defined.
     * @default false
     */
    clickable?: boolean;
  };
  defaultComponent: D;
}

export type TagProps<D extends ElementType = TagTypeMap['defaultComponent'], P = {}> = OverrideProps<
  TagTypeMap<P, D>,
  D
>;
