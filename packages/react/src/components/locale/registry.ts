import { en, type Localization, ru } from './index';
import type { LocaleData } from './types';

export const DEFAULT_LOCALE = 'en';

const registry = new Map<string, LocaleData>([
  ['en', { locale: 'en', components: en.components }],
  ['ru', { locale: 'ru', components: ru.components }],
]);

export const registerLocale = (locale: string, localization: Localization) => {
  registry.set(locale, { locale, components: localization.components });
};

export const getLocaleData = (locale: string): LocaleData => {
  return registry.get(locale) ?? registry.get(locale.split('-')[0]) ?? registry.get(DEFAULT_LOCALE)!;
};
