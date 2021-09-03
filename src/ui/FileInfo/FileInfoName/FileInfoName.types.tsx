import { FileInfoNameClasses } from './FileInfoName.classes';

export interface FileInfoNameProps {
  /** Override or extend the styles applied to the component. */
  classes?: FileInfoNameClasses;
  /** Class applied to the root element. */
  className?: string;
  /** Text for the close button aria-label. */
  deleteLabel?: string;
  /** Callback fired when the close button is clicked.*/
  onDelete?: () => void;
}
