import { useCallback, useRef, useState } from 'react';

/**
 * The hook that allows to have controlled internal state inside the uncontrolled component.
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
