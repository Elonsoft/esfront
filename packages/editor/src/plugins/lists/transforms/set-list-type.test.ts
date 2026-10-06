import { setListType } from './set-list-type';

import { createTestEditor, cursor, ElementType, li, ol, p, point, range, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('setListType', () => {
  it('changes the type of the list the cursor is in', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 0, 0, 0]));

    setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'), li('two'))]);
  });

  it('leaves the sublists of the changed list alone', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))), li('two'))], cursor([0, 0, 0, 0]));

    setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one', ul(li('nested'))), li('two'))]);
  });

  it('changes only the nested list when the cursor is in one', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one', ol(li('nested'))))]);
  });

  it('changes the list of every selected item', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 3)));

    setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'), li('two'))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([p('one')]);
  });
});
