import { useEffect, useRef } from 'react';

/**
 * The hook that receives a variable and outputs its previous value from the last render cycle.
 * @param value Current value.
 * @returns Previous value.
 */
export const usePreviousValue = <T>(value: T) => {
  const previous = useRef<T | undefined>(value);

  useEffect(() => {
    previous.current = value;

    return () => {
      previous.current = undefined;
    };
  });

  return previous.current;
};
