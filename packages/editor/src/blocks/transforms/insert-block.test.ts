import { createTestEditor, cursor, h2, p } from '../../testing';

import { insertBlock } from './insert-block';

import { describe, expect, it } from 'vitest';

describe('insertBlock', () => {
  it('inserts after the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(insertBlock(editor, h2('new'))).toBe(true);
    expect(editor.children).toEqual([p('one'), h2('new'), p('two')]);
  });

  it('inserts at an explicit path', () => {
    const editor = createTestEditor([p('one')], null);

    expect(insertBlock(editor, h2('new'), [0])).toBe(true);
    expect(editor.children).toEqual([h2('new'), p('one')]);
  });

  it('moves the caret into the inserted block', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    insertBlock(editor, h2('new'));

    expect(editor.selection?.anchor.path).toEqual([1, 0]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(insertBlock(editor, h2('new'))).toBe(false);
    expect(editor.children).toEqual([p('one')]);
  });
});
