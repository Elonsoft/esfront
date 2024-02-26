import { ReactNode } from 'react';

import { EmptyStateCompactClasses } from './EmptyStateCompact.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface EmptyStateCompactProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  classes?: Partial<EmptyStateCompactClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
