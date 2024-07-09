import { CSSProperties, ReactNode } from 'react';

export type DateInputField = 'year' | 'month' | 'date' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

/** The digits each field of a date is shown and typed as. */
export type DateInputValues = Record<DateInputField, string>;

export interface DateInputProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;

  /** Id applied to the root element. */
  id?: string;
  /** The accessible name of the field. */
  'aria-label'?: string;
  /** The id of the element that names the field. */
  'aria-labelledby'?: string;
  /** The id of the element that describes the field. */
  'aria-describedby'?: string;

  /** The name of the hidden input rendered alongside the field. */
  name?: string;
  /** The current date. */
  value?: Date | null;

  /** Format string using registered tokens from registry. */
  format?: string;

  /** The earliest date the field can be set to. */
  minDate?: Date;
  /** The latest date the field can be set to. */
  maxDate?: Date;

  /**
   * The step the value is changed by with the `ArrowUp`, `ArrowDown`, `+` and `-` keys.
   * @default 1
   */
  increment?: number;

  /**
   * The step the value is changed by with the `PageUp` and `PageDown` keys.
   * @default 5
   */
  incrementLeap?: number;

  /** If `true`, the field is disabled. */
  disabled?: boolean;
  /** If `true`, prevents the user from changing the value of the field. */
  readOnly?: boolean;
  /** If `true`, the field is announced as required. */
  required?: boolean;
  /** If `true`, the field is announced as holding an invalid value. */
  error?: boolean;
  /** If `true`, the field is focused on mount. */
  autoFocus?: boolean;

  /** The accessible name each field of the date is announced with. */
  getFieldLabel?: (field: DateInputField) => string;

  /** Callback fired when the date changes. */
  onChange?: (value: Date | null) => void;
  /** Callback fired when a key is pressed. Calling `preventDefault` skips the built-in key handling. */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /** Callback fired when content is pasted into the field. Calling `preventDefault` skips the built-in paste handling. */
  onPaste?: React.ClipboardEventHandler<HTMLDivElement>;
  /** Callback fired when the field loses the focus. */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  /** Callback fired when the field receives the focus. */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
}

/** The placeholders of the formatters the library ships, in the language the date is read in. */
export interface DateInputPlaceholders {
  year: string;
  month: string;
  date: string;
  hours: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
}

export interface DateInputFormatterOptions {
  /**
   * The placeholder an empty field is shown with. A numeric field repeats it to its own width, so for one of those it
   * is a single character.
   */
  placeholder: string;
}

export interface DateInputFormatterContext {
  /**
   * The digits each field is shown and typed as. A field the format leaves out holds the value the date gives it rather
   * than an empty one, so that a bound can still reach the fields below it.
   */
  values: DateInputValues;
  /** The earliest date the field can be set to. */
  minDate: Date;
  /** The latest date the field can be set to. */
  maxDate: Date;
}

/** What a field holds after a key is applied to it. */
export interface DateInputFieldValue {
  /** The digits the field is shown and typed as. */
  value: string;
  /** Whether another digit can still follow, which is what keeps the selection on the field. */
  canGrow: boolean;
}

export interface DateInputFormatter {
  /** The field of a date the formatter edits. */
  field: DateInputField;
  /** The range the field accepts given the more significant fields, before `minDate` and `maxDate` narrow it down. */
  getRange: (context: DateInputFormatterContext) => [number, number];
  /** The value an empty field starts from when it is stepped through with the keyboard. */
  getDefaultValue: () => string;
  /** The content of the field: its value, its placeholder, or the two of them side by side. */
  getPlaceholder: (value: string, selected: boolean, context: DateInputFormatterContext) => ReactNode;
  /**
   * The value `value` becomes once `key` is appended to it, or `null` when the key leads nowhere. A field keeps its
   * digits as they were typed, leading zeros and all. An empty `key` asks what those digits stand for on their own,
   * where `null` means they stand for nothing and have to be pulled back into range.
   */
  getValue: (value: string, key: string, context: DateInputFormatterContext) => DateInputFieldValue | null;
  /**
   * The value `step` before the current one, which loops around: stepping past the start of the range continues from
   * its end.
   */
  getPrev: (value: string, step: number, context: DateInputFormatterContext) => string;
  /**
   * The value `step` after the current one, which loops around: stepping past the end of the range continues from its
   * start.
   */
  getNext: (value: string, step: number, context: DateInputFormatterContext) => string;
}
