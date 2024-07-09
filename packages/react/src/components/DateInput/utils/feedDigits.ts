import { DateInputField, DateInputFormatter, DateInputValues } from '../DateInput.types';

import { getEffectiveValues } from './date';
import { EMPTY_VALUES } from './fields';

export interface FeedDigitsParams {
  /** The formatters in the order the format writes them, which is the order the digits walk through. */
  sequence: DateInputFormatter[];
  /** The fields the format describes. */
  fields: DateInputField[];
  fallbackYear: number;
  minDate: Date;
  maxDate: Date;
  /** The digits to feed in, with everything that is not a digit already taken out. */
  digits: string;
}

export interface FeedDigitsResult {
  values: DateInputValues;
  /** The position in `sequence` the last digit left off on, which is where the selection ends up. */
  index: number;
}

/**
 * @internal
 * Walks `digits` through the fields from the first one on, as if each one of them had been typed into an empty date.
 *
 * The date starts out empty rather than from what is in the field: the digits stand for the whole of a date, so a field
 * they do not reach was left out by the date being written rather than kept from the one before it.
 *
 * Typing is driven by React state, so it cannot be replayed one keystroke at a time: every call would read the values
 * the render before it left behind. The walk is folded here instead, against values that are carried from one digit to
 * the next, and written back in one go.
 */
export const feedDigits = ({
  sequence,
  fields,
  fallbackYear,
  minDate,
  maxDate,
  digits,
}: FeedDigitsParams): FeedDigitsResult => {
  const result = { ...EMPTY_VALUES };
  // Read against the values as they are being filled in, so that every field sees what the more significant ones took.
  const effective = getEffectiveValues(result, fields, fallbackYear);

  let index = 0;

  for (const digit of digits) {
    if (index >= sequence.length) {
      break;
    }

    const formatter = sequence[index];
    const field = formatter.field;
    const next = formatter.getValue(effective[field], digit, { values: effective, minDate, maxDate });

    // A digit the field cannot take is dropped rather than pushed onto the field after it: a pasted string that does
    // not fit the format would otherwise be spread across the date in a way that has nothing to do with what it said.
    if (!next) {
      continue;
    }

    result[field] = next.value;
    effective[field] = next.value;

    // A field that cannot take another digit hands the rest of them on to the field after it, the same way typing a
    // date walks the selection along without it being moved by hand.
    if (!next.canGrow) {
      index += 1;
    }
  }

  // A field the digits ran out on is the one they were left in, and the walk only ever stops past the end when the last
  // field was filled in whole.
  return { values: result, index: Math.min(index, sequence.length - 1) };
};
