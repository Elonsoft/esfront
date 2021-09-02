import { DateIOFormats } from '@date-io/core/IUtils';

export interface FormatDateProps {
  /** Date string to format. */
  children: number | string;
  /** Format with predefined format string. */
  format?: keyof DateIOFormats<string>;
  /** Format with custom format string.  */
  formatString?: string;
}
