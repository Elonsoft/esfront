/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

export interface MadeByTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /** Class applied to the root element. */
    className?: string;

    /**
     * If `true`, component will appear clickable, even if the onClick prop is not defined.
     * If `false`, component will not appear clickable, even if onClick prop is defined.
     * */
    clickable?: boolean;

    /**
     * Text to display.
     */
    text?: ReactNode;

    /**
     * Icon to display.
     */
    icon?: ReactNode;
  };
  defaultComponent: D;
}

export type MadeByProps<D extends React.ElementType = MadeByTypeMap['defaultComponent'], P = {}> = OverrideProps<
  MadeByTypeMap<P, D>,
  D
>;
