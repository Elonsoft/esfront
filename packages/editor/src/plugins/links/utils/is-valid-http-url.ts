/**
 * Checks whether the string is an `http` or `https` url.
 */
export const isValidHttpUrl = (url: string) => {
  try {
    const { protocol } = new URL(url);

    return protocol === 'http:' || protocol === 'https:';
  } catch {
    return false;
  }
};
