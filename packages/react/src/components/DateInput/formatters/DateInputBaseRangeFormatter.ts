import { ReactNode } from 'react';

import {
  DateInputField,
  DateInputFieldValue,
  DateInputFormatter,
  DateInputFormatterContext,
  DateInputFormatterOptions,
} from '../DateInput.types';

import { addWithLoop, getGenericRangeValue, getZeroPaddedPlaceholder } from '../utils';

/**
 * The formatter of a field that is a plain number inside a fixed range, which is every field but the year: a year is
 * wide enough to be typed in and stepped through by rules of its own.
 */
export abstract class DateInputBaseRangeFormatter implements DateInputFormatter {
  abstract field: DateInputField;

  /** The widest range the field accepts, before `minDate` and `maxDate` narrow it down. */
  protected abstract range: [number, number];

  /** The number of digits the field is written with once it is entered. */
  protected abstract length: number;

  constructor(protected options: DateInputFormatterOptions) {}

  // Typed as the formatter declares it rather than as a function of no arguments, so that a field whose range depends
  // on the more significant ones can still override it.
  getRange: DateInputFormatter['getRange'] = () => this.range;

  getDefaultValue = () => this.range[0].toString();

  getPlaceholder = (value: string, selected: boolean, context: DateInputFormatterContext): ReactNode => {
    return getZeroPaddedPlaceholder({
      formatter: this,
      value,
      selected,
      context,
      maxLength: this.length,
      placeholder: this.options.placeholder,
    });
  };

  getValue = (value: string, key: string, context: DateInputFormatterContext): DateInputFieldValue | null => {
    return getGenericRangeValue(this, value, key, context);
  };

  getPrev = (value: string, step: number, context: DateInputFormatterContext) => {
    return addWithLoop(this, this.getSettled(value, context), -step, context).toString();
  };

  getNext = (value: string, step: number, context: DateInputFormatterContext) => {
    return addWithLoop(this, this.getSettled(value, context), step, context).toString();
  };

  /** A field is stepped from what its digits stand for, not from the digits themselves. */
  private getSettled = (value: string, context: DateInputFormatterContext) => {
    return +(this.getValue(value, '', context)?.value ?? value);
  };
}
