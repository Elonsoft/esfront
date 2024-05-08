/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { TableRowClasses } from './TableRow.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface TableRowTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    children?: ReactNode;

    /** Override or extend the styles applied to the component. */
    classes?: Partial<TableRowClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;

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
>;
