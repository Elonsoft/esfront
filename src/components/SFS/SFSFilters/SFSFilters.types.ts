import { ReactNode } from 'react';

import { SFSFiltersClasses } from './SFSFilters.classes';

import { SxProps, Theme } from '@mui/material';

export interface SFSFiltersProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSFiltersClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Count the active filters. */
  count?: number;
  /** Callback fired when user clicks reset button. */
  onReset?: () => void;

  /** Text for the menu button. */
  labelButton?: string;
  /** Text for the header label. */
  labelHeader?: string;
  /** Text for the close button aria-label. */
  labelClose?: string;
  /** Text for the reset button. */
  labelReset?: string;

  /** Icon for the menu button. */
  iconFilters?: ReactNode;
  /** Icon for the close button. */
  iconClose?: ReactNode;
}
