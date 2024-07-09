'use client';

import { ClipboardEventHandler } from 'react';

import { DateInputFormatter } from './DateInput.types';

import { DateInputSelection } from './useDateInputSelection';
import { DateInputState } from './useDateInputState';
import { parseDate } from './utils';

import { clamp } from '../../utils';

export interface UseDateInputPasteParams {
  state: DateInputState;
  selection: DateInputSelection;
  /** The formatters in the order the format writes them, which is the order the token elements are rendered in. */
  sequence: DateInputFormatter[];
  minDate: Date;
  maxDate: Date;
  disabled: boolean;
  readOnly: boolean;
  onPaste?: ClipboardEventHandler<HTMLDivElement>;
}

/**
 * A run of digits with nothing else around them, which is a date written as the field itself renders one rather than a
 * date written out.
 *
 * `Date` reads such a string as a date all the same, and it reads it as something else entirely: `07` comes out as July
 * of 2001 and `2024` as the first day of that year, while `20240115` comes out as no date at all. Digits are the one
 * form the field can read better on its own.
 */
const isDigitsOnly = (text: string) => /^\d+$/.test(text);

/**
 * @internal
 * Reads a pasted string as a date.
 *
 * A paste always applies to the whole of the date, wherever in the field the caret sits: a string written out as a date
 * is taken as that date, and one that is not is taken as the digits of the fields from the first one on. Nothing is
 * ever let through to the element: the content is rendered from the state, and a node the browser pasted into it would
 * leave it out of sync.
 */
export const useDateInputPaste = ({
  state,
  selection,
  sequence,
  minDate,
  maxDate,
  disabled,
  readOnly,
  onPaste: onPasteProp,
}: UseDateInputPasteParams) => {
  const onPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    onPasteProp?.(e);

    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    if (disabled || readOnly) {
      return;
    }

    const text = e.clipboardData.getData('text/plain').trim();
    const date = isDigitsOnly(text) ? null : parseDate(text);

    if (date) {
      state.setDate(new Date(clamp(date.getTime(), minDate.getTime(), maxDate.getTime())));
      selection.selectAll();

      return;
    }

    // A string that names no date is still read for the digits it holds, which is what a date written the way the field
    // renders one comes down to.
    const digits = text.replace(/\D/g, '');
    const tokenElements = selection.getTokenElements();

    if (!digits || !tokenElements.length) {
      return;
    }

    const index = state.typeDigits(digits, sequence);

    selection.select(tokenElements[index] ?? tokenElements[tokenElements.length - 1]);
  };

  return { onPaste };
};
