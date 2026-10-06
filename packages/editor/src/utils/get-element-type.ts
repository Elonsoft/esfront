import { Element, Node } from 'slate';

// The library is agnostic of the element types an application uses, so it cannot rely on the
// augmented `Element` interface having a `type` property. The intersection below widens the
// property to `unknown` without losing the augmented type when there is one.
type ElementWithUnknownType = Element & Record<'type', unknown>;

/**
 * Returns the `type` of the node, or `undefined` when the node is not an element with a
 * string `type` property.
 */
export const getElementType = (node: Node): string | undefined => {
  if (!Element.isElement(node)) {
    return undefined;
  }

  const { type } = node as ElementWithUnknownType;

  return typeof type === 'string' ? type : undefined;
};

/**
 * Checks whether the node is an element of the given type.
 */
export const isElementType = (node: Node, type: string) => {
  return getElementType(node) === type;
};
