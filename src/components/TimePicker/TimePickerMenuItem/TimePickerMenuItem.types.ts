import { TimePickerMenuItemClasses } from './TimePickerMenuItem.classes';

export interface TimePickerMenuItemProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<TimePickerMenuItemClasses>;
  /** Class applied to the root element. */
  className?: string;
  /* Loop limit. */
  limit: number;
  /* Column title. */
  title: string;
  /** Callback fired when the value is changed. */
  onChange: (event: any) => void;
  /** Use to apply selected styling. */
  selectedIndex: number;
  /** Min time acceptable time. **/
  minTime?: number;
  /** Max time acceptable time. **/
  maxTime?: number;
}
