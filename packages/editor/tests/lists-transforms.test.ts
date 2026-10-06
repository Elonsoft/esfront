import { ListsEditor } from '../src';
import { createTestEditor, cursor, ElementType, h2, li, lic, ol, p, point, range, ul } from '../src/testing';

import { describe, expect, it } from 'vitest';

describe('ListsEditor.wrapInList', () => {
  it('wraps the paragraph the cursor is in', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('wraps every selected block into a single list', () => {
    const editor = createTestEditor([p('one'), p('two')], range(point([0, 0], 0), point([1, 0], 3)));

    ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  it('wraps any block the schema reports as convertible', () => {
    const editor = createTestEditor([h2('one')], cursor([0, 0]));

    ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('leaves a block the schema does not report as convertible alone', () => {
    const editor = createTestEditor(
      [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'one' }] }],
      cursor([0, 0])
    );

    ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([lic('one')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([p('one')]);
  });
});

describe('ListsEditor.unwrapList', () => {
  it('lifts the list item the cursor is in out of the list', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    ListsEditor.unwrapList(editor);

    expect(editor.children).toEqual([p('one')]);
  });

  it('lifts every selected list item out of the list', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 3)));

    ListsEditor.unwrapList(editor);

    expect(editor.children).toEqual([p('one'), p('two')]);
  });

  it('lifts a nested list item all the way out', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    ListsEditor.unwrapList(editor);

    expect(editor.children).toEqual([ul(li('one')), p('nested')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    ListsEditor.unwrapList(editor);

    expect(editor.children).toEqual([ul(li('one'))]);
  });
});

// The transform lifts one item per pass, so a location passed explicitly has to survive the document
// changing underneath it. A plain path stayed a valid path while no longer denoting the list, which
// ended the loop after the first item.
describe('ListsEditor.unwrapList at an explicit location', () => {
  it('lifts every item of the list at a path', () => {
    const editor = createTestEditor([ul(li('a'), li('b'), li('c'))], null);

    ListsEditor.unwrapList(editor, [0]);

    expect(editor.children).toEqual([p('a'), p('b'), p('c')]);
  });

  it('lifts a nested list out along with its parent items', () => {
    const editor = createTestEditor([ul(li('a', ul(li('nested'))), li('b'))], null);

    ListsEditor.unwrapList(editor, [0]);

    expect(editor.children).toEqual([p('a'), p('nested'), p('b')]);
  });

  it('leaves the blocks around the list alone', () => {
    const editor = createTestEditor([p('before'), ul(li('a'), li('b')), p('after')], null);

    ListsEditor.unwrapList(editor, [1]);

    expect(editor.children).toEqual([p('before'), p('a'), p('b'), p('after')]);
  });

  it('lifts the items of a range spanning the whole list', () => {
    const editor = createTestEditor([ul(li('a'), li('b'))], null);

    ListsEditor.unwrapList(editor, range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 1)));

    expect(editor.children).toEqual([p('a'), p('b')]);
  });
});

describe('ListsEditor.setListType', () => {
  it('changes the type of the list the cursor is in', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 0, 0, 0]));

    ListsEditor.setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'), li('two'))]);
  });

  it('leaves the sublists of the changed list alone', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))), li('two'))], cursor([0, 0, 0, 0]));

    ListsEditor.setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one', ul(li('nested'))), li('two'))]);
  });

  it('changes only the nested list when the cursor is in one', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    ListsEditor.setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one', ol(li('nested'))))]);
  });

  it('changes the list of every selected item', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], range(point([0, 0, 0, 0], 0), point([0, 1, 0, 0], 3)));

    ListsEditor.setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'), li('two'))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    ListsEditor.setListType(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([p('one')]);
  });
});

describe('ListsEditor.splitListItem', () => {
  it('adds a sibling list item when the cursor is at the end', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 3));

    expect(ListsEditor.splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li())]);
  });

  it('adds a list item before when the cursor is at the start', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0));

    expect(ListsEditor.splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li(), li('one'))]);
  });

  it('splits the text when the cursor is in the middle', () => {
    const editor = createTestEditor([ul(li('onetwo'))], cursor([0, 0, 0, 0], 3));

    expect(ListsEditor.splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  // The fork took the last of every matching list item, which in a nested list is the wrong one.
  it('splits the innermost list item of a nested list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0], 6));

    expect(ListsEditor.splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'), li())))]);
  });

  it('moves a nested list to the second half of the split', () => {
    const editor = createTestEditor([ul(li('onetwo', ul(li('nested'))))], cursor([0, 0, 0, 0], 3));

    expect(ListsEditor.splitListItem(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('two', ul(li('nested'))))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    expect(ListsEditor.splitListItem(editor)).toBe(false);
  });
});

describe('ListsEditor.increaseDepth', () => {
  it('nests a list item under its previous sibling', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(ListsEditor.increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two'))))]);
  });

  it('appends to an existing nested list', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))), li('two'))], cursor([0, 1, 0, 0]));

    expect(ListsEditor.increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('nested'), li('two'))))]);
  });

  it('leaves the first list item of a list alone', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 0, 0, 0]));

    expect(ListsEditor.increaseDepth(editor)).toBe(false);
    expect(editor.children).toEqual([ul(li('one'), li('two'))]);
  });

  // Only the path based transform was ported, so a selection spanning several items moved one.
  it('nests every list item of an expanded selection', () => {
    const editor = createTestEditor(
      [ul(li('one'), li('two'), li('three'))],
      range(point([0, 1, 0, 0], 0), point([0, 2, 0, 0], 5))
    );

    expect(ListsEditor.increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two'), li('three'))))]);
  });

  // A selection across a nested list matches the outer item and the inner one; moving both would
  // move the same content twice.
  it('moves only the outermost list item of a nested selection', () => {
    const editor = createTestEditor(
      [ul(li('one'), li('two', ul(li('nested'))))],
      range(point([0, 1, 0, 0], 0), point([0, 1, 1, 0, 0, 0], 6))
    );

    expect(ListsEditor.increaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one', ul(li('two', ul(li('nested'))))))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([ul(li('one'))], null);

    expect(ListsEditor.increaseDepth(editor)).toBe(false);
  });
});

describe('ListsEditor.decreaseDepth', () => {
  it('moves a nested list item up one level', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 1, 0, 0, 0]));

    expect(ListsEditor.decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one'), li('nested'))]);
  });

  it('lifts a list item of the outermost list out of the list', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));

    expect(ListsEditor.decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one')), p('two')]);
  });

  it('keeps the subsequent siblings below the item being lifted', () => {
    const editor = createTestEditor([ul(li('one'), li('two'), li('three'))], cursor([0, 1, 0, 0]));

    expect(ListsEditor.decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([ul(li('one')), p('two'), ul(li('three'))]);
  });

  // Promoting a sublist must not convert it: a document is free to nest one type inside the other.
  it('keeps the type of a sublist it promotes', () => {
    const editor = createTestEditor([ul(li('one', ol(li('nested'))))], cursor([0, 0, 0, 0]));

    expect(ListsEditor.decreaseDepth(editor)).toBe(true);
    expect(editor.children).toEqual([p('one'), ol(li('nested'))]);
  });

  it('does nothing outside a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    expect(ListsEditor.decreaseDepth(editor)).toBe(false);
    expect(editor.children).toEqual([p('one')]);
  });
});
