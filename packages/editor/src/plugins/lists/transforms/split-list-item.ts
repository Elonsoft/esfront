import { Editor, Location, Node, Path, Range } from 'slate';

import { BaseEditor } from '../../base';
import { createListItemNode, createListItemTextNode, getParentListItem, isListItemTextNode } from '../checks';
import { NESTED_LIST_PATH_INDEX, TEXT_PATH_INDEX } from '../lists.constants';

/**
 * Collapses the given location (by removing everything in it) and, if the cursor ends up in a list
 * item, breaks that list item into two, splitting its text at the cursor.
 *
 * @returns True, if the editor state has been changed.
 */
export const splitListItem = (editor: Editor, at: Location | null = editor.selection): boolean => {
  if (!at) {
    return false;
  }

  if (Range.isRange(at) && Range.isExpanded(at)) {
    // Remove everything in the range. Its start point stays valid, which is where the cursor ends
    // up once the range is gone.
    editor.delete({ at });
  }

  const cursorPoint = BaseEditor.getCursorPosition(editor, Range.isRange(at) ? Range.start(at) : at);

  if (!cursorPoint) {
    return false;
  }

  // Nested lists make every ancestor list item a match, so the innermost one is the one to split.
  const listItem = getParentListItem(editor, cursorPoint.path);

  if (!listItem) {
    return false;
  }

  const [listItemNode, listItemPath] = listItem;
  const listItemTextPath = [...listItemPath, TEXT_PATH_INDEX];
  const { isEnd, isStart } = BaseEditor.getCursorPositionInNode(editor, cursorPoint, listItemTextPath);

  if (isStart) {
    const newListItem = createListItemNode(editor, { children: [createListItemTextNode(editor)] });

    editor.insertNodes(newListItem, { at: listItemPath });

    return true;
  }

  const newListItemPath = Path.next(listItemPath);
  const newListItemTextPath = Path.next(listItemTextPath);
  const hasNestedList = Node.has(listItemNode, [NESTED_LIST_PATH_INDEX]);

  editor.withoutNormalizing(() => {
    if (isEnd) {
      const newListItem = createListItemNode(editor, { children: [createListItemTextNode(editor)] });

      editor.insertNodes(newListItem, { at: newListItemPath });
      editor.select(newListItemPath);
    } else {
      editor.splitNodes({
        at: cursorPoint,
        match: (node) => {
          return isListItemTextNode(editor, node);
        },
      });

      // The original list item text has a parent list item, the new one needs its own.
      editor.wrapNodes(createListItemNode(editor, { children: [] }), { at: newListItemTextPath });

      editor.moveNodes({ at: newListItemTextPath, to: newListItemPath });
    }

    // A nested list belongs to the second half of the split.
    if (hasNestedList) {
      editor.moveNodes({
        at: Path.next(listItemTextPath),
        to: [...newListItemPath, NESTED_LIST_PATH_INDEX],
      });
    }
  });

  return true;
};
