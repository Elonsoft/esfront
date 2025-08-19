/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ReactNode } from 'react';

import { HeaderLogoClasses } from './HeaderLogo.classes';

import { SxProps, Theme } from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';

export interface HeaderLogoTypeMap<P = {}, D extends React.ElementType = 'a'> {
  props: P & {
    children?: ReactNode;
    /** Override or extend the styles applied to the component. */
    classes?: Partial<HeaderLogoClasses>;
    /** Class applied to the root element. */
    className?: string;
    /** The system prop that allows defining system overrides as well as additional CSS styles. */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}

export type HeaderLogoProps<
  D extends React.ElementType = HeaderLogoTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<HeaderLogoTypeMap<P, D>, D>;
