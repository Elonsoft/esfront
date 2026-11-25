export const setLocale = (_locale: string): void => {
  throw new Error('setLocale is only available in server components. Use LocaleProvider on the client.');
};
