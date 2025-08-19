import { useCallback, useMemo, useState } from 'react';

/**
 * The hook that manages a single `localStorage` key.
 * @param key The key of the localStorage.
 * @param initialValue The initial value to set, if value in `localStorage` is empty.
 * @param {Object} options The options object.
 * @param {boolean} [options.raw=true] If set true, hook will not attempt to JSON serialize stored values.
 * @param {boolean} [options.initial=true] If set true, hook will set initial value.
 * @param {Object} [options.serializer=JSON.stringify] Custom serializer.
 * @param {Object} [options.deserializer=JSON.parse] Custom deserializer.
 * @returns The current `localStorage` value, a callback to update the value and a callback to remove the value.
 */

export const useLocalStorage = <T = null>(
  key: string,
  initialValue?: T,
  options?: {
    raw?: boolean;
    initial?: boolean;
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
  }
): [T, (storageValue: T) => void, () => void] => {
  const { raw = true, serializer = JSON.stringify, deserializer = JSON.parse } = options || {};

  const initializer = useMemo(() => {
    try {
      const storageValue = localStorage.getItem(key);

      if (storageValue) {
        return raw ? storageValue : deserializer(storageValue);
      }

      if (options?.initial) {
        localStorage.setItem(key, raw ? (initialValue as unknown as string) : serializer(initialValue));
      }

      return initialValue ?? null;
    } catch {
      return initialValue ?? null;
    }
  }, [key]);

  const [value, setValue] = useState(initializer);

  const update = useCallback(
    (value: T) => {
      localStorage.setItem(key, raw ? (value as unknown as string) : serializer(value));
      setValue(value);
    },
    [key]
  );

  const remove = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key, initialValue]);

  return [value, update, remove];
};
