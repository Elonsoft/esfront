import { ReactNode } from 'react';

import { DateInputField, DateInputFormatter } from './DateInput.types';

export const isNumber = (key: string | number) => {
  return Number.isInteger(+key);
};

export const addWithLoop = (value: number, step: number, min: number, max: number) => {
  let result = value + step;

  if (result > max) {
    result = min;
  }

  if (result < min) {
    result = max;
  }

  return result;
};

export const getGenericRangeValues = (min: number, max: number) => (value: string, key: string) => {
  if (!isNumber(key)) {
    return [];
  }

  const variants: string[] = [];

  for (let i = min; i <= max; i++) {
    variants.push(i.toString());
  }

  const requested = `${value}${key}`;
  const possibleVariants = variants.filter((v) => v.startsWith(requested));

  if (possibleVariants.length) {
    return possibleVariants;
  }

  const possibleBaseVariants = variants.filter((v) => v.startsWith(key.toString()));

  if (possibleBaseVariants.length) {
    return possibleBaseVariants;
  }

  return [];
};

export const getZeroPaddedPlaceholder = (
  that: DateInputFormatter,
  value: string,
  selected: boolean,
  context: Record<DateInputField, string>,
  maxLength: number,
  placeholder: string
): ReactNode => {
  if (value) {
    if (selected && that.getValues(value, '', context).length > 1) {
      return (
        <>
          {value}
          {value.length < maxLength && (
            <span data-placeholder>{new Array(maxLength + 1 - value.length).join(placeholder)}</span>
          )}
        </>
      );
    }

    return value.padStart(maxLength, '0');
  }

  return <span data-placeholder>{new Array(maxLength + 1).join(placeholder)}</span>;
};
