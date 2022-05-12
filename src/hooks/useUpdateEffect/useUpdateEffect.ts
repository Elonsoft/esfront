import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * The hook that is simmilar to `useEffect` but ignores the first invocation.
 * @param effect Imperative function that can return a cleanup function.
 * @param deps If present, effect will only activate if the values in the list change.
 */
export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    } else {
      return effect();
    }
  }, deps);
};
