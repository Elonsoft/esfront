import { FileIconBadgeClasses } from './FileIconBadge.classes';

export interface FileIconBadgeProps {
  /**
   * The component background color.
   */
  color: string;

  /**
   * The component size.
   * @default 'md'
   */
  size?: 'md' | 'sm';

  /**
   * Class applied to the root element.
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FileIconBadgeClasses>;
}
