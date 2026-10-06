import { Editor, Element, Location, NodeEntry, Path, Range } from 'slate';

import { getNodeId } from '../../plugins/ids';

/**
 * Returns the top level blocks within the location, defaulting to the current selection.
 *
 * A block is a direct child of the editor, which is the unit a block based interface moves,
 * duplicates and removes: a list counts as one block, not as one per item.
 */
export const getBlocks = (editor: Editor, at: Location | null = editor.selection): NodeEntry<Element>[] => {
  if (!at) {
    return [];
  }

  return Array.from(
    editor.nodes<Element>({
      at: Range.isRange(at) ? Editor.unhangRange(editor, at) : at,
      match: (node, path) => {
        return path.length === 1 && Element.isElement(node);
      },
    })
  );
};

/**
 * Returns the path a new block would take to land right after the blocks within the location, which
 * is where an insert triggered from one of them belongs.
 */
export const getPositionAfterBlocks = (editor: Editor, at: Location | null = editor.selection): Path | null => {
  const blocks = getBlocks(editor, at);

  if (!blocks.length) {
    return null;
  }

  return Path.next(blocks[blocks.length - 1][1]);
};

/**
 * Returns the block carrying the given id, as assigned by `withNodeId`.
 *
 * Drag and drop works in ids rather than paths, because a path stops being the node it referred to
 * as soon as anything above it moves.
 */
export const findBlockById = (editor: Editor, id: string): NodeEntry<Element> | null => {
  for (const entry of getBlocks(editor, [])) {
    if (getNodeId(entry[0]) === id) {
      return entry;
    }
  }

  return null;
};
