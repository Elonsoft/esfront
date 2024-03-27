import { ReactNode } from 'react';

import { SidebarClasses } from './Sidebar.classes';

import { SxProps, Theme } from '@mui/material';

export interface SidebarProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SidebarClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary' | 'secondary';
  /**
   * The width of the component.
   * @default 280
   */
  width?: number;
  /**
   * The min width of the component.
   * @default 220
   */
  minWidth?: number;
  /**
   * The max width of the component.
   * @default 400
   */
  maxWidth?: number;
  /** Callback function that is fired when the cell's width changed. */
  onWidthChange?: (width: number) => void;
  /** Callback function that is fired when the cell's width finished changing. */
  onWidthChangeCommit?: (width: number) => void;
}
