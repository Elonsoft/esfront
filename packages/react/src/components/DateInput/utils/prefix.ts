import { DateInputFieldValue, DateInputFormatter, DateInputFormatterContext } from '../DateInput.types';

import { getFieldRange } from './getFieldRange';
import { isDigit } from './isDigit';

/** Whether any zero-padded value of `length` digits starting with `prefix` still falls inside `[min, max]`. */
export const isViablePrefix = (prefix: string, length: number, min: number, max: number) => {
  const scale = 10 ** (length - prefix.length);
  const lower = +prefix * scale;

  return lower + scale - 1 >= min && lower <= max;
};

/**
 * The smallest value inside `[min, max]` whose digits start with `prefix`, and whether a larger one starting with the
 * same digits exists as well.
 */
export const getPrefixedValue = (prefix: string, min: number, max: number): DateInputFieldValue | null => {
  // Every value in the range starts with no digits at all.
  if (!prefix) {
    return min > max ? null : { value: min.toString(), canGrow: min < max };
  }

  const requested = +prefix;
  const maxLength = max.toString().length;

  if (prefix.length > maxLength) {
    return null;
  }

  // A prefix that starts with a zero is the padded form of the value: `0` in a two digit field stands for `00` to `09`,
  // so it spans a range of its own instead of growing a digit at a time.
  if (prefix.startsWith('0')) {
    const scale = 10 ** (maxLength - prefix.length);
    const lower = requested * scale;

    const from = Math.max(lower, min);
    const to = Math.min(lower + scale - 1, max);

    return from > to ? null : { value: from.toString(), canGrow: from < to };
  }

  let first: number | null = null;

  // `prefix` followed by `extra` more digits spans one contiguous range, and every extra digit puts that range wholly
  // above the previous one, so the first range to reach into `[min, max]` is the one holding the smallest value.
  for (let extra = 0; prefix.length + extra <= maxLength; extra++) {
    const scale = 10 ** extra;
    const from = Math.max(requested * scale, min);
    const to = Math.min(requested * scale + scale - 1, max);

    if (from > to) {
      continue;
    }

    // A second value, whether in this range or alongside the one already found, is what says another digit can follow.
    if (first !== null || from < to) {
      return { value: (first ?? from).toString(), canGrow: true };
    }

    first = from;
  }

  return first === null ? null : { value: first.toString(), canGrow: false };
};

/** The value of a field that is a plain number inside a fixed range, which is every field but the year. */
export const getGenericRangeValue = (
  formatter: DateInputFormatter,
  value: string,
  key: string,
  context: DateInputFormatterContext
): DateInputFieldValue | null => {
  if (!isDigit(key)) {
    return null;
  }

  const [min, max] = getFieldRange(formatter, context);

  // Without a key the caller is asking what the value stands for on its own, and no result tells it to pull the value
  // back into range instead.
  if (!key) {
    return getPrefixedValue(value, min, max);
  }

  const requested = `${value}${key}`;
  const grown = getPrefixedValue(requested, min, max);

  // The field keeps the digits as they were typed, leading zeros and all: they are what the next key is read against.
  if (grown) {
    return { value: requested, canGrow: grown.canGrow };
  }

  // With nowhere left to grow, the field restarts from the key alone.
  const restarted = getPrefixedValue(key, min, max);

  return restarted ? { value: key, canGrow: restarted.canGrow } : null;
};
