// https://github.com/jaredLunde/react-hook/tree/master/packages/latest

import { useRef, useEffect } from 'react';

export const useLatest = <T extends any>(current: T) => {
  const storedValue = useRef(current);

  useEffect(() => {
    storedValue.current = current;
  });

  return storedValue;
};
