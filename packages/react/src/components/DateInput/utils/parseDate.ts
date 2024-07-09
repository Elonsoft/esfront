/**
 * An ISO 8601 date, with everything past the day optional, and with the time zone captured on its own: whether it is
 * there is what decides how the date is read.
 */
const ISO_DATE =
  /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:[.,](\d{1,3})\d*)?)?(Z|[+-]\d{2}:?\d{2})?)?$/;

/**
 * The date a pasted string stands for, or `null` when it stands for none.
 *
 * An ISO string is read by hand rather than handed straight to `Date`, because the two forms of it disagree on the time
 * zone they are in: `2024-01-15` is defined to be UTC while `2024-01-15T10:30` is local, so the date-only form would
 * land on the day before behind a negative offset. Only a string that names its own zone is read as the absolute
 * instant it describes; every other one is read as a local time, which is the zone the field itself is written in.
 */
export const parseDate = (text: string): Date | null => {
  const iso = ISO_DATE.exec(text);

  if (iso) {
    const [, year, month, date, hours, minutes, seconds, milliseconds, timezone] = iso;

    if (timezone) {
      const time = Date.parse(text);

      return Number.isNaN(time) ? null : new Date(time);
    }

    const result = new Date(0);

    result.setFullYear(+year, +month - 1, +date);
    // The fields past the day are optional, so the ones the string leaves out start the day off at its beginning.
    result.setHours(+(hours ?? 0), +(minutes ?? 0), +(seconds ?? 0), +(milliseconds ?? '0').padEnd(3, '0'));

    // The parts are taken as written, so a day past the end of its month rolls over into the next one. Such a string
    // does not describe the date it is written as, so it describes none.
    if (
      Number.isNaN(result.getTime()) ||
      result.getFullYear() !== +year ||
      result.getMonth() + 1 !== +month ||
      result.getDate() !== +date
    ) {
      return null;
    }

    return result;
  }

  // Everything else is left to the browser, which also takes the forms a date is written in for a reader: `Jan 15 2024`
  // and `2024/01/15` among them.
  const time = Date.parse(text);

  return Number.isNaN(time) ? null : new Date(time);
};
