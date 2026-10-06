import type { Element, Node } from 'slate';

export interface BaseSchema {
  /** Checks whether the node is the default text node, e.g. a paragraph. */
  isDefaultTextNode(node: Node): boolean;
  /** Returns the type of the default text node. */
  getDefaultTextNodeType(): string;
  /** Creates a new default text node. */
  createDefaultTextNode(props?: Partial<Element>): Element;
}
