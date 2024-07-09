import { DateInputFormatter, DateInputPlaceholders } from './DateInput.types';

import {
  DateInputDateFormatter,
  DateInputHoursFormatter,
  DateInputMillisecondsFormatter,
  DateInputMinutesFormatter,
  DateInputMonthFormatter,
  DateInputSecondsFormatter,
  DateInputYearFormatter,
} from './formatters';

/**
 * The registry of the tokens the default `format` is written in, with the placeholders of a single locale. An
 * application is free to build its own map instead, or to add tokens to this one: a formatter is not tied to the token
 * it is registered under, and an unregistered token is rendered as it is.
 */
export const createDateInputRegistry = (placeholders: DateInputPlaceholders) => {
  return new Map<string, DateInputFormatter>([
    ['YYYY', new DateInputYearFormatter({ placeholder: placeholders.year })],
    ['MM', new DateInputMonthFormatter({ placeholder: placeholders.month })],
    ['dd', new DateInputDateFormatter({ placeholder: placeholders.date })],
    ['HH', new DateInputHoursFormatter({ placeholder: placeholders.hours })],
    ['mm', new DateInputMinutesFormatter({ placeholder: placeholders.minutes })],
    ['ss', new DateInputSecondsFormatter({ placeholder: placeholders.seconds })],
    ['SSS', new DateInputMillisecondsFormatter({ placeholder: placeholders.milliseconds })],
  ]);
};
