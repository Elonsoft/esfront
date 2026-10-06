import { Editor, Element, Node, Path } from 'slate';

import { moveListItemsToAnotherList } from './move-list-items-to-another-list';

import { BaseEditor } from '../../base';
import { getListType, isListNode } from '../checks';

/**
 * Merges the list at the given path into its previous sibling when that sibling is a list of the
 * same type, so that two adjacent lists do not stay split after an unwrap or a type change.
 *
 * @returns True, if the editor state has been changed.
 */
export const mergeListWithPreviousSiblingList = (editor: Editor, listPath: Path): boolean => {
  if (!Node.has(editor, listPath)) {
    return false;
  }

  const list = Node.get(editor, listPath);

  if (!Element.isElement(list) || !isListNode(editor, list)) {
    return false;
  }

  const previous = BaseEditor.getPrevSibling(editor, listPath);

  if (!previous) {
    return false;
  }

  const [previousNode, previousPath] = previous;

  if (!Element.isElement(previousNode) || !isListNode(editor, previousNode)) {
    return false;
  }

  if (getListType(editor, previousNode) !== getListType(editor, list)) {
    return false;
  }

  editor.withoutNormalizing(() => {
    const listRef = editor.pathRef(listPath);

    moveListItemsToAnotherList(editor, { at: listPath, to: previousPath });

    if (listRef.current) {
      editor.removeNodes({ at: listRef.current });
    }

    listRef.unref();
  });

  return true;
};
