/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ReactNode } from 'react';

import { OverrideProps } from '@mui/material/OverridableComponent';

import { Button } from '../../Button';

export interface BreadcrumbTypeMap<P = {}, D extends React.ElementType = typeof Button> {
  props: P & {
    children?: ReactNode;

    /** Class applied to the root element. */
    className?: string;

    /** If true, the breadcrumb is disabled. */
    disabled?: boolean;
    /** The custom separator node. */
    separator?: ReactNode;

    /**
     * The breadcrumb position in the list.
     * @internal
     * @ignore
     */
    position?: string;
    /**
     * Whether the first breadcrumb should shrink.
     * @internal
     * @ignore
     */
    shouldFirstShrink?: boolean;

    /** The content for microdata schema. */
    itemContent?: string;
  };
  defaultComponent: D;
}

export type BreadcrumbProps<
  D extends React.ElementType = BreadcrumbTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<BreadcrumbTypeMap<P, D>, D>;
