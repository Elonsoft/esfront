'use client';

import { DateInputTokenProps } from './DateInputToken.types';

import { getFieldRange } from '../utils';

/**
 * @internal
 * One part of the date that can be edited. It is announced as a spinbutton, which is the role that carries both the
 * value it holds and the range that value is picked from.
 */
export const DateInputToken = ({ id, label, token, formatter, value, selected, context }: DateInputTokenProps) => {
  const [min, max] = getFieldRange(formatter, context);

  return (
    <span
      data-node
      aria-label={label}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={value === '' ? undefined : +value}
      aria-valuetext={value === '' ? label : value}
      data-token={token}
      id={id}
      role="spinbutton"
    >
      {formatter.getPlaceholder(value, selected, context)}
    </span>
  );
};
