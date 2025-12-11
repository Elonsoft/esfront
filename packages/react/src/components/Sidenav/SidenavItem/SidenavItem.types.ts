/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ElementType, ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

export interface SidenavItemTypeMap<P = {}, D extends ElementType = 'li'> {
  props: P & {
    /** Class applied to the root element. */
    className?: string;
    /** The id of the element. */
    id?: string | null;
    /** Icon for the element. */
    icon?: ReactNode;
    /** Text for the element. */
    text?: ReactNode;
    /** If true, the component is selected. */
    selected?: boolean;
  };
  defaultComponent: D;
}

export type SidenavItemProps<
  D extends React.ElementType = SidenavItemTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<SidenavItemTypeMap<P, D>, D>;
