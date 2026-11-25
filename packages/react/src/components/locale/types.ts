import type { ReactNode } from 'react';

import type { Localization } from './index';

export interface LocaleData {
  /** The language code, for example `ru`. */
  locale: string;
  /** The localized default props of every component. */
  components: Localization['components'];
}

export interface LocaleProviderProps {
  /** The content of the component. */
  children?: ReactNode;
  /** The language code, for example `ru`. Defaults to `en`. */
  locale?: string;
}
