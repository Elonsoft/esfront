import { ReactNode } from 'react';

import { DateInputField, DateInputFormatter } from './DateInput.types';

import { addWithLoop, getGenericRangeValues, getZeroPaddedPlaceholder, isNumber } from './DateInput.utils';

export const DateInputRegistry = new Map<string, DateInputFormatter>();

export class DateInputYearFormatter implements DateInputFormatter {
  field = 'year' as const;

  getDefaultValue = () => new Date().getFullYear().toString();

  getPlaceholder = (value: string, selected: boolean, context: Record<DateInputField, string>): ReactNode => {
    return getZeroPaddedPlaceholder(this, value, selected, context, 4, 'Y');
  };

  getValues = (value: string, key: string) => {
    if (!isNumber(key)) {
      return [];
    }

    if (value.length === 4) {
      return [`${key}`, `${key}x`];
    }

    const requested = `${value}${key}`;

    if (requested.length === 4) {
      return [requested];
    }

    return [requested, `${requested}x`];
  };

  getPrev = (value: string, step: number) => {
    return addWithLoop(+value, -step, 0, 9999).toString();
  };

  getNext = (value: string, step: number) => {
    return addWithLoop(+value, step, 0, 9999).toString();
  };
}

export class DateInputMonthFormatter implements DateInputFormatter {
  field = 'month' as const;

  getDefaultValue = () => '0';

  getPlaceholder = (value: string, selected: boolean, context: Record<DateInputField, string>): ReactNode => {
    return getZeroPaddedPlaceholder(this, value, selected, context, 2, 'M');
  };

  getValues = getGenericRangeValues(1, 12);

  getPrev = (value: string, step: number) => {
    return addWithLoop(+value, -step, 1, 12).toString();
  };

  getNext = (value: string, step: number) => {
    return addWithLoop(+value, step, 1, 12).toString();
  };
}

export class DateInputDateFormatter implements DateInputFormatter {
  field = 'date' as const;

  getDefaultValue = () => '0';

  getPlaceholder = (value: string, selected: boolean, context: Record<DateInputField, string>): ReactNode => {
    return getZeroPaddedPlaceholder(this, value, selected, context, 2, 'D');
  };

  getValues = getGenericRangeValues(1, 31);

  getPrev = (value: string, step: number) => {
    return addWithLoop(+value, -step, 1, 31).toString();
  };

  getNext = (value: string, step: number) => {
    return addWithLoop(+value, step, 1, 31).toString();
  };
}

export class DateInputHoursFormatter implements DateInputFormatter {
  field = 'hours' as const;

  getDefaultValue = () => '0';

  getPlaceholder = (value: string, selected: boolean, context: Record<DateInputField, string>): ReactNode => {
    return getZeroPaddedPlaceholder(this, value, selected, context, 2, 'h');
  };

  getValues = getGenericRangeValues(0, 23);

  getPrev = (value: string, step: number) => {
    return addWithLoop(+value, -step, 0, 23).toString();
  };

  getNext = (value: string, step: number) => {
    return addWithLoop(+value, step, 0, 23).toString();
  };
}

export class DateInputMinutesFormatter implements DateInputFormatter {
  field = 'minutes' as const;

  getDefaultValue = () => '0';

  getPlaceholder = (value: string, selected: boolean, context: Record<DateInputField, string>): ReactNode => {
    return getZeroPaddedPlaceholder(this, value, selected, context, 2, 'm');
  };

  getValues = getGenericRangeValues(0, 59);

  getPrev = (value: string, step: number) => {
    return addWithLoop(+value, -step, 0, 59).toString();
  };

  getNext = (value: string, step: number) => {
    return addWithLoop(+value, step, 0, 59).toString();
  };
}

DateInputRegistry.set('YYYY', new DateInputYearFormatter());
DateInputRegistry.set('MM', new DateInputMonthFormatter());
DateInputRegistry.set('dd', new DateInputDateFormatter());
DateInputRegistry.set('HH', new DateInputHoursFormatter());
DateInputRegistry.set('mm', new DateInputMinutesFormatter());
