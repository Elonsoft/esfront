/**
 * Whether a key is something a numeric field can consume: a single digit, or the empty string, which stands for "no key
 * pressed". `Number` is not enough here, as it trims whitespace and would let a space pass as a zero.
 */
export const isDigit = (key: string | number) => {
  return key === '' || /^\d$/.test(key.toString());
};
