import { DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

export interface DateInputTokenProps {
  /** Id applied to the element, which is what the input points `aria-activedescendant` at. */
  id: string;
  /** The accessible name the field is announced with. */
  label: string;
  /** The token as it is written in the format string. */
  token: string;
  /** The formatter that renders and edits the token. */
  formatter: DateInputFormatter;
  /** The digits the field is shown and typed as. */
  value: string;
  /** Whether the selection sits on this part of the date. */
  selected: boolean;
  context: DateInputFormatterContext;
}
