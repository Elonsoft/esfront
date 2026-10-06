import { createTestEditor, cursor, p, point, range, withId } from '../../testing';

import { moveBlocksDown, moveBlocksUp, moveBlockToIndex } from './move-blocks';

import { describe, expect, it } from 'vitest';

describe('moveBlocksUp', () => {
  it('moves the block one position up', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(moveBlocksUp(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('one')]);
  });

  it('keeps the order of several moved blocks', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([1, 0], 0), point([2, 0], 5)));

    expect(moveBlocksUp(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('three'), p('one')]);
  });

  it('does nothing on the first block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(moveBlocksUp(editor)).toBe(false);
    expect(editor.children).toEqual([p('one'), p('two')]);
  });
});

describe('moveBlocksDown', () => {
  it('moves the block one position down', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(moveBlocksDown(editor)).toBe(true);
    expect(editor.children).toEqual([p('two'), p('one')]);
  });

  it('keeps the order of several moved blocks', () => {
    const editor = createTestEditor([p('one'), p('two'), p('three')], range(point([0, 0], 0), point([1, 0], 3)));

    expect(moveBlocksDown(editor)).toBe(true);
    expect(editor.children).toEqual([p('three'), p('one'), p('two')]);
  });

  it('does nothing on the last block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([1, 0]));

    expect(moveBlocksDown(editor)).toBe(false);
    expect(editor.children).toEqual([p('one'), p('two')]);
  });
});

describe('moveBlockToIndex', () => {
  it('moves the block carrying the id to the index', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b'), withId(p('three'), 'c')], null);

    expect(moveBlockToIndex(editor, 'a', 2)).toBe(true);
    expect(editor.children).toEqual([withId(p('two'), 'b'), withId(p('three'), 'c'), withId(p('one'), 'a')]);
  });

  it('clamps an index past the end', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')], null);

    expect(moveBlockToIndex(editor, 'a', 99)).toBe(true);
    expect(editor.children).toEqual([withId(p('two'), 'b'), withId(p('one'), 'a')]);
  });

  it('does nothing when the block is already there', () => {
    const editor = createTestEditor([withId(p('one'), 'a'), withId(p('two'), 'b')], null);

    expect(moveBlockToIndex(editor, 'a', 0)).toBe(false);
  });

  it('does nothing for an unknown id', () => {
    const editor = createTestEditor([withId(p('one'), 'a')], null);

    expect(moveBlockToIndex(editor, 'b', 0)).toBe(false);
  });
});
