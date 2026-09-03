import type { Locale, LocalizeFn, Month } from 'date-fns';
import { ru as base } from 'date-fns/locale';

const monthValues: Record<'formatting' | 'standalone', string[]> = {
  formatting: ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сент', 'окт', 'нояб', 'дек'],
  standalone: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'],
};

const month: LocalizeFn<Month> = (value, options) => {
  if (options?.width !== 'abbreviated') {
    return base.localize.month(value, options);
  }

  return monthValues[options.context === 'formatting' ? 'formatting' : 'standalone'][value];
};

export const ru: Locale = {
  ...base,
  localize: {
    ...base.localize,
    month,
  },
};
