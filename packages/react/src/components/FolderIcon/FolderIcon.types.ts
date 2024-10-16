/* eslint-disable @typescript-eslint/no-empty-object-type */

import { FolderIconClasses } from './FolderIcon.classes';

import { SxProps, Theme } from '@mui/material';

import { SvgIconProps } from '../SvgIcon';

import { OverridableStringUnion } from '@mui/types';

export interface FolderIconPropsSizeOverrides {}

export interface FolderIconProps {
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FolderIconClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The size of the component.
   * @default '500'
   */
  size?: OverridableStringUnion<
    '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800',
    FolderIconPropsSizeOverrides
  >;

  /** The icon component. */
  icon?: React.FC;

  /**
   * The variant to use.
   * @default 'default'
   */
  variant?: 'outlined' | 'contained' | 'default' | 'colored';

  /**
   * The color of the component.
   * It supports both default and custom theme colors
   * @default 'violet'
   */
  color?: string;

  /** If true, the filled icon component show. */
  filled?: boolean;

  /** Props applied to the icon component. */
  SvgIconProps?: Partial<SvgIconProps>;
}
