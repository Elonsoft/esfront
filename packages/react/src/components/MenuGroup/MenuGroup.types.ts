/* eslint-disable @typescript-eslint/no-empty-object-type */

import { CSSProperties, ReactNode } from 'react';

import { OverridableStringUnion } from '@mui/types';

export interface MenuGroupPaddingBottomOverrides {}

export interface MenuGroupProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The bottom padding of the component. */
  paddingBottom?: OverridableStringUnion<'s' | 'm' | 'l', MenuGroupPaddingBottomOverrides>;
  /** Whether the menu group should be sticky. */
  sticky?: boolean;

  tabIndex?: number;
}
