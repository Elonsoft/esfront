/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { TabBarItemClasses } from './TabBarItem.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface TabBarItemTypeMap<P = {}, D extends ElementType = `button`> {
  props: P & {
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<TabBarItemClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The icon element. */
    icon?: ReactNode;
    /** The label element. */
    label?: ReactNode;
    /** If true, the item is selected. */
    selected?: boolean;
  };
  defaultComponent: D;
}

export type TabBarItemProps<
  D extends React.ElementType = TabBarItemTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<TabBarItemTypeMap<P, D>, D>;
