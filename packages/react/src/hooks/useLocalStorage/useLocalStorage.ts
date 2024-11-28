'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * The hook that manages a single `localStorage` key.
 * @param key The key of the localStorage.
 * @param initialValue The initial value to set, if value in `localStorage` is empty.
 * @param {Object} options The options object.
 * @param {boolean} [options.raw=true] If set true, hook will not attempt to JSON serialize stored values.
 * @param {boolean} [options.writeInitialValue=false] If set true, writes the initial value to the storage when it does not exist.
 * @param {Object} [options.serializer=JSON.stringify] Custom serializer.
 * @param {Object} [options.deserializer=JSON.parse] Custom deserializer.
 * @returns The current `localStorage` value, a callback to update the value and a callback to remove the value.
 */
export const useLocalStorage = <T = null>(
  key: string,
  initialValue?: T,
  options?: {
    raw?: boolean;
    writeInitialValue?: boolean;
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
  }
): [T, (storageValue: T) => void, () => void] => {
  const { raw = true, writeInitialValue, serializer = JSON.stringify, deserializer = JSON.parse } = options || {};

  const initializer = useMemo(() => {
    try {
      const storageValue = window.localStorage.getItem(key);

      if (storageValue !== null) {
        return raw ? storageValue : deserializer(storageValue);
      }

      return initialValue ?? null;
    } catch {
      return initialValue ?? null;
    }
  }, [key]);

  const [state, setState] = useState(() => ({ key, value: initializer }));

  if (state.key !== key) {
    setState({ key, value: initializer });
  }

  const value = state.key === key ? state.value : initializer;

  useEffect(() => {
    if (initialValue === null || initialValue === undefined || !writeInitialValue) {
      return;
    }

    try {
      if (window.localStorage.getItem(key) === null) {
        window.localStorage.setItem(key, raw ? (initialValue as unknown as string) : serializer(initialValue));
      }
    } catch {
      // The storage is not accessible, nothing to write.
    }
  }, [key]);

  const update = useCallback(
    (value: T) => {
      window.localStorage.setItem(key, raw ? (value as unknown as string) : serializer(value));
      setState({ key, value });
    },
    [key, raw, serializer]
  );

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);

    if (initialValue !== null && initialValue !== undefined && writeInitialValue) {
      window.localStorage.setItem(key, raw ? (initialValue as unknown as string) : serializer(initialValue));
    }

    setState({ key, value: initialValue ?? null });
  }, [key, raw, serializer, initialValue, writeInitialValue]);

  return [value, update, remove];
};
