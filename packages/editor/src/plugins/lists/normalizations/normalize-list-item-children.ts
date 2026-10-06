import { Editor, Element, Node, NodeEntry } from 'slate';

import { setElementType } from '../../../utils';
import {
  createListItemTextNode,
  getListItemTextNodeType,
  isListItemNode,
  isListItemTextNode,
  isListNode,
} from '../checks';
import { NESTED_LIST_PATH_INDEX, TEXT_PATH_INDEX } from '../lists.constants';
import { moveListItemsToAnotherList } from '../transforms';

/**
 * A list item contains either a list item text alone, or a list item text followed by one nested
 * list — never anything else, and never in another order.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeListItemChildren = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListItemNode(editor, node)) {
    return false;
  }

  const children = Array.from(Node.children(editor, path));

  if (children.length === 0) {
    editor.insertNodes(createListItemTextNode(editor), { at: [...path, TEXT_PATH_INDEX] });
    return true;
  }

  const [listItemText, listItemTextPath] = children[0];

  if (!Element.isElement(listItemText) || !isListItemTextNode(editor, listItemText)) {
    if (Element.isElement(listItemText) && isListNode(editor, listItemText)) {
      // A nested list with no text before it: give the list item the text node it is missing.
      editor.insertNodes(createListItemTextNode(editor), { at: [...path, TEXT_PATH_INDEX] });
    } else {
      setElementType(editor, getListItemTextNodeType(editor), { at: listItemTextPath });
    }

    return true;
  }

  for (const [child, childPath] of children.slice(1)) {
    const index = childPath[childPath.length - 1];
    const isList = Element.isElement(child) && isListNode(editor, child);

    if (isList && index === NESTED_LIST_PATH_INDEX) {
      continue;
    }

    if (isList) {
      // A second nested list is merged into the first one.
      const nestedListPath = [...path, NESTED_LIST_PATH_INDEX];

      editor.withoutNormalizing(() => {
        const childRef = editor.pathRef(childPath);

        moveListItemsToAnotherList(editor, { at: childPath, to: nestedListPath });

        if (childRef.current) {
          editor.removeNodes({ at: childRef.current });
        }

        childRef.unref();
      });

      return true;
    }

    // Anything that is not a nested list belongs inside the list item text.
    editor.moveNodes({ at: childPath, to: [...listItemTextPath, listItemText.children.length] });

    return true;
  }

  return false;
};
