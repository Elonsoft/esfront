'use client';

import { useMemo } from 'react';

import { DateInputFormatter } from './DateInput.types';

import { DATE_INPUT_FIELDS, escapeRegExp } from './utils';

export interface UseDateInputFormatParams {
  /** The registered formatters, by the token each one is written as. */
  registry: Map<string, DateInputFormatter>;
  format: string;
}

/** One part of a format string: a token, and the formatter it is registered with if there is one. */
export interface DateInputPart {
  /** The token as it is written in the format string. */
  token: string;
  /** The formatter that renders and edits the token, or `undefined` for a part that is only written out. */
  formatter?: DateInputFormatter;
}

/**
 * @internal
 * Reads a format string as the parts the input is rendered from, and as the fields those parts edit.
 */
export const useDateInputFormat = ({ registry, format }: UseDateInputFormatParams) => {
  const parts = useMemo((): DateInputPart[] => {
    // Longest first, so that a token that starts with another one is still matched whole.
    const keys = Array.from(registry.keys()).sort((a, b) => b.length - a.length);
    const nextFormat = format.replace(/ /g, '\u00a0');

    // With no tokens to split on, an empty alternation would match at every position and tear the format apart
    // character by character.
    const tokens = keys.length
      ? nextFormat.split(new RegExp(`(${keys.map(escapeRegExp).join('|')})`)).filter(Boolean)
      : [nextFormat];

    return tokens.map((token) => ({ token, formatter: registry.get(token) }));
  }, [registry, format]);

  // Ordered the way the format writes them, which is the order the parts of the date are rendered and walked through.
  const sequence = useMemo(() => {
    return parts.reduce<DateInputFormatter[]>((result, { formatter }) => {
      if (formatter) {
        result.push(formatter);
      }

      return result;
    }, []);
  }, [parts]);

  // Ordered from the most to the least significant field, so that narrowing a field's range only ever depends on ones
  // already visited. A format that repeats a token still describes a single field.
  const formatters = useMemo(() => {
    const result: DateInputFormatter[] = [];

    for (const formatter of sequence) {
      if (!result.includes(formatter)) {
        result.push(formatter);
      }
    }

    return result.sort((a, b) => DATE_INPUT_FIELDS.indexOf(a.field) - DATE_INPUT_FIELDS.indexOf(b.field));
  }, [sequence]);

  return { parts, sequence, formatters };
};
