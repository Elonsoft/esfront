import { decreaseDepth } from './decrease-depth';

import { createTestEditor, cursor, li, ol, p, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('decreaseDepth', () => {
  it('moves a nested list item up one level', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    expect(decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('nested'))]);
  });

  it('lifts a list item of the outermost list out of the list', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one')), p('two')]);
  });

  it('keeps the subsequent siblings below the item being lifted', () => {
    const editor = createTestEditor([ul(li('one'), li('two'), li('three'))], cursor([0, 1, 0, 0]));

    expect(decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one')), p('two'), ul(li('three'))]);
  });

  // Promoting a sublist must not convert it: a document is free to nest one type inside the other.
  it('keeps the type of a sublist it promotes', () => {
    const editor = createTestEditor([ul(li('one', ol(li('nested'))))], cursor([0, 0, 0, 0]));

    expect(decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), ol(li('nested'))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    expect(decreaseDepth(editor)).toBe(false);
    expect(editor.children).toEqual([p('one')]);
  });
});
