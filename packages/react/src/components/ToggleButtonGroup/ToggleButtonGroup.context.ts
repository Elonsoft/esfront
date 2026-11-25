import { createContext, MouseEvent } from 'react';

import type { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

export interface ToggleButtonGroupContextValue {
  onChange?: (event: MouseEvent, value: string) => void;
  value?: ToggleButtonGroupProps['value'];
  disabled?: ToggleButtonGroupProps['disabled'];
  size?: ToggleButtonGroupProps['size'];
  fullWidth?: ToggleButtonGroupProps['fullWidth'];
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextValue>({});
