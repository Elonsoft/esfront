import { ComponentType, ElementType, JSX } from 'react';

import { isHostComponent } from './isHostComponent';

/**
 * Type of the `ownerState` based on the type of an element it applies to. This resolves to the provided `OwnerState`
 * for React components and `undefined` for host components. Falls back to `OwnerState | undefined` when the exact type
 * can't be determined at development time.
 */
type OwnerStateWhenApplicable<TElementType extends ElementType, TOwnerState> =
  TElementType extends ComponentType<any>
    ? TOwnerState
    : TElementType extends keyof JSX.IntrinsicElements
      ? undefined
      : TOwnerState | undefined;

export type AppendOwnerStateReturnType<TElementType extends ElementType, TOtherProps, TOwnerState> = TOtherProps & {
  ownerState: OwnerStateWhenApplicable<TElementType, TOwnerState>;
};

/**
 * Appends the `ownerState` object to the props, merging with the existing one if necessary. If the element is a DOM
 * node or undefined, `ownerState` is not applied.
 */
export const appendOwnerState = <
  TElementType extends ElementType,
  TOtherProps extends Record<string, any>,
  TOwnerState,
>(
  elementType: TElementType | undefined,
  otherProps: TOtherProps,
  ownerState: TOwnerState
): AppendOwnerStateReturnType<TElementType, TOtherProps, TOwnerState> => {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps as AppendOwnerStateReturnType<TElementType, TOtherProps, TOwnerState>;
  }

  return {
    ...otherProps,
    ownerState: { ...otherProps.ownerState, ...ownerState },
  } as AppendOwnerStateReturnType<TElementType, TOtherProps, TOwnerState>;
};
