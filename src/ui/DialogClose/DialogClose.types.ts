import { DialogCloseClasses } from './DialogClose.classes';

export interface DialogCloseProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DialogCloseClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Callback fired when the button is clicked.*/
  onClick?: () => void;
  /** Text for the button aria-label. */
  label?: string;
}
