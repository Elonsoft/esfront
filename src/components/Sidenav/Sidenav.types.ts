import { ReactNode } from 'react';

import { SidenavClasses } from './Sidenav.classes';

import { SxProps, Theme } from '@mui/material';

export interface SidenavProps {
  children?: [ReactNode, ReactNode];
  /** Override or extend the styles applied to the component. */
  sx?: SxProps<Theme>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  classes?: Partial<SidenavClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** If true, hitting escape will not fire the onClose callback. */
  disableEscapeKeyDown?: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
}
