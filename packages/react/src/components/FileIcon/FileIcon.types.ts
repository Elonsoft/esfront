import { ReactNode } from 'react';

import { FileIconClasses } from './FileIcon.classes';

import { SxProps, Theme } from '@mui/material';

export interface FileIconProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FileIconClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The icon's width.
   * @default 36
   */
  width?: number;

  /**
   * The icon's height.
   * @default 48
   */
  height?: number;

  /** The background icon component. */
  icon?: React.FC;
}
