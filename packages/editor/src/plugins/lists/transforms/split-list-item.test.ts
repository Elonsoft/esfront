import { splitListItem } from './split-list-item';

import { createTestEditor, cursor, li, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('splitListItem', () => {
  it('adds a sibling list item when the cursor is at the end', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 3));

    expect(splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li())]);
  });

  it('adds a list item before when the cursor is at the start', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0));

    expect(splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li(), li('one'))]);
  });

  it('splits the text when the cursor is in the middle', () => {
    const editor = createTestEditor([ul(li('onetwo'))], cursor([0, 0, 0, 0], 3));

    expect(splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  // The fork took the last of every matching list item, which in a nested list is the wrong one.
  it('splits the innermost list item of a nested list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0], 6));

    expect(splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'), li())))]);
  });

  it('moves a nested list to the second half of the split', () => {
    const editor = createTestEditor([ul(li('onetwo', ul(li('nested'))))], cursor([0, 0, 0, 0], 3));

    expect(splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('two', ul(li('nested'))))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    expect(splitListItem(editor)).toBe(false);
  });
});
