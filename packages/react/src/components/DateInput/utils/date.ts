import { DateInputField, DateInputValues } from '../DateInput.types';

import { DATE_INPUT_FIELDS, EMPTY_VALUES } from './fields';

/** Built through a date string: the multi-argument `Date` constructor maps the years 0-99 onto 1900-1999. */
const getDateFromParts = (
  year: number,
  month: number,
  date: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number
) => {
  return new Date(
    Date.parse(
      `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`
    )
  );
};

/** The widest range a date can be entered in: the one `Date` itself can print without a sign. */
export const MIN_DATE = getDateFromParts(1, 1, 1, 0, 0, 0, 0);
export const MAX_DATE = getDateFromParts(9999, 12, 31, 23, 59, 59, 999);

export const dateToValues = (date: Date): DateInputValues => {
  const year = date.getFullYear();

  return {
    // Zero padded: four digits are what tells a year that is known in full from one that is still being typed.
    year: year >= 0 ? year.toString().padStart(4, '0') : year.toString(),
    // One-based, the way a month is written and typed. `Date` is the only place that counts them from zero.
    month: (date.getMonth() + 1).toString(),
    date: date.getDate().toString(),
    hours: date.getHours().toString(),
    minutes: date.getMinutes().toString(),
    seconds: date.getSeconds().toString(),
    milliseconds: date.getMilliseconds().toString(),
  };
};

/** The value a field the format leaves out holds: the earliest one there is, except for the year. */
const getAbsentValue = (field: DateInputField, fallbackYear: number) => {
  switch (field) {
    case 'year':
      return fallbackYear.toString().padStart(4, '0');
    case 'month':
    case 'date':
      return '1';
    default:
      return '0';
  }
};

/**
 * The values the date is built from. A field the format leaves out holds the value the date gives it rather than an
 * empty one, which is what lets a bound still narrow the fields below it.
 */
export const getEffectiveValues = (
  values: DateInputValues,
  fields: DateInputField[],
  fallbackYear: number
): DateInputValues => {
  const result = { ...values };

  for (const field of DATE_INPUT_FIELDS) {
    if (!fields.includes(field)) {
      result[field] = getAbsentValue(field, fallbackYear);
    }
  }

  return result;
};

/**
 * The date the digits add up to, or `null` when they describe none. A day past the end of its month is rolled over into
 * the next one rather than rejected, so the date is only taken once it survives the round trip unchanged.
 */
export const valuesToDate = (values: DateInputValues): Date | null => {
  const year = +values.year;
  const month = +values.month;
  const date = +values.date;

  const result = getDateFromParts(
    year,
    month,
    date,
    +values.hours,
    +values.minutes,
    +values.seconds,
    +values.milliseconds
  );

  if (
    Number.isNaN(result.getTime()) ||
    result.getFullYear() !== year ||
    result.getMonth() + 1 !== month ||
    result.getDate() !== date
  ) {
    return null;
  }

  return result;
};

/** The timestamp of a date, where an invalid date reads the same as no date. */
export const getTime = (date: Date | null) => {
  if (!date) {
    return null;
  }

  const time = date.getTime();

  return Number.isNaN(time) ? null : time;
};

export const timeToDate = (time: number | null) => {
  return time === null ? null : new Date(time);
};

/** The fields of a timestamp. Reading them off a date that is not there would fill each one with `NaN`. */
export const timeToValues = (time: number | null): DateInputValues => {
  return time === null ? EMPTY_VALUES : dateToValues(new Date(time));
};
