import { DateIOFormats, IUtils } from '@date-io/core/IUtils';

interface DateAdapterProviderAdapater {
  new (options?: { formats?: DateIOFormats; locale?: any; instance?: any }): IUtils<Date>;
}

export interface DateAdapterProviderProps {
  /** Date adapter. */
  adapter: DateAdapterProviderAdapater;
  /** Map of predefined format strings. */
  formats?: DateIOFormats<any>;
  /** Locale object for the date library. */
  locale?: any;
}
