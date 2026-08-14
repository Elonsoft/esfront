import { Ref, RefCallback, useMemo } from 'react';

const setRef = <T>(
  ref: React.MutableRefObject<T | null> | ((instance: T | null) => void) | null | undefined,
  value: T | null
) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

/**
 * The hook that merges several refs into one.
 * @param refs The refs to merge.
 * @returns A ref callback that updates every given ref, or `null` if all of them are `null`.
 */
export const useForkRef = <Instance>(...refs: Array<Ref<Instance> | undefined>): RefCallback<Instance> | null => {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return useMemo(() => {
    if (refs.every((ref) => ref === null)) {
      return null;
    }

    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
};
