import { ReactNode } from 'react';

export interface DateInputProps {
  /** */
  name?: string;
  /** */
  value?: Date | null;
  /**
   * Supported tokens are 'YYYY', 'MM', 'dd', 'HH', 'mm'
   */
  format?: string;

  /** */
  minDate?: Date;
  /** */
  maxDate?: Date;

  /**
   * ...
   * @default 1
   */
  increment?: number;

  /**
   * ...
   * @default 5
   */
  incrementLeap?: number;

  /** Callback fired when valid date is entered. */
  onChange?: (value: Date | null) => void;
  /** */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

export type DateInputField = 'year' | 'month' | 'date' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export interface DateInputFormatter {
  field: DateInputField;
  getDefaultValue: () => string;
  getPlaceholder: (value: string, selected: boolean, context: Record<DateInputField, string>) => ReactNode;
  getValues: (value: string, key: string, context: Record<DateInputField, string>) => string[];
  getPrev: (value: string, step: number, context: Record<DateInputField, string>) => string;
  getNext: (value: string, step: number, context: Record<DateInputField, string>) => string;
}
