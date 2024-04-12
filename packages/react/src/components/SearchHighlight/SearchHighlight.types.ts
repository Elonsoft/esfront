import { ReactNode } from 'react';

import { SearchHighlightClasses } from './SearchHighlight.classes';

import { SxProps, Theme } from '@mui/material';

export interface SearchHighlightProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SearchHighlightClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The text to be highlighted */
  text: string;
  /** The search query to highlight */
  searchText: string;
}
