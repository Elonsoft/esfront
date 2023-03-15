import { ReactNode } from 'react';

import { SFSFiltersGroupClasses } from './SFSFiltersGroup.classes';

import { SxProps, Theme } from '@mui/material';

export interface SFSFiltersGroupProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSFiltersGroupClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** The title content. */
  title?: ReactNode;
}
