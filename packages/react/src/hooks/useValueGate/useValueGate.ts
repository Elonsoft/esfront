import { useRef } from 'react';

/**
 * The hook that gates a given value.
 * @param value The value to gate.
 * @param signal The value updated only when signal is `true` or when it is changing according to options.
 * @param options The options object.
 * @param options.rising Specify updating on the rising edge of the signal.
 * @param options.falling Specify updating on the falling edge of the signal.
 */
export const useValueGate = <T>(value: T, signal: boolean, options: { rising?: boolean; falling?: boolean } = {}) => {
  const { rising = false, falling = false } = options;

  const state = useRef(value);
  const prevSignal = useRef(signal);

  if (
    (!rising && !falling && signal) ||
    (rising && signal === true && prevSignal.current === false) ||
    (falling && signal === false && prevSignal.current === true)
  ) {
    state.current = value;
  }

  prevSignal.current = signal;

  return state.current;
};
