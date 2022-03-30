import { useCallback, useRef, useState } from 'react';

/**
 * @returns The value and setState function.
 */
export const useControlled = <T>(defaultValue?: T, controlled?: T): [T | undefined, (value: T) => void] => {
  const { current: isControlled } = useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultValue);

  const setUncontrolled = useCallback((value: T) => {
    if (!isControlled) {
      setValue(value);
    }
  }, []);

  return [isControlled ? controlled : valueState, setUncontrolled];
};
