import * as checks from './checks';
import * as transforms from './transforms';

/**
 * Namespace of the helpers that operate on whole blocks, i.e. the direct children of the editor.
 *
 * These sit above the plugins rather than inside one, because a block operation has to know about
 * every structure a block can be: `setBlock` converts between lists and text blocks, which neither
 * plugin can do on its own.
 */
export const BlocksEditor = {
  // Checks & Getters

  getBlocks: checks.getBlocks,
  getPositionAfterBlocks: checks.getPositionAfterBlocks,
  findBlockById: checks.findBlockById,

  // Transformations

  setBlock: transforms.setBlock,
  insertBlock: transforms.insertBlock,
  removeBlocks: transforms.removeBlocks,
  duplicateBlocks: transforms.duplicateBlocks,
  moveBlocksUp: transforms.moveBlocksUp,
  moveBlocksDown: transforms.moveBlocksDown,
  moveBlockToIndex: transforms.moveBlockToIndex,
};
