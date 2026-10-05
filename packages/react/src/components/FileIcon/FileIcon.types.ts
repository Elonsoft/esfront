import { ComponentType, CSSProperties, PropsWithoutRef, ReactNode, RefAttributes } from 'react';

import { SvgIconProps } from '../SvgIcon';

export interface FileIconProps {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

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
  icon?: ComponentType<PropsWithoutRef<SvgIconProps> & RefAttributes<SVGPathElement>>;
}
