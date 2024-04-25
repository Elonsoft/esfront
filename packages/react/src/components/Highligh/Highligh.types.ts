import { ReactNode } from 'react';

import { HighlighClasses } from './Highligh.classes';

import { SxProps, Theme } from '@mui/material';

export interface HighlighProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<HighlighClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
}
