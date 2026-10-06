import { Editor, Location, Node, Path } from 'slate';

import { getBlocks } from '../checks';

// A slate value is plain JSON, so a round trip through it is a deep clone of the whole subtree.
const cloneNode = <T extends Node>(node: T): T => {
  return JSON.parse(JSON.stringify(node)) as T;
};

/**
 * Inserts a copy of every block within the location right after them.
 *
 * `withNodeId` gives each inserted block a fresh id, but the nodes nested inside keep the ids they
 * were cloned with. Applications that put ids on nested nodes should replace them afterwards.
 *
 * @returns True, if the editor state has been changed.
 */
export const duplicateBlocks = (editor: Editor, at: Location | null = editor.selection): boolean => {
  const blocks = getBlocks(editor, at);

  if (!blocks.length) {
    return false;
  }

  const to = Path.next(blocks[blocks.length - 1][1]);

  editor.insertNodes(
    blocks.map(([node]) => cloneNode(node)),
    { at: to }
  );

  return true;
};
