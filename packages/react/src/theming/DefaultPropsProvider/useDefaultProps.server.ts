import { cache } from 'react';

import { Components, ComponentsPropsList } from './DefaultPropsProvider.types';

import { resolveProps } from '../../utils';

/**
 * Holds the default props of the current server request. `cache` returns a fresh object per request, which keeps
 * concurrent requests with different locales from observing each other's values.
 */
export const getDefaultPropsStore = cache((): { value: Components } => ({ value: {} }));

/**
 * Merges the props of a component with the default props of the current request. The passed props take precedence over
 * the default ones.
 *
 * This is the server counterpart of `useDefaultProps`. It reads a request-scoped store rather than context, so it holds
 * no hooks and can be called from a server component.
 */
export const useDefaultProps = <Props extends object>({
  props,
  name,
}: {
  /** The props the component has been rendered with. */
  props: Props;
  /** The name the component is registered under. */
  name: keyof ComponentsPropsList;
}): Props => {
  const defaultProps = getDefaultPropsStore().value[name]?.defaultProps;

  return defaultProps ? resolveProps(defaultProps as Partial<Props>, props) : props;
};
