/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { SidenavItemClasses } from './SidenavItem.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface SidenavItemTypeMap<P = {}, D extends ElementType = 'li'> {
  props: P & {
    /** Override or extend the styles applied to the component. */
    classes?: Partial<SidenavItemClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
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
