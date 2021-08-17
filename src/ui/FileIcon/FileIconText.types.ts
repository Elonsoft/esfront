import { FileIconTextClasses } from './FileIconText.classes';

export interface FileIconTextProps {
  /**
   * Class applied to the root element.
   */
  className?: string;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FileIconTextClasses>;
}
