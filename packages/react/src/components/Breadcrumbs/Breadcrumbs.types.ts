import { ReactNode } from 'react';

import { BreadcrumbsClasses } from './Breadcrumbs.classes';

import { SxProps, Theme } from '@mui/material';

export interface BreadcrumbsProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BreadcrumbsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Icon for the button more. */
  iconButtonMore?: ReactNode;
  /** Text for the button more aria-label. */
  labelButtonMore?: string;
}
