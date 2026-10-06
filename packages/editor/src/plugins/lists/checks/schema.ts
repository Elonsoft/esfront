import { Editor, Element, Node } from 'slate';

import * as Registry from '../lists.registry';
import type { ListsSchema } from '../lists.types';

const schema = (editor: Editor) => {
  return Registry.get(editor);
};

export const isListsEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

export const getListsSchema = (editor: Editor): ListsSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor) : undefined;
};

// Schema proxies

export const isConvertibleToListTextNode = (editor: Editor, node: Node) => {
  return schema(editor).isConvertibleToListTextNode(node);
};

export const isOrderedListNode = (editor: Editor, node: Node) => {
  return schema(editor).isOrderedListNode(node);
};

export const isUnorderedListNode = (editor: Editor, node: Node) => {
  return schema(editor).isUnorderedListNode(node);
};

export const isListItemNode = (editor: Editor, node: Node) => {
  return schema(editor).isListItemNode(node);
};

export const isListItemTextNode = (editor: Editor, node: Node) => {
  return schema(editor).isListItemTextNode(node);
};

export const getOrderedListNodeType = (editor: Editor) => {
  return schema(editor).getOrderedListNodeType();
};

export const getUnorderedListNodeType = (editor: Editor) => {
  return schema(editor).getUnorderedListNodeType();
};

export const getListItemNodeType = (editor: Editor) => {
  return schema(editor).getListItemNodeType();
};

export const getListItemTextNodeType = (editor: Editor) => {
  return schema(editor).getListItemTextNodeType();
};

export const createListNode = (editor: Editor, type: string, props?: Partial<Element>) => {
  return schema(editor).createListNode(type, props);
};

export const createOrderedListNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createOrderedListNode(props);
};

export const createUnorderedListNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createUnorderedListNode(props);
};

export const createListItemNode = (editor: Editor, props?: Partial<Element>) => {
  return schema(editor).createListItemNode(props);
};

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
