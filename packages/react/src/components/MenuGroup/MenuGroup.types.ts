/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { MenuGroupClasses } from './MenuGroup.classes';

import { SxProps, Theme } from '@mui/material';

import { OverridableStringUnion } from '@mui/types';

export interface MenuGroupPaddingBottomOverrides {}

export interface MenuGroupProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<MenuGroupClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The bottom padding of the component. */
  paddingBottom?: OverridableStringUnion<'s' | 'm' | 'l', MenuGroupPaddingBottomOverrides>;
  /** Whether the menu group should be sticky. */
  sticky?: boolean;

  tabIndex?: number;
}
