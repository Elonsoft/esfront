import { DateInputField, DateInputValues } from '../DateInput.types';

/** Date fields, from the most to the least significant. */
export const DATE_INPUT_FIELDS: DateInputField[] = [
  'year',
  'month',
  'date',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
];

/** The fields more significant than each one, which are the fields its range is read against. */
export const SENIOR_FIELDS = Object.fromEntries(
  DATE_INPUT_FIELDS.map((field, index) => [field, DATE_INPUT_FIELDS.slice(0, index)])
) as Record<DateInputField, DateInputField[]>;

export const EMPTY_VALUES: DateInputValues = {
  year: '',
  month: '',
  date: '',
  hours: '',
  minutes: '',
  seconds: '',
  milliseconds: '',
};
