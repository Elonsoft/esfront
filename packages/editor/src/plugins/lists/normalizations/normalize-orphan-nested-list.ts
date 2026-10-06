import { Editor, Element, Node, NodeEntry, Path } from 'slate';

import { createListItemTextNode, isListItemNode, isListNode } from '../checks';
import { NESTED_LIST_PATH_INDEX, TEXT_PATH_INDEX } from '../lists.constants';
import { moveListToListItem } from '../transforms';

/**
 * A list nested in a list item sits at one fixed position: right after the list item text.
 *
 * One that ended up at the wrong index is moved into place, merging with the list already there when
 * there is one. A list that comes before any text gets a text node inserted before it.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeOrphanNestedList = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListNode(editor, node)) {
    return false;
  }

  if (path.length === 0) {
    return false;
  }

  const parentPath = Path.parent(path);
  const parent = Node.get(editor, parentPath);

  if (!Element.isElement(parent) || !isListItemNode(editor, parent)) {
    return false;
  }

  const index = path[path.length - 1];

  if (index === NESTED_LIST_PATH_INDEX) {
    return false;
  }

  if (index === TEXT_PATH_INDEX) {
    // There is no list item text for the nested list to follow, so give the list item one.
    editor.insertNodes(createListItemTextNode(editor), { at: [...parentPath, TEXT_PATH_INDEX] });

    return true;
  }

  moveListToListItem(editor, { at: path, to: parentPath });

  return true;
};
