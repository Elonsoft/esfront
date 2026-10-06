import { BlocksEditor } from '../src';
import {
  createBaseTestEditor,
  createTestEditor,
  cursor,
  ElementType,
  h2,
  li,
  ol,
  p,
  point,
  range,
  ul,
  withId,
} from '../src/testing';

import { describe, expect, it } from 'vitest';

describe('BlocksEditor.getBlocks', () => {
  it('returns the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(BlocksEditor.getBlocks(editor).map(([, path]) => path)).toEqual([[1]]);
  });

  // A list is one block, however many items it holds.
  it('returns a list as a single block', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(BlocksEditor.getBlocks(editor).map(([, path]) => path)).toEqual([[0]]);
  });

  it('returns every block the selection spans', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([0, 0], 0), point([2, 0], 5)));

    expect(BlocksEditor.getBlocks(editor).map(([, path]) => path)).toEqual([[0], [1], [2]]);
  });

  it('returns nothing without a location', () => {
    expect(BlocksEditor.getBlocks(createTestEditor([p('one')], null))).toEqual([]);
  });
});

describe('BlocksEditor.getPositionAfterBlocks', () => {
  it('returns the path after the last block of the selection', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.getPositionAfterBlocks(editor)).toEqual([1]);
  });

  it('returns null without a location', () => {
    expect(BlocksEditor.getPositionAfterBlocks(createTestEditor([p('one')], null))).toBeNull();
  });
});

describe('BlocksEditor.findBlockById', () => {
  it('finds the block carrying the id', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')]);

    expect(BlocksEditor.findBlockById(editor, 'b')?.[1]).toEqual([1]);
  });

  it('returns null for an unknown id', () => {
    const editor = createTestEditor([withId(p('one'), 'a')]);

    expect(BlocksEditor.findBlockById(editor, 'b')).toBeNull();
  });

  it('does not need a selection', () => {
    const editor = createTestEditor([withId(p('one'), 'a')], null);

    expect(BlocksEditor.findBlockById(editor, 'a')?.[1]).toEqual([0]);
  });
});

describe('BlocksEditor.setBlock', () => {
  it('converts one text block to another', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    BlocksEditor.setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([h2('one')]);
  });

  // A list is a structure a block gets wrapped in, not a type it can be set to.
  it('wraps a text block into a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    BlocksEditor.setBlock(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('switches a list to the other type', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    BlocksEditor.setBlock(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'))]);
  });

  it('lifts a list item out and converts it', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    BlocksEditor.setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([h2('one')]);
  });

  it('lifts a list item out to the default text node', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    BlocksEditor.setBlock(editor, ElementType.PARAGRAPH);

    expect(editor.children).toEqual([p('one')]);
  });

  it('leaves the sublist of a converted list alone', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 0, 0]));

    BlocksEditor.setBlock(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one', ul(li('nested'))))]);
  });

  it('converts the block at an explicit path', () => {
    const editor = createTestEditor([p('one'), p('two')], null);

    BlocksEditor.setBlock(editor, ElementType.H2, [1]);

    expect(editor.children).toEqual([p('one'), h2('two')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    BlocksEditor.setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([p('one')]);
  });
});

describe('BlocksEditor.setBlock without the lists plugin', () => {
  it('converts between text blocks as usual', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => BlocksEditor.setBlock(editor, ElementType.H2)).not.toThrow();
    expect(editor.children).toEqual([h2('one')]);
  });

  // Only the lists schema knows which types are lists, so without it a list type is just a string and
  // gets set literally, leaving a list whose child is text. Asking for a list needs `withLists`.
  it('sets a list type literally, which is not a usable list', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    BlocksEditor.setBlock(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([{ type: ElementType.UNORDERED_LIST, children: [{ text: 'one' }] }]);
  });
});

describe('BlocksEditor.insertBlock', () => {
  it('inserts after the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.insertBlock(editor, h2('new'))).toBe(true);
    expect(editor.children).toEqual([p('one'), h2('new'), p('two')]);
  });

  it('inserts at an explicit path', () => {
    const editor = createTestEditor([p('one')], null);

    expect(BlocksEditor.insertBlock(editor, h2('new'), [0])).toBe(true);
    expect(editor.children).toEqual([h2('new'), p('one')]);
  });

  it('moves the caret into the inserted block', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    BlocksEditor.insertBlock(editor, h2('new'));

    expect(editor.selection?.anchor.path).toEqual([1, 0]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(BlocksEditor.insertBlock(editor, h2('new'))).toBe(false);
    expect(editor.children).toEqual([p('one')]);
  });
});

describe('BlocksEditor.removeBlocks', () => {
  it('removes the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('two')]);
  });

  it('removes a list as a whole', () => {
    const editor = createTestEditor([ul(li('one'), li('two')), p('after')], cursor([0, 0, 0, 0]));

    expect(BlocksEditor.removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('after')]);
  });

  // A document always needs a block to put the caret in.
  it('leaves a default text node behind when the last block goes', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    expect(BlocksEditor.removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p()]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(BlocksEditor.removeBlocks(editor)).toBe(false);
  });
});

describe('BlocksEditor.duplicateBlocks', () => {
  it('inserts a copy right after the block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), p('one'), p('two')]);
  });

  // The copy lands next to a list of the same type, so `normalizeSiblingLists` folds the two into
  // one. The content is duplicated either way, and one list is what a reader expects to see.
  it('copies a list with everything in it, merging it back into one list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 0, 0]));

    expect(BlocksEditor.duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'))), li('one', ul(li('nested'))))]);
  });

  it('copies every block of the selection after the last of them', () => {
    const editor = createTestEditor([p('one'), p('two')], range(point([0, 0], 0), point([1, 0], 3)));

    expect(BlocksEditor.duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), p('two'), p('one'), p('two')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(BlocksEditor.duplicateBlocks(editor)).toBe(false);
  });
});

describe('BlocksEditor.moveBlocksUp', () => {
  it('moves the block one position up', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(BlocksEditor.moveBlocksUp(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('one')]);
  });

  it('keeps the order of several moved blocks', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([1, 0], 0), point([2, 0], 5)));

    expect(BlocksEditor.moveBlocksUp(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('three'), p('one')]);
  });

  it('does nothing on the first block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.moveBlocksUp(editor)).toBe(false);
    expect(editor.children).toEqual([p('one'), p('two')]);
  });
});

describe('BlocksEditor.moveBlocksDown', () => {
  it('moves the block one position down', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(BlocksEditor.moveBlocksDown(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('one')]);
  });

  it('keeps the order of several moved blocks', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([0, 0], 0), point([1, 0], 3)));

    expect(BlocksEditor.moveBlocksDown(editor)).toBe(true);
    expect(editor.children).toEqual([p('three'), p('one'), p('two')]);
  });

  it('does nothing on the last block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(BlocksEditor.moveBlocksDown(editor)).toBe(false);
    expect(editor.children).toEqual([p('one'), p('two')]);
  });
});

describe('BlocksEditor.moveBlockToIndex', () => {
  it('moves the block carrying the id to the index', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b'), withId(p('three'), 'c')], null);

    expect(BlocksEditor.moveBlockToIndex(editor, 'a', 2)).toBe(true);
    expect(editor.children).toEqual([withId(p('two'), 'b'), withId(p('three'), 'c'), withId(p('one'), 'a')]);
  });

  it('clamps an index past the end', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')], null);

    expect(BlocksEditor.moveBlockToIndex(editor, 'a', 99)).toBe(true);
    expect(editor.children).toEqual([withId(p('two'), 'b'), withId(p('one'), 'a')]);
  });

  it('does nothing when the block is already there', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')], null);

    expect(BlocksEditor.moveBlockToIndex(editor, 'a', 0)).toBe(false);
  });

  it('does nothing for an unknown id', () => {
    const editor = createTestEditor([withId(p('one'), 'a')], null);

    expect(BlocksEditor.moveBlockToIndex(editor, 'b', 0)).toBe(false);
  });
});
