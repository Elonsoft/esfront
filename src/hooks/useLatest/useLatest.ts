// https://github.com/jaredLunde/react-hook/tree/master/packages/latest

import { useEffect, useRef } from 'react';

/**
 * @param current The value to store.
 * @returns The ref with the latest value.
 */
export const useLatest = <T>(current: T) => {
  const storedValue = useRef(current);

  useEffect(() => {
    storedValue.current = current;
  });

  return storedValue;
};
