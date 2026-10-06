import { createTestEditor, cursor, li, p, ul } from '../../testing';

import { removeBlocks } from './remove-blocks';

import { describe, expect, it } from 'vitest';

describe('removeBlocks', () => {
  it('removes the block the cursor is in', () => {
    const editor = createTestEditor([p('one'), p('two')], cursor([0, 0]));

    expect(removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('two')]);
  });

  it('removes a list as a whole', () => {
    const editor = createTestEditor([ul(li('one'), li('two')), p('after')], cursor([0, 0, 0, 0]));

    expect(removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p('after')]);
  });

  // A document always needs a block to put the caret in.
  it('leaves a default text node behind when the last block goes', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    expect(removeBlocks(editor)).toBe(true);
    expect(editor.children).toEqual([p()]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    expect(removeBlocks(editor)).toBe(false);
  });
});
