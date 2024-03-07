/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode } from 'react';

import { TimelineItemClasses } from './TimelineItem.classes';

import { SxProps, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface TimelineItemTypeMap<P = {}, D extends React.ElementType = typeof Button> {
  props: P & {
    children?: ReactNode;

    /** Override or extend the styles applied to the component. */
    classes?: Partial<TimelineItemClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;

    oppositeContent?: string;

    weight?: 'xs' | 'sm';
  };
  defaultComponent: D;
}

export type TimelineItemProps<
  D extends React.ElementType = TimelineItemTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TimelineItemTypeMap<P, D>, D>;
