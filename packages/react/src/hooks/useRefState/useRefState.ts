'use client';

import { RefObject, useCallback, useRef } from 'react';

import { useForceUpdate } from '../useForceUpdate';

/**
 * The hook that keeps a value in a ref and re-renders the component whenever that value is set. Useful for feeding a
 * DOM node to the hooks that observe `ref.current`, such as `useResizeObserver` or `useIntersectionObserver`, which a
 * plain `useRef` cannot do because writing to it does not trigger a render.
 * @param initialValue The value the ref is initialized with.
 * @returns The ref and a setter which can be passed directly to the `ref` prop as a callback ref.
 */
export const useRefState = <T>(initialValue: T | null = null): [RefObject<T | null>, (value: T | null) => void] => {
  const ref = useRef<T | null>(initialValue);
  const forceUpdate = useForceUpdate();

  const setRef = useCallback(
    (value: T | null) => {
      if (ref.current !== value) {
        ref.current = value;
        forceUpdate();
      }
    },
    [forceUpdate]
  );

  return [ref, setRef];
};
