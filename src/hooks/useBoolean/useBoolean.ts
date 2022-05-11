import { Reducer, useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: any) => (typeof nextValue === 'boolean' ? nextValue : !state);

/**
 * @param initialValue The initial value.
 * @returns The stateful value and a callback to update it.
 */
export const useBoolean = (initialValue: boolean): [boolean, (nextValue?: any) => void] =>
  useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
