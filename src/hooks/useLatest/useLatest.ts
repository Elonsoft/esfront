// https://github.com/jaredLunde/react-hook/tree/master/packages/latest

import { useEffect, useRef } from 'react';

/**
 * The hook that returns the latest value. This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from.
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
