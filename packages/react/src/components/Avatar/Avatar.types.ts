import { CSSProperties, ReactNode } from 'react';

export interface AvatarProps {
  /** Used to render icon or text elements inside the `Avatar` if `src` is not set.  */
  children?: ReactNode;

  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Determines border variant of avatar.
   * @default square
   */
  variant?: 'circle' | 'square';

  /** Avatar size.
   * @default 40
   */
  size?: number;

  /** The `src` attribute for the `img` element. */
  src?: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;

  /** Determines if the avatar should be outlined. */
  outlined?: boolean;
}
