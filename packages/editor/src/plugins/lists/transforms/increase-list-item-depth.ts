import { Editor, Element, Node, Path } from 'slate';

import { BaseEditor } from '../../base';
import { createListNode, getListType, getNestedList, getParentList, isListItemNode, isListNode } from '../checks';
import { NESTED_LIST_PATH_INDEX } from '../lists.constants';

/**
 * Increases the nesting depth of the list item at the given path, by moving it into the nested list
 * of its previous sibling.
 *
 * @returns True, if the editor state has been changed.
 */
export const increaseListItemDepth = (editor: Editor, listItemPath: Path): boolean => {
  const previousListItem = BaseEditor.getPrevSibling(editor, listItemPath);

  if (!previousListItem) {
    // A previous sibling is necessary and sufficient for the operation to be possible: without one
    // there is nothing to nest under.
    return false;
  }

  const [previousListItemNode, previousListItemPath] = previousListItem;

  if (!isListItemNode(editor, previousListItemNode)) {
    return false;
  }

  const parentList = getParentList(editor, listItemPath);

  if (!parentList) {
    return false;
  }

  const previousListItemChildListPath = [...previousListItemPath, NESTED_LIST_PATH_INDEX];
  const hasChildList = !!getNestedList(editor, previousListItemPath);

  let changed = false;

  editor.withoutNormalizing(() => {
    if (!hasChildList) {
      const listNode = createListNode(editor, getListType(editor, parentList[0]), { children: [] });

      editor.insertNodes(listNode, { at: previousListItemChildListPath });

      changed = true;
    }

    const childList = Node.get(editor, previousListItemChildListPath);

    if (Element.isElement(childList) && isListNode(editor, childList)) {
      const index = hasChildList ? childList.children.length : 0;

      editor.moveNodes({ at: listItemPath, to: [...previousListItemChildListPath, index] });

      changed = true;
    }
  });

  return changed;
};
