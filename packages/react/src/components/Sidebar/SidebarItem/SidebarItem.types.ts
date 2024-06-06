/* eslint-disable @typescript-eslint/ban-types */

import { ElementType, ReactNode } from 'react';

import { SidebarItemClasses } from './SidebarItem.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface SidebarItemTypeMap<P = {}, D extends ElementType = `div`> {
  props: P & {
    /** The content of the component. */
    children?: ReactNode;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<SidebarItemClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The id of the element. */
    id?: string;
    /** Icon for the element. */
    icon?: ReactNode;
    /** Icon for the toggle button element. */
    iconToggle?: ReactNode;
    /** Text for the element. */
    text?: ReactNode;
    /** If true, the item is selected. */
    selected?: boolean;
    /** If true, the children are indented. This should be used if there is no left avatar or left icon. */
    inset?: boolean;
    /** Text for the secondary action aria-label. */
    labelOpen?: string;
    /** Text for the secondary action aria-label. */
    labelHide?: string;
  };
  defaultComponent: D;
}

export type SidebarItemProps<
  D extends React.ElementType = SidebarItemTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<SidebarItemTypeMap<P, D>, D>;
