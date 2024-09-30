/**
 * The units commonly used in the date formatting or parsing.
 */
export type LocaleUnit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'dayOfYear'
  | 'date'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';

export interface LocalizeFnOptions {
  width?: 'narrow' | 'short' | 'abbreviated' | 'wide' | 'any';
  context?: 'formatting' | 'standalone';

  unit?: LocaleUnit;
}
