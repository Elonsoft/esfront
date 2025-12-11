/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ElementType, ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

export interface TabBarItemTypeMap<P = {}, D extends ElementType = `button`> {
  props: P & {
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
