import { NodeEntry } from 'slate';

import { ListsEditor, pickSubtreesRoots } from '../src';
import { createBaseTestEditor, createTestEditor, cursor, ElementType, li, p, point, range, ul } from '../src/testing';

import { describe, expect, it } from 'vitest';

describe('ListsEditor.isInList', () => {
  it('is true inside a list', () => {
    expect(ListsEditor.isInList(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0])))).toBe(true);
  });

  it('is false outside a list', () => {
    expect(ListsEditor.isInList(createTestEditor([p('one')], cursor([0, 0])))).toBe(false);
  });
});

describe('ListsEditor.isAtStartOfListItem', () => {
  it('is true at offset zero of the list item text', () => {
    expect(ListsEditor.isAtStartOfListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0)))).toBe(true);
  });

  it('is false further into the text', () => {
    expect(ListsEditor.isAtStartOfListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 1)))).toBe(false);
  });
});

describe('ListsEditor.isAtEmptyListItem', () => {
  it('is true on a list item with no text', () => {
    expect(ListsEditor.isAtEmptyListItem(createTestEditor([ul(li())], cursor([0, 0, 0, 0])))).toBe(true);
  });

  it('is false on a list item with text', () => {
    expect(ListsEditor.isAtEmptyListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0])))).toBe(false);
  });
});

describe('ListsEditor.isDeleteBackwardAllowed', () => {
  // Merging backwards from here would pull the list item text into the enclosing list.
  it('is false at the start of a list item', () => {
    expect(ListsEditor.isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0)))).toBe(false);
  });

  it('is true further into a list item', () => {
    expect(ListsEditor.isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 2)))).toBe(true);
  });

  it('is true outside a list', () => {
    expect(ListsEditor.isDeleteBackwardAllowed(createTestEditor([p('one')], cursor([0, 0], 0)))).toBe(true);
  });

  it('is true for an expanded selection, which slate deletes as a range', () => {
    const editor = createTestEditor([ul(li('one'))], range(point([0, 0, 0, 0], 0), point([0, 0, 0, 0], 3)));

    expect(ListsEditor.isDeleteBackwardAllowed(editor)).toBe(true);
  });

  it('is false without a selection', () => {
    expect(ListsEditor.isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], null))).toBe(false);
  });
});

// A lists helper called on an editor without `withLists` throws, naming the plugin to add. That is the
// contract for a direct call: a missing plugin is a wiring mistake, and failing loudly points at it.
// The exceptions are documented alongside the pieces that have to tolerate it — `onListsKeyDown`,
// which is one link of a handler chain, and `BlocksEditor`, which only needs lists for list types.
describe('lists helpers without the plugin', () => {
  const message = /withLists\(\)/;

  it('throws from a check', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => ListsEditor.isListNode(editor, editor.children[0])).toThrow(message);
    expect(() => ListsEditor.getLists(editor)).toThrow(message);
  });

  it('throws from a transform', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => ListsEditor.toggleList(editor, ElementType.UNORDERED_LIST)).toThrow(message);
    expect(() => ListsEditor.wrapInList(editor, ElementType.UNORDERED_LIST)).toThrow(message);
    expect(() => ListsEditor.unwrapList(editor)).toThrow(message);
  });
});

const entry = (path: number[]): NodeEntry => [li(), path];

describe('pickSubtreesRoots', () => {
  it('drops entries nested inside another entry', () => {
    const outer = entry([0, 1]);
    const inner = entry([0, 1, 1, 0]);

    expect(pickSubtreesRoots([outer, inner])).toEqual([outer]);
  });

  it('keeps siblings', () => {
    const first = entry([0, 0]);
    const second = entry([0, 1]);

    expect(pickSubtreesRoots([first, second])).toEqual([first, second]);
  });

  it('keeps an entry whose path merely starts the same', () => {
    const first = entry([0, 1]);
    const second = entry([0, 10]);

    expect(pickSubtreesRoots([first, second])).toEqual([first, second]);
  });
});
