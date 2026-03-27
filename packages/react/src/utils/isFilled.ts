/** Returns whether a value counts as present. An empty string and an empty array are treated as absent. */
const hasValue = (value: unknown): boolean => {
  return value !== null && value !== undefined && value !== '' && !(Array.isArray(value) && value.length === 0);
};

/**
 * Determines whether an input holds a value. The result decides whether the label shrinks or acts as a placeholder.
 * @param input The input element or an object carrying `value`/`defaultValue`.
 * @param ssr Whether to fall back to `defaultValue`. Enable it when there is no element to read from yet.
 */
export const isFilled = (input?: { value?: unknown; defaultValue?: unknown } | null, ssr = false): boolean => {
  if (!input) {
    return false;
  }

  return hasValue(input.value) || (ssr && hasValue(input.defaultValue));
};
