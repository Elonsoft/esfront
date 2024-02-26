import { useCallback, useMemo, useState } from 'react';

/**
 * The hook that manages a single `sessionStorage` key.
 * @param key The key of the sessionStorage.
 * @param initialValue The initial value to set, if value in `sessionStorage` is empty.
 * @param {Object} options The options object.
 * @param {boolean} [options.raw=true] If set true, hook will not attempt to JSON serialize stored values.
 * @param {Object} [options.serializer=JSON.stringify] Custom serializer.
 * @param {Object} [options.deserializer=JSON.parse] Custom deserializer.
 * @returns The current `sessionStorage` value, a callback to update the value and a callback to remove the value.
 */

export const useSessionStorage = <T = null>(
  key: string,
  initialValue?: T,
  options?: {
    raw?: boolean;
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
  }
): [T, (storageValue: T) => void, () => void] => {
  const { raw = true, serializer = JSON.stringify, deserializer = JSON.parse } = options || {};

  const initializer = useMemo(() => {
    try {
      const storageValue = sessionStorage.getItem(key);

      if (storageValue) {
        return raw ? storageValue : deserializer(storageValue);
      }

      return initialValue ?? null;
    } catch {
      return initialValue ?? null;
    }
  }, [key]);

  const [value, setValue] = useState(initializer);

  const update = useCallback(
    (value: T) => {
      sessionStorage.setItem(key, raw ? (value as unknown as string) : serializer(value));
      setValue(value);
    },
    [key]
  );

  const remove = useCallback(() => {
    sessionStorage.removeItem(key);
    setValue(initialValue ?? null);
  }, [key, initialValue]);

  return [value, update, remove];
};
