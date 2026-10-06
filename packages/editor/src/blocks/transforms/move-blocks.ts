import { Editor, Location, Path } from 'slate';

import { forEachPath } from '../../utils';
import { findBlockById, getBlocks } from '../checks';

/**
 * Moves the blocks within the location one position up.
 *
 * @returns True, if the editor state has been changed.
 */
export const moveBlocksUp = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const blocks = getBlocks(editor, at);

  if (!blocks.length || blocks[0][1][0] === 0) {
    return false;
  }

  editor.withoutNormalizing(() => {
    forEachPath(editor, blocks, (path) => {
      editor.moveNodes({ at: path, to: Path.previous(path) });
    });
  });

  return true;
};

/**
 * Moves the blocks within the location one position down.
 *
 * @returns True, if the editor state has been changed.
 */
export const moveBlocksDown = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const blocks = getBlocks(editor, at);

  if (!blocks.length || blocks[blocks.length - 1][1][0] >= editor.children.length - 1) {
    return false;
  }

  editor.withoutNormalizing(() => {
    // Last first, so that each block moves into a position the ones after it have already left.
    forEachPath(
      editor,
      blocks,
      (path) => {
        editor.moveNodes({ at: path, to: Path.next(path) });
      },
      { reverse: true }
    );
  });

  return true;
};

/**
 * Moves the block carrying the given id to the given top level index, which is the shape a drag and
 * drop library reports a drop in.
 *
 * @returns True, if the editor state has been changed.
 */
export const moveBlockToIndex = (editor: Editor, id: string, index: number): boolean => {
  const block = findBlockById(editor, id);

  if (!block) {
    return false;
  }

  const to = [Math.min(Math.max(index, 0), editor.children.length - 1)];

  if (Path.equals(block[1], to)) {
    return false;
  }

  editor.moveNodes({ at: block[1], to });

  return true;
};
