/** Returns whether the element matches the `:focus-visible` pseudo class. */
export const isFocusVisible = (element: Element): boolean => {
  try {
    return element.matches(':focus-visible');
  } catch {
    // Browsers that do not implement `:focus-visible` throw a SyntaxError. Do not warn in jsdom, otherwise every test
    // relying on focus has to be skipped.
    if (process.env.NODE_ENV !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
      console.warn(
        [
          'The `:focus-visible` pseudo class is not supported in this browser.',
          'Some components rely on this feature to work properly.',
        ].join('\n')
      );
    }
  }

  return false;
};
