import { ReactNode } from 'react';

import { AutocompleteMenuFooterClasses } from './AutocompleteMenuFooter.classes';

import { SxProps, Theme } from '@mui/material';

export interface AutocompleteMenuFooterProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteMenuFooterClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
