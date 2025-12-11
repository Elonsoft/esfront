/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

export interface TableRowTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    children?: ReactNode;

    /** Class applied to the root element. */
    className?: string;

    /** If true, the table row will shade on hover. */
    hover?: boolean;
    /** If true, the table row will have the selected shading. */
    selected?: boolean;
  };
  defaultComponent: D;
}

export type TableRowProps<D extends React.ElementType = TableRowTypeMap['defaultComponent'], P = {}> = OverrideProps<
  TableRowTypeMap<P, D>,
  D
> & {
  component?: React.ElementType;
};
