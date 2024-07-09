import { DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

import { DateInputBaseRangeFormatter } from './DateInputBaseRangeFormatter';

import { getDaysInMonth } from '../utils';

export class DateInputDateFormatter extends DateInputBaseRangeFormatter {
  field = 'date' as const;

  protected range: [number, number] = [1, 31];

  protected length = 2;

  // A day cannot outlive its month: `Date` rolls a day past the end of a month over into the next one, so without this
  // the field would accept the 31st of February and quietly report the 2nd or the 3rd of March.
  getRange: DateInputFormatter['getRange'] = (context: DateInputFormatterContext) => {
    const { year, month } = context.values;

    if (!month) {
      return this.range;
    }

    // A year is stored zero padded, so four digits mean it is fully entered and can decide a leap year. While it is
    // still being typed the month keeps its longest length, rather than truncating a day that is already there.
    return [1, getDaysInMonth(year.length === 4 ? +year : null, +month)];
  };
}
