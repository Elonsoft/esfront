import { DateInputProviderProps } from './DateInputProvider.types';

import { DateInputContext } from '../DateInput.context';

export const DateInputProvider = ({ children, registry }: DateInputProviderProps) => {
  return <DateInputContext.Provider value={registry}>{children}</DateInputContext.Provider>;
};
