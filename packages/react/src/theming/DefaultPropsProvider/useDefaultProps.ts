import { useContext } from 'react';

import { ComponentsPropsList } from './DefaultPropsProvider.types';

import { DefaultPropsContext } from './DefaultPropsProvider';

import { resolveProps } from '../../utils';

/**
 * Merges the props of a component with the default props supplied by the closest `DefaultPropsProvider`. The passed
 * props take precedence over the default ones.
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
  const components = useContext(DefaultPropsContext);
  const defaultProps = components[name]?.defaultProps;

  return defaultProps ? resolveProps(defaultProps as Partial<Props>, props) : props;
};
