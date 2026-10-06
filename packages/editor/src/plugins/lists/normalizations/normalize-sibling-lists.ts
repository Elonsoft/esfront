import { Editor, Element, NodeEntry } from 'slate';

import { isListNode } from '../checks';
import { mergeListWithPreviousSiblingList } from '../transforms';

/**
 * Two adjacent lists of the same type are one list.
 *
 * Without this, unwrapping an item in the middle of a list, or changing the type of one list of a
 * pair, leaves behind a split that renders as two lists and restarts the numbering.
 *
 * @returns True, if the entry was normalized and no further rule should run.
 */
export const normalizeSiblingLists = (editor: Editor, [node, path]: NodeEntry): boolean => {
  if (!Element.isElement(node) || !isListNode(editor, node)) {
    return false;
  }

  return mergeListWithPreviousSiblingList(editor, path);
};
