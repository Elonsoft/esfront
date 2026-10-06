import { createTestEditor, cursor, li, p, point, range, ul, withId } from '../../testing';

import { findBlockById, getBlocks, getPositionAfterBlocks } from './get-blocks';

import { describe, expect, it } from 'vitest';

describe('getBlocks', () => {
  it('returns the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(getBlocks(editor).map(([, path]) => path)).toEqual([[1]]);
  });

  // A list is one block, however many items it holds.
  it('returns a list as a single block', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(getBlocks(editor).map(([, path]) => path)).toEqual([[0]]);
  });

  it('returns every block the selection spans', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([0, 0], 0), point([2, 0], 5)));

    expect(getBlocks(editor).map(([, path]) => path)).toEqual([[0], [1], [2]]);
  });

  it('returns nothing without a location', () => {
    expect(getBlocks(createTestEditor([p('one')], null))).toEqual([]);
  });
});

describe('getPositionAfterBlocks', () => {
  it('returns the path after the last block of the selection', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(getPositionAfterBlocks(editor)).toEqual([1]);
  });

  it('returns null without a location', () => {
    expect(getPositionAfterBlocks(createTestEditor([p('one')], null))).toBeNull();
  });
});

describe('findBlockById', () => {
  it('finds the block carrying the id', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')]);

    expect(findBlockById(editor, 'b')?.[1]).toEqual([1]);
  });

  it('returns null for an unknown id', () => {
    const editor = createTestEditor([withId(p('one'), 'a')]);

    expect(findBlockById(editor, 'b')).toBeNull();
  });

  it('does not need a selection', () => {
    const editor = createTestEditor([withId(p('one'), 'a')], null);

    expect(findBlockById(editor, 'a')?.[1]).toEqual([0]);
  });
});
