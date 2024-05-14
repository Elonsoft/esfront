/* eslint-disable @typescript-eslint/ban-types */

import { ReactNode } from 'react';

import { BoxDrawingItemClasses } from './BoxDrawingItem.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface BoxDrawingItemTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    children?: ReactNode;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<BoxDrawingItemClasses>;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
    /** Class applied to the root element. */
    className?: string;

    /**
     * If `true`, component will appear clickable, even if the onClick prop is not defined.
     * If `false`, component will not appear clickable, even if onClick prop is defined.
     * */
    clickable?: boolean;
  };
  defaultComponent: D;
}

export type BoxDrawingItemProps<
  D extends React.ElementType = BoxDrawingItemTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BoxDrawingItemTypeMap<P, D>, D>;
