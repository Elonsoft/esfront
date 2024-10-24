/* eslint-disable @typescript-eslint/no-empty-object-type */

import * as React from 'react';

import RadioGroupContext, { RadioGroupContextValue } from './RadioGroup.context';

export interface RadioGroupState extends RadioGroupContextValue {}

export function useRadioGroup(): RadioGroupState | undefined {
  return React.useContext(RadioGroupContext);
}
