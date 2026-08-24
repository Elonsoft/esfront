import { MutableRefObject } from 'react';

/**
 * Assigns a value to a ref, no matter whether it is a callback or an object ref. Falsy refs are a no-op.
 *
 * Only call this inside a callback that is passed as a ref, otherwise make sure to clean up the previous ref when it
 * changes.
 */
export const setRef = <T>(
  ref: MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null
): void => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};
