/* eslint-disable @typescript-eslint/no-empty-object-type */

import * as React from 'react';

import RadioGroupContext, { RadioGroupContextValue } from './RadioGroup.context';

export interface RadioGroupState extends RadioGroupContextValue {}

/**
 * The hook that returns the state of the enclosing `RadioGroup`, or `undefined` when used outside of one.
 */
export function useRadioGroup(): RadioGroupState | undefined {
  return React.useContext(RadioGroupContext);
}
