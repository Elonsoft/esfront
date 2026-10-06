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
