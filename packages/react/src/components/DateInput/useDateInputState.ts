'use client';

import { useMemo, useState } from 'react';

import { DateInputField, DateInputFormatter, DateInputFormatterContext, DateInputValues } from './DateInput.types';

import { useDateInputSync } from './useDateInputSync';
import {
  dateToValues,
  EMPTY_VALUES,
  feedDigits,
  getEffectiveValues,
  getFieldRange,
  getTime,
  timeToDate,
  timeToValues,
  valuesToDate,
} from './utils';

import { clamp } from '../../utils';

export interface UseDateInputStateParams {
  /** The date the input is controlled with, or `undefined` while it is uncontrolled. */
  value: Date | null | undefined;
  minDate: Date;
  maxDate: Date;
  /** The fields the format describes, from the most to the least significant. */
  formatters: DateInputFormatter[];
  onChange?: (value: Date | null) => void;
}

/** The date being edited, as the digits of its fields and as the `Date` those digits add up to. */
export interface DateInputState {
  /** The digits each field is shown and typed as. */
  values: DateInputValues;
  /** The date every field of the format adds up to, or `null` while any of them is still empty. */
  date: Date | null;
  context: DateInputFormatterContext;
  setField: (field: DateInputField, next: string) => void;
  setDate: (next: Date) => void;
  /**
   * Replaces the date with `digits`, filled into the fields from the first one on and as if each digit had been typed,
   * and reports the position in `sequence` they left off on. A field the digits do not reach is left empty.
   */
  typeDigits: (digits: string, sequence: DateInputFormatter[]) => number;
  /** Shifts the whole date by `step` days. */
  addDays: (step: number) => void;
  /** Resolves every field that is still being typed to the value its digits stand for. */
  settle: () => void;
  /** Settles the fields and pulls the date they add up to inside `[minDate, maxDate]`. */
  commit: () => void;
  clear: () => void;
}

/**
 * @internal
 * Holds the date being edited as the digits of its fields, which is the only form that can describe a partly entered
 * date, and reports it as a `Date` once every field the format asks for is filled in.
 */
export const useDateInputState = ({
  value,
  minDate,
  maxDate,
  formatters,
  onChange,
}: UseDateInputStateParams): DateInputState => {
  const [values, setValues] = useState(() => timeToValues(getTime(value ?? null)));

  // Read once rather than on every render: a format that leaves the year out still has to build a date from something,
  // and a value that changes underneath the render would make the reported date depend on when it was read.
  const [fallbackYear] = useState(() => new Date().getFullYear());

  const fields = useMemo(() => formatters.map((formatter) => formatter.field), [formatters]);

  // The fields the format leaves out take part in the date all the same, so they are read as the date gives them.
  const effectiveValues = useMemo(
    () => getEffectiveValues(values, fields, fallbackYear),
    [values, fields, fallbackYear]
  );

  const context = useMemo(() => ({ values: effectiveValues, minDate, maxDate }), [effectiveValues, minDate, maxDate]);

  const filled = useMemo(() => {
    return formatters.every((formatter) => !!values[formatter.field]);
  }, [values, formatters]);

  // An incomplete date is reported as no date at all: leaving the last complete one in place would tell the
  // application that a date is still selected. So is one the fields do not add up to, such as a day past the end of
  // its month.
  const date = filled ? valuesToDate(effectiveValues) : null;

  useDateInputSync({
    time: getTime(date),
    valueTime: value === undefined ? undefined : getTime(value),
    onReceive: (time) => setValues(timeToValues(time)),
    onSend: (time) => onChange?.(timeToDate(time)),
  });

  // Editing a field changes what the less significant ones allow, so those are pulled back into range. A value that
  // could still grow another digit is left alone: it is mid-entry, and the next keystroke is constrained anyway.
  const clampValues = (next: DateInputValues) => {
    const result = { ...next };
    // Read against the copy as it is being clamped, so that every field sees what the more significant ones settled on.
    const effective = getEffectiveValues(result, fields, fallbackYear);
    const nextContext = { values: effective, minDate, maxDate };

    for (const formatter of formatters) {
      const current = effective[formatter.field];

      if (!current || formatter.getValue(current, '', nextContext)?.canGrow) {
        continue;
      }

      const [min, max] = getFieldRange(formatter, nextContext);
      const clamped = clamp(+current, min, max);

      if (clamped !== +current) {
        // The field keeps the width it was entered with, which for a year is what says whether it is known in full.
        const value = clamped.toString().padStart(current.length, '0');

        result[formatter.field] = value;
        effective[formatter.field] = value;
      }
    }

    return result;
  };

  /** The values with the fields the format describes read off `next`. */
  const withDate = (prev: DateInputValues, next: Date) => {
    const nextValues = dateToValues(next);
    const result = { ...prev };

    for (const formatter of formatters) {
      result[formatter.field] = nextValues[formatter.field];
    }

    return result;
  };

  // A field that is done being typed takes the value its digits stand for, rather than keeping them as they were typed.
  const settleValues = (next: DateInputValues) => {
    const result = { ...next };
    const effective = getEffectiveValues(result, fields, fallbackYear);
    const nextContext = { values: effective, minDate, maxDate };

    for (const formatter of formatters) {
      const current = effective[formatter.field];
      const settled = current ? formatter.getValue(current, '', nextContext)?.value : undefined;

      if (settled !== undefined) {
        result[formatter.field] = settled;
        effective[formatter.field] = settled;
      }
    }

    return clampValues(result);
  };

  const setField = (field: DateInputField, next: string) => {
    setValues((prev) => clampValues({ ...prev, [field]: next }));
  };

  const setDate = (next: Date) => {
    setValues((prev) => withDate(prev, next));
  };

  // Folded outside the updater rather than inside it, so that the position the digits ran out on can be reported back:
  // it is where the selection belongs once they are all in.
  const typeDigits = (digits: string, sequence: DateInputFormatter[]) => {
    const result = feedDigits({ sequence, fields, fallbackYear, minDate, maxDate, digits });

    setValues(clampValues(result.values));

    return result.index;
  };

  const settle = () => {
    setValues(settleValues);
  };

  // Narrowing every field on its own is enough for a date entered in full, but not for one written in a format that
  // leaves a field out, so the whole date is pulled into range as far as the fields the format describes carry it.
  const commit = () => {
    setValues((prev) => {
      const next = settleValues(prev);

      if (!formatters.every((formatter) => !!next[formatter.field])) {
        return next;
      }

      const nextDate = valuesToDate(getEffectiveValues(next, fields, fallbackYear));

      if (!nextDate) {
        return next;
      }

      const time = clamp(nextDate.getTime(), minDate.getTime(), maxDate.getTime());

      return time === nextDate.getTime() ? next : withDate(next, new Date(time));
    });
  };

  const clear = () => {
    setValues(EMPTY_VALUES);
  };

  // Shifts the whole date while no single token is selected. An incomplete date has nothing to shift, so every empty
  // field is filled in with its default first, which is the date the next step will move from.
  const addDays = (step: number) => {
    if (!date) {
      setValues((prev) => {
        const result = { ...prev };

        for (const formatter of formatters) {
          if (!result[formatter.field]) {
            result[formatter.field] = formatter.getDefaultValue();
          }
        }

        return clampValues(result);
      });

      return;
    }

    const shifted = new Date(date);
    shifted.setDate(shifted.getDate() + step);

    setDate(new Date(clamp(shifted.getTime(), minDate.getTime(), maxDate.getTime())));
  };

  return { values, date, context, setField, setDate, typeDigits, addDays, settle, commit, clear };
};
