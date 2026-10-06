import { Editor, Element, Node, Path } from 'slate';

import { moveListItemsToAnotherList } from './move-list-items-to-another-list';

import { getNestedList, isListItemNode, isListNode } from '../checks';
import { NESTED_LIST_PATH_INDEX } from '../lists.constants';

/**
 * Moves the list at `at` into the list item at `to`, as its nested list. When the list item already
 * has a nested list, the items are merged into that one instead.
 */
export const moveListToListItem = (editor: Editor, { at, to }: { at: Path; to: Path }) => {
  if (Path.isAncestor(at, to)) {
    return;
  }

  const list = Node.get(editor, at);
  const listItem = Node.get(editor, to);

  if (!Element.isElement(list) || !isListNode(editor, list)) {
    return;
  }

  if (!Element.isElement(listItem) || !isListItemNode(editor, listItem)) {
    return;
  }

  const nestedList = getNestedList(editor, to);

  editor.withoutNormalizing(() => {
    if (!nestedList) {
      editor.moveNodes({ at, to: [...to, NESTED_LIST_PATH_INDEX] });
      return;
    }

    const sourceRef = editor.pathRef(at);

    moveListItemsToAnotherList(editor, { at, to: nestedList[1] });

    if (sourceRef.current) {
      editor.removeNodes({ at: sourceRef.current });
    }

    sourceRef.unref();
  });
};
