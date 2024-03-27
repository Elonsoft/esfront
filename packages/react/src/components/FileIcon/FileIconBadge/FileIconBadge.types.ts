import { ReactNode } from 'react';

import { FileIconBadgeClasses } from './FileIconBadge.classes';

import { SxProps, Theme } from '@mui/material';

export interface FileIconBadgeProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<FileIconBadgeClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * The component background color.
   */
  color: string;

  /**
   * The component size.
   * @default 'md'
   */
  size?: 'md' | 'sm';
}
