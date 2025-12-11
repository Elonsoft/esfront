import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, SVGProps } from 'react';

export type SvgIconProps = {
  children?: ReactNode;
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** The width and height of the icon. */
  size?: string;
  /** The width of the icon. */
  width?: string;
  /** The height of the icon. */
  height?: string;

  /** If true, allows to set the container size, without resizing the svg element itself. */
  container?: boolean;
  /** The width and height of the icon container. */
  containerSize?: string;
  /** The width of the icon container. */
  containerWidth?: string;
  /** The height of the icon container. */
  containerHeight?: string;

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  title?: string;

  /** Props applied to the container element. */
  ContainerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & SVGProps<SVGSVGElement>;
