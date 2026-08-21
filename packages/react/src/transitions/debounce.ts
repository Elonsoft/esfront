/** Delays the invocation of the callback until `wait` milliseconds have elapsed since the last call. */
export const debounce = <T extends unknown[]>(func: (...args: T) => void, wait = 166) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = (...args: T) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
};
