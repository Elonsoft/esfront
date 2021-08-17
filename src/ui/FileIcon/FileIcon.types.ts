import { FileIconClasses } from './FileIcon.classes';

export interface FileIconProps {
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

  /**
   * The background icon component.
   */
  icon?: React.FC;

  /**
   * Class applied to the root element.
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FileIconClasses>;
}

// React.ForwardRefRenderFunction<React.ForwardedRef<any>, React.PropsWithChildren<SvgIconProps<'svg', any>>>
