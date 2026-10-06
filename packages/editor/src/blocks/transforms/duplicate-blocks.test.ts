import { createTestEditor, cursor, li, p, point, range, ul } from '../../testing';

import { duplicateBlocks } from './duplicate-blocks';

import { describe, expect, it } from 'vitest';

describe('duplicateBlocks', () => {
  it('inserts a copy right after the block', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), p('one'), p('two')]);
  });

  // The copy lands next to a list of the same type, so `normalizeSiblingLists` folds the two into
  // one. The content is duplicated either way, and one list is what a reader expects to see.
  it('copies a list with everything in it, merging it back into one list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 0, 0]));

    expect(duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'))), li('one', ul(li('nested'))))]);
  });

  it('copies every block of the selection after the last of them', () => {
    const editor = createTestEditor([p('one'), p('two')], range(point([0, 0], 0), point([1, 0], 3)));

    expect(duplicateBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), p('two'), p('one'), p('two')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(duplicateBlocks(editor)).toBe(false);
  });
});
