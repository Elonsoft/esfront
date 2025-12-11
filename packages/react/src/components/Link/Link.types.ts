/* eslint-disable @typescript-eslint/no-empty-object-type */

import { CSSProperties, ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

export interface LinkTypeMap<P = {}, D extends React.ElementType = 'a'> {
  props: P & {
    /** The content of the component. */
    children?: React.ReactNode;
    /** Class applied to the root element. */
    className?: string;
    /** Style applied to the root element. */
    style?: CSSProperties;
    /**
     * The color of the link.
     * @default 'var(--es-common-link)'
     */
    color?: string;
    /** Element placed before the children. */
    startIcon?: ReactNode;
    /** Element placed after the children. */
    endIcon?: ReactNode;
    /**
     * Controls when the link should have an underline.
     * @default 'always'
     */
    underline?: 'none' | 'hover' | 'always';
    /** Whether the link should show visited state. */
    showVisited?: boolean;
    /**
     * Applies the theme typography styles.
     * @default 'inherit'
     */
    variant?: string;
  };
  defaultComponent: D;
}

export type LinkProps<D extends React.ElementType = LinkTypeMap['defaultComponent'], P = {}> = OverrideProps<
  LinkTypeMap<P, D>,
  D
> & {
  component?: React.ElementType;
};
