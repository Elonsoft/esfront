import { ReactNode } from 'react';

import { AvatarGroupClasses } from './AvatarGroup.classes';

import { SxProps, Theme } from '@mui/material';

export interface AvatarGroupProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AvatarGroupClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /**
   * Direction of the avatars stacking.
   * @default rtl
   */
  direction?: 'rtl' | 'ltr';

  /**
   * Avatar size.
   * @default 32
   */
  size?: number;

  /**
   * Spacing between avatars.
   * @default -6
   */
  spacing?: number;

  /**
   * Cutout width between avatars.
   * @default 2
   */
  cutoutWidth?: number;
}
