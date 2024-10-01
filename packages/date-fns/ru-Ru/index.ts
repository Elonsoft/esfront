import { formatDistance, formatRelative } from 'date-fns';
// @ts-expect-error formatLong implicitly has an 'any' type.
import formatLong from 'date-fns/locale/ru/_lib/formatLong';
// @ts-expect-error match implicitly has an 'any' type.
import match from 'date-fns/locale/ru/_lib/match';

import localize from './_lib/localize';

const locale: Locale = {
  code: 'ru-Ru',
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1,
  },
};

export default locale;
