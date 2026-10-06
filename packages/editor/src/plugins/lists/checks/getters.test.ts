import { isAtEmptyListItem, isAtStartOfListItem, isDeleteBackwardAllowed, isInList } from './getters';

import { createTestEditor, cursor, li, p, point, range, ul } from '../../../testing';

import { describe, expect, it } from 'vitest';

describe('isInList', () => {
  it('is true inside a list', () => {
    expect(isInList(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0])))).toBe(true);
  });

  it('is false outside a list', () => {
    expect(isInList(createTestEditor([p('one')], cursor([0, 0])))).toBe(false);
  });
});

describe('isAtStartOfListItem', () => {
  it('is true at offset zero of the list item text', () => {
    expect(isAtStartOfListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0)))).toBe(true);
  });

  it('is false further into the text', () => {
    expect(isAtStartOfListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 1)))).toBe(false);
  });
});

describe('isAtEmptyListItem', () => {
  it('is true on a list item with no text', () => {
    expect(isAtEmptyListItem(createTestEditor([ul(li())], cursor([0, 0, 0, 0])))).toBe(true);
  });

  it('is false on a list item with text', () => {
    expect(isAtEmptyListItem(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0])))).toBe(false);
  });
});

describe('isDeleteBackwardAllowed', () => {
  // Merging backwards from here would pull the list item text into the enclosing list.
  it('is false at the start of a list item', () => {
    expect(isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 0)))).toBe(false);
  });

  it('is true further into a list item', () => {
    expect(isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0], 2)))).toBe(true);
  });

  it('is true outside a list', () => {
    expect(isDeleteBackwardAllowed(createTestEditor([p('one')], cursor([0, 0], 0)))).toBe(true);
  });

  it('is true for an expanded selection, which slate deletes as a range', () => {
    const editor = createTestEditor([ul(li('one'))], range(point([0, 0, 0, 0], 0), point([0, 0, 0, 0], 3)));

    expect(isDeleteBackwardAllowed(editor)).toBe(true);
  });

  it('is false without a selection', () => {
    expect(isDeleteBackwardAllowed(createTestEditor([ul(li('one'))], null))).toBe(false);
  });
});
