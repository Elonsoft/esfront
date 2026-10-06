import { Editor } from 'slate';

import { createTestEditor, ElementType, li, lic, ol, p, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

const normalize = (children: Parameters<typeof createTestEditor>[0]) => {
  const editor = createTestEditor(children);

  Editor.normalize(editor, { force: true });

  return editor.children;
};

describe('withListsNormalization', () => {
  it('leaves a valid document alone', () => {
    expect(normalize([ul(li('one', ul(li('nested'))), li('two')), p('after')])).toEqual([
      ul(li('one', ul(li('nested'))), li('two')),
      p('after'),
    ]);
  });

  it('wraps a stray child of a list into a list item', () => {
    expect(normalize([ul(p('one'))])).toEqual([ul(li('one'))]);
  });

  it('removes an empty list', () => {
    expect(normalize([ul(), p('one')])).toEqual([p('one')]);
  });

  it('gives a list item without children its text node', () => {
    expect(normalize([ul({ type: ElementType.LIST_ITEM, children: [] })])).toEqual([ul(li())]);
  });

  it('converts the first child of a list item into its text node', () => {
    expect(normalize([ul({ type: ElementType.LIST_ITEM, children: [p('one')] })])).toEqual([ul(li('one'))]);
  });

  it('turns a list item outside a list into a text block', () => {
    expect(normalize([li('one')])).toEqual([p('one')]);
  });

  it('turns a list item text outside a list item into a text block', () => {
    expect(normalize([lic('one')])).toEqual([p('one')]);
  });

  it('merges two adjacent lists of the same type', () => {
    expect(normalize([ul(li('one')), ul(li('two'))])).toEqual([ul(li('one'), li('two'))]);
  });

  it('keeps two adjacent lists of different types apart', () => {
    expect(normalize([ul(li('one')), ol(li('two'))])).toEqual([ul(li('one')), ol(li('two'))]);
  });

  it('moves a list nested directly in a list into the previous list item', () => {
    expect(normalize([ul(li('one'), ul(li('nested')))])).toEqual([ul(li('one', ul(li('nested'))))]);
  });

  it('gives a list item whose first child is a list the text node it is missing', () => {
    expect(normalize([ul({ type: ElementType.LIST_ITEM, children: [ul(li('nested'))] })])).toEqual([
      ul(li('', ul(li('nested')))),
    ]);
  });

  it('merges a second nested list into the first', () => {
    const listItem = {
      type: ElementType.LIST_ITEM,
      children: [lic('one'), ul(li('first')), ul(li('second'))],
    };

    expect(normalize([ul(listItem)])).toEqual([ul(li('one', ul(li('first'), li('second'))))]);
  });

  it('moves a list out of a list item text', () => {
    const listItem = {
      type: ElementType.LIST_ITEM,
      children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'one' }, ul(li('nested'))] }],
    };

    expect(normalize([ul(listItem)])).toEqual([ul(li('one', ul(li('nested'))))]);
  });

  it('flattens a block that ended up inside a list item text', () => {
    const listItem = {
      type: ElementType.LIST_ITEM,
      children: [{ type: ElementType.LIST_ITEM_TEXT, children: [p('one')] }],
    };

    expect(normalize([ul(listItem)])).toEqual([ul(li('one'))]);
  });
});
