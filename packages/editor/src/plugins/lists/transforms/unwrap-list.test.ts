import { unwrapList } from './unwrap-list';

import { createTestEditor, cursor, li, p, point, range, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('unwrapList', () => {
  it('lifts the list item the cursor is in out of the list', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    unwrapList(editor);

    expect(editor.children).toEqual([p('one')]);
  });

  it('lifts every selected list item out of the list', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 3)));

    unwrapList(editor);

    expect(editor.children).toEqual([p('one'), p('two')]);
  });

  it('lifts a nested list item all the way out', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    unwrapList(editor);

    expect(editor.children).toEqual([ul(li('one')), p('nested')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    unwrapList(editor);

    expect(editor.children).toEqual([ul(li('one'))]);
  });
});

// The transform lifts one item per pass, so a location passed explicitly has to survive the document
// changing underneath it. A plain path stayed a valid path while no longer denoting the list, which
// ended the loop after the first item.
describe('unwrapList at an explicit location', () => {
  it('lifts every item of the list at a path', () => {
    const editor = createTestEditor([ul(li('a'), li('b'), li('c'))], null);

    unwrapList(editor, [0]);

    expect(editor.children).toEqual([p('a'), p('b'), p('c')]);
  });

  it('lifts a nested list out along with its parent items', () => {
    const editor = createTestEditor([ul(li('a', ul(li('nested'))), li('b'))], null);

    unwrapList(editor, [0]);

    expect(editor.children).toEqual([p('a'), p('nested'), p('b')]);
  });

  it('leaves the blocks around the list alone', () => {
    const editor = createTestEditor([p('before'), ul(li('a'), li('b')), p('after')], null);

    unwrapList(editor, [1]);

    expect(editor.children).toEqual([p('before'), p('a'), p('b'), p('after')]);
  });

  it('lifts the items of a range spanning the whole list', () => {
    const editor = createTestEditor([ul(li('a'), li('b'))], null);

    unwrapList(editor, range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 1)));

    expect(editor.children).toEqual([p('a'), p('b')]);
  });
});
