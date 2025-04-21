import { ReactNode } from 'react';

import { PropertyClasses } from './Property.classes';

import { SxProps, Theme } from '@mui/material';

import { OverridableStringUnion } from '@mui/types';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PropertyPropsSizeOverrides {}

export interface PropertyProps {
  name?: ReactNode;
  value?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<PropertyClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Size of the component.
   * @default 'm'
   */
  size?: OverridableStringUnion<'s' | 'm', PropertyPropsSizeOverrides>;
}
