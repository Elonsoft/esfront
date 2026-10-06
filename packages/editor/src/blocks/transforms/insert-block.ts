import { Editor, Element, Location } from 'slate';

import { getPositionAfterBlocks } from '../checks';

/**
 * Inserts a block and moves the caret into it, defaulting to the position right after the blocks the
 * selection covers.
 *
 * The node itself comes from the caller, because only the application knows what its block types
 * look like.
 *
 * @returns True, if the editor state has been changed.
 */
export const insertBlock = (editor: Editor, block: Element, at?: Location): boolean => {
  const target = at ?? getPositionAfterBlocks(editor);

  if (!target) {
    return false;
  }

  editor.insertNodes(block, { at: target, select: true });

  return true;
};
