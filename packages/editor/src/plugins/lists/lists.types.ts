import type { Element, Node } from 'slate';

export interface ListsSchema {
  /**
   * Checks whether the node may be converted into the text node of a list item, which is what
   * decides the blocks `wrapInList` is allowed to turn into list items.
   */
  isConvertibleToListTextNode(node: Node): boolean;
  /** Checks whether the node is an ordered list node. */
  isOrderedListNode(node: Node): boolean;
  /** Checks whether the node is an unordered list node. */
  isUnorderedListNode(node: Node): boolean;
  /** Checks whether the node is a list item node. */
  isListItemNode(node: Node): boolean;
  /** Checks whether the node is the text node of a list item. */
  isListItemTextNode(node: Node): boolean;
  /** Returns the type of the ordered list node. */
  getOrderedListNodeType(): string;
  /** Returns the type of the unordered list node. */
  getUnorderedListNodeType(): string;
  /** Returns the type of the list item node. */
  getListItemNodeType(): string;
  /** Returns the type of the text node of a list item. */
  getListItemTextNodeType(): string;
  /** Creates a new list node of the given type. */
  createListNode(type: string, props?: Partial<Element>): Element;
  /** Creates a new ordered list node. */
  createOrderedListNode(props?: Partial<Element>): Element;
  /** Creates a new unordered list node. */
  createUnorderedListNode(props?: Partial<Element>): Element;
  /** Creates a new list item node. */
  createListItemNode(props?: Partial<Element>): Element;
  /** Creates a new text node for a list item. */
  createListItemTextNode(props?: Partial<Element>): Element;
}
