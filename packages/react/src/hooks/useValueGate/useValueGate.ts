'use client';

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

  // The gate compares the current signal against the previous render's signal and latches the value in
  // the same pass, so both refs are necessarily read and written during render. Under StrictMode's
  // double render the latch runs twice, which is idempotent here: it re-latches the same value.
  /* eslint-disable react-hooks/refs */
  if (
    (!rising && !falling && signal) ||
    (rising && signal === true && prevSignal.current === false) ||
    (falling && signal === false && prevSignal.current === true)
  ) {
    state.current = value;
  }

  prevSignal.current = signal;

  return state.current;
  /* eslint-enable react-hooks/refs */
};
