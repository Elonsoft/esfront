import { increaseDepth } from './increase-depth';

import { createTestEditor, cursor, li, point, range, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('increaseDepth', () => {
  it('nests a list item under its previous sibling', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two'))))]);
  });

  it('appends to an existing nested list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))), li('two'))], cursor([0, 1, 0, 0]));

    expect(increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'), li('two'))))]);
  });

  it('leaves the first list item of a list alone', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 0, 0, 0]));

    expect(increaseDepth(editor)).toBe(false);
    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  // Only the path based transform was ported, so a selection spanning several items moved one.
  it('nests every list item of an expanded selection', () => {
    const editor = createTestEditor(
      [ul(li('one'), li('two'), li('three'))],
      range(point([0, 1, 0, 0], 0), point([0, 2, 0, 0], 5))
    );

    expect(increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two'), li('three'))))]);
  });

  // A selection across a nested list matches the outer item and the inner one; moving both would
  // move the same content twice.
  it('moves only the outermost list item of a nested selection', () => {
    const editor = createTestEditor(
      [ul(li('one'), li('two', ul(li('nested'))))],
      range(point([0, 1, 0, 0], 0), point([0, 1, 1, 0, 0, 0], 6))
    );

    expect(increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two', ul(li('nested'))))))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    expect(increaseDepth(editor)).toBe(false);
  });
});
