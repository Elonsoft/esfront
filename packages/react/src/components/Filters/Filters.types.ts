import { ReactNode } from 'react';

import { FiltersClasses } from './Filters.classes';

import { SxProps, Theme } from '@mui/material';

export interface FiltersProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FiltersClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
