import { Editor, Element, Node, Path } from 'slate';

import { increaseListItemDepth } from './increase-list-item-depth';

import { setElementType } from '../../../utils';
import { BaseEditor } from '../../base';
import { getNestedList, getParentList, getParentListItem } from '../checks';
import { TEXT_PATH_INDEX } from '../lists.constants';

/**
 * Decreases the nesting depth of the list item at the given path. A list item of the outermost list
 * is lifted out of the list entirely and becomes a default text node.
 *
 * @returns True, if the editor state has been changed.
 */
export const decreaseListItemDepth = (editor: Editor, listItemPath: Path): boolean => {
  const parentList = getParentList(editor, listItemPath);

  if (!parentList) {
    return false;
  }

  const [parentListNode, parentListPath] = parentList;
  const parentListItem = getParentListItem(editor, parentListPath);
  const listItemIndex = listItemPath[listItemPath.length - 1];
  const previousSiblings = parentListNode.children.slice(0, listItemIndex);
  const nextSiblings = parentListNode.children.slice(listItemIndex + 1);

  editor.withoutNormalizing(() => {
    // Every subsequent sibling has to move into a nested list under the list item being moved,
    // otherwise they would end up before it once it is lifted out.
    nextSiblings.forEach(() => {
      // The next sibling path stays the same: once one is moved away, another takes its place.
      increaseListItemDepth(editor, [...parentListPath, listItemIndex + 1]);
    });

    if (parentListItem) {
      editor.moveNodes({ at: listItemPath, to: Path.next(parentListItem[1]) });

      // The list item and all of its subsequent siblings have left this list, so remove it when
      // nothing is left behind.
      if (previousSiblings.length === 0) {
        editor.removeNodes({ at: parentListPath });
      }

      return;
    }

    // Move the list item out to the root of the editor.
    const listItemTextPath = [...listItemPath, TEXT_PATH_INDEX];
    const nestedList = getNestedList(editor, listItemPath);

    if (nestedList) {
      // The nested list becomes a list of its own and keeps its own type: a document is free to
      // nest an ordered list inside an unordered one, so promoting it must not convert it.
      editor.liftNodes({ at: nestedList[1] });
      editor.liftNodes({ at: Path.next(listItemPath) });
    }

    if (Node.has(editor, listItemTextPath)) {
      const listItemText = Node.get(editor, listItemTextPath);

      if (Element.isElement(listItemText)) {
        setElementType(editor, BaseEditor.getDefaultTextNodeType(editor), { at: listItemTextPath });
      }

      editor.liftNodes({ at: listItemTextPath });
      editor.liftNodes({ at: listItemPath });
    }
  });

  return true;
};
