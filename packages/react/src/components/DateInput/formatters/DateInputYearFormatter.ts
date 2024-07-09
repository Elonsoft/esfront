import { ReactNode } from 'react';

import {
  DateInputFieldValue,
  DateInputFormatter,
  DateInputFormatterContext,
  DateInputFormatterOptions,
} from '../DateInput.types';

import { addWithLoop, getFieldRange, getZeroPaddedPlaceholder, isDigit, isViablePrefix } from '../utils';

export class DateInputYearFormatter implements DateInputFormatter {
  field = 'year' as const;

  constructor(protected options: DateInputFormatterOptions) {}

  getRange = (): [number, number] => [0, 9999];

  // Zero padded: four digits are what tells a year that is known in full from one that is still being typed, which is
  // what decides a leap year for the day field.
  getDefaultValue = () => new Date().getFullYear().toString().padStart(4, '0');

  getPlaceholder = (value: string, selected: boolean, context: DateInputFormatterContext): ReactNode => {
    return getZeroPaddedPlaceholder({
      formatter: this,
      value,
      selected,
      context,
      maxLength: 4,
      placeholder: this.options.placeholder,
    });
  };

  getValue = (value: string, key: string, context: DateInputFormatterContext): DateInputFieldValue | null => {
    if (!isDigit(key)) {
      return null;
    }

    const [min, max] = getFieldRange(this, context);
    const isViable = (prefix: string) => isViablePrefix(prefix, 4, min, max);

    // A year is zero padded, so the digits it holds are its last ones: a year left at `20` stands for the year 20.
    if (!key) {
      return value ? { value: value.padStart(4, '0'), canGrow: value.length < 4 } : null;
    }

    // A fifth digit restarts the year from that digit.
    if (key && value.length === 4) {
      return isViable(key) ? { value: key, canGrow: true } : null;
    }

    const requested = `${value}${key}`;

    // A year is zero padded, so it is only known in full once all four of its digits are there.
    return isViable(requested) ? { value: requested, canGrow: requested.length < 4 } : null;
  };

  getPrev = (value: string, step: number, context: DateInputFormatterContext) => {
    return addWithLoop(this, this.getSettled(value, context), -step, context).toString().padStart(4, '0');
  };

  getNext = (value: string, step: number, context: DateInputFormatterContext) => {
    return addWithLoop(this, this.getSettled(value, context), step, context).toString().padStart(4, '0');
  };

  /** A year is stepped from what its digits stand for, not from the digits themselves. */
  private getSettled = (value: string, context: DateInputFormatterContext) => {
    return +(this.getValue(value, '', context)?.value ?? value);
  };
}
