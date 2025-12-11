import { CSSProperties, ReactNode } from 'react';

export interface AvatarGroupProps {
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
