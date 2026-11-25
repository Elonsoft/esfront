// Registers every component in `ComponentsPropsList`, which `DefaultPropsProvider` derives its value type from.
import './overrides';

export * from './components';
export { LocaleProvider } from './components/locale/LocaleProvider.client';
export * from './hooks';
export * from './icons';
export * from './theming';
export * from './transitions';
export * from './types';
export type { LocaleData, LocaleProviderProps } from '@esfront/react/locale';
export { registerLocale, setLocale, useLocale } from '@esfront/react/locale';
