/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ReactNode } from 'react';

import { BreadcrumbClasses } from './Breadcrumb.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { OverrideProps } from '@mui/material/OverridableComponent';

import { Button } from '../../Button';

export interface BreadcrumbTypeMap<P = {}, D extends React.ElementType = typeof Button> {
  props: P & {
    children?: ReactNode;

    /** Override or extend the styles applied to the component. */
    classes?: Partial<BreadcrumbClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;

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
