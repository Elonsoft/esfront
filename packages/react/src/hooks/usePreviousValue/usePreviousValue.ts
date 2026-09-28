'use client';

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

  // The contract is "the value from the previous render", which is not derivable from the current
  // props or state, so the ref has to be read during render. A state-based version would return the
  // previous *distinct* value instead, which is a different hook.
  // eslint-disable-next-line react-hooks/refs
  return previous.current;
};
