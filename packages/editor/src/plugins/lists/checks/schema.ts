import { Editor, Element, Node } from 'slate';

import * as Registry from '../lists.registry';
import type { ListsSchema } from '../lists.types';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

/**
 * Checks whether the editor was initialized with `withLists`.
 */
export const isListsEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

/**
 * Returns the lists schema the editor was initialized with, or `undefined` when it has none.
 */
export const getListsSchema = (editor: Editor): ListsSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor) : undefined;
};

// Schema proxies

/**
 * Checks whether the schema allows the node to become the text of a list item, which is what decides
 * whether `wrapInList` takes it.
 */
export const isConvertibleToListTextNode = (editor: Editor, node: Node) => {
  return schema(editor).isConvertibleToListTextNode(node);
};

/**
 * Checks whether the node is an ordered list, as the schema defines one.
 */
export const isOrderedListNode = (editor: Editor, node: Node) => {
  return schema(editor).isOrderedListNode(node);
};

/**
 * Checks whether the node is an unordered list, as the schema defines one.
 */
export const isUnorderedListNode = (editor: Editor, node: Node) => {
  return schema(editor).isUnorderedListNode(node);
};

/**
 * Checks whether the node is a list item, as the schema defines one.
 */
export const isListItemNode = (editor: Editor, node: Node) => {
  return schema(editor).isListItemNode(node);
};

/**
 * Checks whether the node is the text of a list item, as the schema defines one.
 */
export const isListItemTextNode = (editor: Editor, node: Node) => {
  return schema(editor).isListItemTextNode(node);
};

/**
 * Returns the type the schema uses for ordered lists.
 */
export const getOrderedListNodeType = (editor: Editor) => {
  return schema(editor).getOrderedListNodeType();
};

/**
 * Returns the type the schema uses for unordered lists.
 */
export const getUnorderedListNodeType = (editor: Editor) => {
  return schema(editor).getUnorderedListNodeType();
};

/**
 * Returns the type the schema uses for list items.
 */
export const getListItemNodeType = (editor: Editor) => {
  return schema(editor).getListItemNodeType();
};

/**
 * Returns the type the schema uses for the text of a list item.
 */
export const getListItemTextNodeType = (editor: Editor) => {
  return schema(editor).getListItemTextNodeType();
};

/**
 * Builds a list node of the given type.
 */
export const createListNode = (editor: Editor, type: string, props?: Partial<Element>) => {
  return schema(editor).createListNode(type, props);
};

/**
 * Builds an ordered list node.
 */
export const createOrderedListNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createOrderedListNode(props);
};

/**
 * Builds an unordered list node.
 */
export const createUnorderedListNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createUnorderedListNode(props);
};

/**
 * Builds a list item node.
 */
export const createListItemNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createListItemNode(props);
};

/**
 * Builds the text node of a list item.
 */
export const createListItemTextNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createListItemTextNode(props);
};

// Derived checks

/**
 * Checks whether the node is a list, optionally of the given type.
 */
export const isListNode = (editor: Editor, node: Node, type?: string) => {
  if (type === getOrderedListNodeType(editor)) {
    return isOrderedListNode(editor, node);
  }

  if (type === getUnorderedListNodeType(editor)) {
    return isUnorderedListNode(editor, node);
  }

  return isOrderedListNode(editor, node) || isUnorderedListNode(editor, node);
};

/**
 * Returns the type of the given list node, falling back to the unordered list type when the node
 * is not a list.
 */
export const getListType = (editor: Editor, node: Node) => {
  const ol = getOrderedListNodeType(editor);

  return isListNode(editor, node, ol) ? ol : getUnorderedListNodeType(editor);
};
