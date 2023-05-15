import { ReactNode } from 'react';

import { DateIOFormats, IUtils } from '@date-io/core/IUtils';

interface DateAdapterProviderAdapter {
  new (options?: { formats?: DateIOFormats; locale?: any; instance?: any }): IUtils<Date>;
}

export interface DateAdapterProviderProps {
  children?: ReactNode;
  /** Date adapter. */
  adapter: DateAdapterProviderAdapter;
  /** Map of predefined format strings. */
  formats?: DateIOFormats<any>;
  /** Locale object for the date library. */
  locale?: any;
}
