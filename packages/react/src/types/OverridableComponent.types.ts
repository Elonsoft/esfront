import { ComponentPropsWithRef, ElementType, JSX } from 'react';

import { DistributiveOmit } from './utility.types';

/** Describes the props a component owns and the element it renders by default. */
export interface OverridableTypeMap {
  props: object;
  defaultComponent: ElementType;
}

/** The props declared by the component itself, without the ones inherited from the root element. */
export type BaseProps<TypeMap extends OverridableTypeMap> = TypeMap['props'];

/** The props of the component when the `component` prop is used. */
export type OverrideProps<TypeMap extends OverridableTypeMap, RootComponent extends ElementType> = BaseProps<TypeMap> &
  DistributiveOmit<ComponentPropsWithRef<RootComponent>, keyof BaseProps<TypeMap>>;

/** The props of the component when the `component` prop is not used. */
export type DefaultComponentProps<TypeMap extends OverridableTypeMap> = BaseProps<TypeMap> &
  DistributiveOmit<ComponentPropsWithRef<TypeMap['defaultComponent']>, keyof BaseProps<TypeMap>>;

/**
 * A component whose root element can be swapped through the `component` prop. The props it accepts follow the element
 * that is passed.
 */
export interface OverridableComponent<TypeMap extends OverridableTypeMap> {
  <RootComponent extends ElementType>(
    props: {
      /** The component used for the root node. Either a string to use an HTML element or a component. */
      component: RootComponent;
    } & OverrideProps<TypeMap, RootComponent>
  ): JSX.Element | null;
  (props: DefaultComponentProps<TypeMap>): JSX.Element | null;
}
