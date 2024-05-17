import type { Element, Node } from 'slate';

export interface ListsSchema {
  isOrderedListNode(node: Node): boolean;
  isUnorderedListNode(node: Node): boolean;
  isListItemNode(node: Node): boolean;
  isListItemTextNode(node: Node): boolean;
  getOrderedListNodeType(): Element['type'];
  getUnorderedListNodeType(): Element['type'];
  getListItemNodeType(): Element['type'];
  getListItemTextNodeType(): Element['type'];
  createOrderedListNode(props?: Partial<Element>): Element;
  createUnorderedListNode(props?: Partial<Element>): Element;
  createListItemNode(props?: Partial<Element>): Element;
  createListItemTextNode(props?: Partial<Element>): Element;
}
