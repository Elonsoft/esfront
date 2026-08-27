/**
 * Converts the first letter of a string to upper case.
 * @param value The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
