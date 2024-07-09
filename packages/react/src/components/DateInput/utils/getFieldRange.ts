import { DateInputField, DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

import { SENIOR_FIELDS } from './fields';

/** The value a field holds in a date, with months one-based the way they are shown and typed. */
const getDateField = (date: Date, field: DateInputField) => {
  switch (field) {
    case 'year':
      return date.getFullYear();
    case 'month':
      return date.getMonth() + 1;
    case 'date':
      return date.getDate();
    case 'hours':
      return date.getHours();
    case 'minutes':
      return date.getMinutes();
    case 'seconds':
      return date.getSeconds();
    case 'milliseconds':
      return date.getMilliseconds();
  }
};

/**
 * Narrows the range of a field down to what `minDate` and `maxDate` allow. A boundary only reaches the field once every
 * more significant field sits exactly on that boundary — until then every value is still the viable start of an allowed
 * date, and constraining the field would reject dates the user can legitimately reach.
 */
export const getFieldRange = (formatter: DateInputFormatter, context: DateInputFormatterContext): [number, number] => {
  const [naturalMin, naturalMax] = formatter.getRange(context);
  const senior = SENIOR_FIELDS[formatter.field] ?? [];

  const isOnBound = (bound: Date) => {
    return senior.every((field) => !!context.values[field] && +context.values[field] === getDateField(bound, field));
  };

  const min = isOnBound(context.minDate)
    ? Math.max(naturalMin, getDateField(context.minDate, formatter.field))
    : naturalMin;

  const max = isOnBound(context.maxDate)
    ? Math.min(naturalMax, getDateField(context.maxDate, formatter.field))
    : naturalMax;

  // A `minDate` later than `maxDate` is ignored rather than leaving the user with no value to enter at all.
  return min > max ? [naturalMin, naturalMax] : [min, max];
};
