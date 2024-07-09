import { ReactNode } from 'react';

import { DateInputFormatter } from '../DateInput.types';

export interface DateInputProviderProps {
  children?: ReactNode;
  /** The formatters the tokens of a format are read with, by the token each one is registered under. */
  registry: Map<string, DateInputFormatter>;
}
