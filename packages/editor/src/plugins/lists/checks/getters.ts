import { Editor, Element, Location, Node, NodeEntry, Path, Range, Text } from 'slate';

import { isListItemNode, isListItemTextNode, isListNode } from './schema';

import { BaseEditor } from '../../base';
import { NESTED_LIST_PATH_INDEX, TEXT_PATH_INDEX } from '../lists.constants';
import { pickSubtreesRoots } from '../utils';

/**
 * Returns every list within the given location, defaulting to the current selection.
 */
export const getLists = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  if (!at) {
    return [];
  }

  return Array.from(
    editor.nodes<Element>({
      at: Range.isRange(at) ? Editor.unhangRange(editor, at) : at,
      match: (node) => {
        return isListNode(editor, node);
      },
    })
  );
};

/**
 * Returns every list item within the given location, defaulting to the current selection.
 */
export const getListItems = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  if (!at) {
    return [];
  }

  return Array.from(
    editor.nodes<Element>({
      at: Range.isRange(at) ? Editor.unhangRange(editor, at) : at,
      match: (node) => {
        return isListItemNode(editor, node);
      },
    })
  );
};

/**
 * Returns the list items a depth change should act on.
 *
 * A list item qualifies when the location touches its own text, which is what keeps a cursor inside
 * a nested item from also selecting every ancestor item it happens to sit in. Of any two that remain
 * where one contains the other, only the outer one is kept: moving it carries its nested list along,
 * so moving both would move the same content twice.
 */
export const getSelectedListItems = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  if (!at) {
    return [];
  }

  const location = Editor.range(editor, at);
  const target = Range.isExpanded(location) ? Editor.unhangRange(editor, location) : location;

  const touched = getListItems(editor, target).filter(([, path]) => {
    const listItemTextPath = [...path, TEXT_PATH_INDEX];

    if (!Node.has(editor, listItemTextPath)) {
      return false;
    }

    return !!Range.intersection(target, Editor.range(editor, listItemTextPath));
  });

  return pickSubtreesRoots(touched);
};

/**
 * Returns the lists that own the list items the location touches.
 *
 * These are the lists the location actually sits in, which is neither their ancestors nor the
 * sublists hanging off them: changing a nested list has to leave the list around it and the lists
 * inside it on their own types.
 */
export const getSelectedLists = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  const seen = new Set<string>();
  const lists: NodeEntry<Element>[] = [];

  for (const [, listItemPath] of getSelectedListItems(editor, at)) {
    const listPath = Path.parent(listItemPath);
    const key = listPath.join();

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);

    const list = Node.get(editor, listPath);

    if (Element.isElement(list) && isListNode(editor, list)) {
      lists.push([list, listPath]);
    }
  }

  return lists;
};

/**
 * Returns the innermost list containing the given location.
 */
export const getParentList = (editor: Editor, at: Location): NodeEntry<Element> | null => {
  return (
    editor.above<Element>({
      at,
      match: (node) => {
        return isListNode(editor, node);
      },
    }) ?? null
  );
};

/**
 * Returns the innermost list item containing the given location.
 */
export const getParentListItem = (editor: Editor, at: Location): NodeEntry<Element> | null => {
  return (
    editor.above<Element>({
      at,
      match: (node) => {
        return isListItemNode(editor, node);
      },
    }) ?? null
  );
};

/**
 * Returns the nested list of the list item at the given path, if it has one.
 */
export const getNestedList = (editor: Editor, listItemPath: Path): NodeEntry<Element> | null => {
  const nestedListPath = [...listItemPath, NESTED_LIST_PATH_INDEX];

  if (!Node.has(editor, nestedListPath)) {
    return null;
  }

  const nestedList = Node.get(editor, nestedListPath);

  if (!Element.isElement(nestedList) || !isListNode(editor, nestedList)) {
    return null;
  }

  return [nestedList, nestedListPath];
};

/**
 * Checks whether the given location sits inside a list.
 */
export const isInList = (editor: Editor, at: Location | null = editor.selection) => {
  return !!at && !!getParentList(editor, at);
};

/**
 * Checks whether the list item contains any text.
 */
export const isListItemContainingText = (editor: Editor, node: Node) => {
  if (!Element.isElement(node) || !isListItemNode(editor, node)) {
    return false;
  }

  const [listItemText] = node.children;

  if (!Element.isElement(listItemText) || !isListItemTextNode(editor, listItemText)) {
    return false;
  }

  return listItemText.children.some((child) => {
    return Text.isText(child) ? child.text.length > 0 : true;
  });
};

/**
 * Checks whether the text of the list item at the given path is empty.
 */
export const isListItemEmpty = (editor: Editor, listItemPath: Path) => {
  const listItemTextPath = [...listItemPath, TEXT_PATH_INDEX];

  if (!Node.has(editor, listItemTextPath)) {
    return false;
  }

  const listItemText = Node.get(editor, listItemTextPath);

  return Element.isElement(listItemText) && Editor.isEmpty(editor, listItemText);
};

/**
 * Checks whether the cursor sits on an empty list item.
 */
export const isAtEmptyListItem = (editor: Editor, at: Location | null = editor.selection) => {
  if (!at) {
    return false;
  }

  const listItem = getParentListItem(editor, at);

  return !!listItem && isListItemEmpty(editor, listItem[1]);
};

/**
 * Checks whether the cursor sits at the very start of the text of a list item.
 */
export const isAtStartOfListItem = (editor: Editor, at: Location | null = editor.selection) => {
  const cursor = BaseEditor.getCursorPosition(editor, at);

  if (!cursor) {
    return false;
  }

  const listItem = getParentListItem(editor, cursor.path);

  if (!listItem) {
    return false;
  }

  const listItemTextPath = [...listItem[1], TEXT_PATH_INDEX];

  return Node.has(editor, listItemTextPath) && Editor.isStart(editor, cursor, listItemTextPath);
};

/**
 * Checks whether `editor.deleteBackward()` is safe to call at the given location, i.e. whether it
 * would leave the list structure intact.
 *
 * Deleting backward from the start of a list item merges its text into whatever precedes it, which
 * is a list or a list item rather than a text block. The caller should change the depth of the item
 * instead, which is what `onListsKeyDown` does.
 */
export const isDeleteBackwardAllowed = (editor: Editor, at: Location | null = editor.selection) => {
  if (!at) {
    return false;
  }

  if (Range.isRange(at) && Range.isExpanded(at)) {
    return true;
  }

  const cursor = BaseEditor.getCursorPosition(editor, at);

  if (!cursor) {
    return false;
  }

  if (!getParentListItem(editor, cursor.path)) {
    return true;
  }

  return !isAtStartOfListItem(editor, cursor);
};
