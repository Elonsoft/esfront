import { wrapInList } from './wrap-in-list';

import { createTestEditor, cursor, ElementType, h2, li, lic, p, point, range, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('wrapInList', () => {
  it('wraps the paragraph the cursor is in', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('wraps every selected block into a single list', () => {
    const editor = createTestEditor([p('one'), p('two')], range(point([0, 0], 0), point([1, 0], 3)));

    wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  it('wraps any block the schema reports as convertible', () => {
    const editor = createTestEditor([h2('one')], cursor([0, 0]));

    wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('leaves a block the schema does not report as convertible alone', () => {
    const editor = createTestEditor(
      [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'one' }] }],
      cursor([0, 0])
    );

    wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([lic('one')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([p('one')]);
  });
});
