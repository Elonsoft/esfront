import { createContext } from 'react';

import type { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

export interface ToggleButtonGroupContextType {
  className?: string;
  onChange?: ToggleButtonGroupProps['onChange'];
  value?: ToggleButtonGroupProps['value'];
  disabled?: ToggleButtonGroupProps['disabled'];
  size?: ToggleButtonGroupProps['size'];
  fullWidth?: ToggleButtonGroupProps['fullWidth'];
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType>({});
