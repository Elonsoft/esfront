import { DefaultPropsProviderProps } from './DefaultPropsProvider.types';

import { DefaultPropsProvider as DefaultPropsClientProvider } from './DefaultPropsProvider';
import { getDefaultPropsStore } from './useDefaultProps.server';

/**
 * The DefaultPropsProvider supplies the default props that every component below it falls back to. Props passed to a
 * component always win over the ones coming from here.
 *
 * Server components read the value from a per-request store rather than from context, so the value is scoped to the
 * request instead of to the subtree. A nested provider therefore overwrites the outer one for every server component
 * rendered after it, while client components keep the usual context behaviour.
 */
export const DefaultPropsProvider = ({ children, value }: DefaultPropsProviderProps) => {
  getDefaultPropsStore().value = value;

  return <DefaultPropsClientProvider value={value}>{children}</DefaultPropsClientProvider>;
};
