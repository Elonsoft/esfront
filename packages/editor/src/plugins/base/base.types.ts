import type { Element, Node } from 'slate';

export interface BaseSchema {
  isDefaultTextNode(node: Node): boolean;
  getDefaultTextNodeType(): Element['type'];
  createDefaultTextNode(props?: Partial<Element>): Element;
}
