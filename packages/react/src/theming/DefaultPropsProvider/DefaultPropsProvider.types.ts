import { ReactNode } from 'react';

/**
 * The props of every component that reads default props, keyed by the component name. Augment this interface to
 * register your own components.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ComponentsPropsList {}

/** The default props of every registered component, keyed by the component name. */
export type Components = {
  [Name in keyof ComponentsPropsList]?: {
    defaultProps?: Partial<ComponentsPropsList[Name]>;
  };
};

export interface DefaultPropsProviderProps {
  /** The content of the component. */
  children?: ReactNode;
  /**
   * The default props of every component, keyed by the component name. A nested provider replaces the value of the
   * outer one instead of merging with it, so a subtree has to restate every default it needs.
   *
   * The value is passed to the context as is, therefore it should be memoized to avoid re-rendering every component
   * that reads it.
   */
  value: Components;
}
