export interface DebouncedFunction<T extends any[]> {
  (...args: T): void;
  /** Cancels a pending invocation. */
  clear: () => void;
}

/**
 * Creates a function that delays invoking `func` until `wait` milliseconds have elapsed since the last time it was
 * called.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns The debounced function with an additional `clear` method.
 */
export const debounce = <T extends any[]>(func: (...args: T) => void, wait = 166): DebouncedFunction<T> => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: T) => {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.clear = () => {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
  };

  return debounced;
};
