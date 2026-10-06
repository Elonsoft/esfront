import { createBaseTestEditor, createTestEditor, cursor, ElementType, h2, li, ol, p, ul } from '../../testing';

import { setBlock } from './set-block';

import { describe, expect, it } from 'vitest';

describe('setBlock', () => {
  it('converts one text block to another', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([h2('one')]);
  });

  // A list is a structure a block gets wrapped in, not a type it can be set to.
  it('wraps a text block into a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));

    setBlock(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([ul(li('one'))]);
  });

  it('switches a list to the other type', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    setBlock(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one'))]);
  });

  it('lifts a list item out and converts it', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([h2('one')]);
  });

  it('lifts a list item out to the default text node', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));

    setBlock(editor, ElementType.PARAGRAPH);

    expect(editor.children).toEqual([p('one')]);
  });

  it('leaves the sublist of a converted list alone', () => {
    const editor = createTestEditor([ul(li('one', ul(li('nested'))))], cursor([0, 0, 0, 0]));

    setBlock(editor, ElementType.ORDERED_LIST);

    expect(editor.children).toEqual([ol(li('one', ul(li('nested'))))]);
  });

  it('converts the block at an explicit path', () => {
    const editor = createTestEditor([p('one'), p('two')], null);

    setBlock(editor, ElementType.H2, [1]);

    expect(editor.children).toEqual([p('one'), h2('two')]);
  });

  it('does nothing without a location', () => {
    const editor = createTestEditor([p('one')], null);

    setBlock(editor, ElementType.H2);

    expect(editor.children).toEqual([p('one')]);
  });
});

describe('setBlock without the lists plugin', () => {
  it('converts between text blocks as usual', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => setBlock(editor, ElementType.H2)).not.toThrow();
    expect(editor.children).toEqual([h2('one')]);
  });

  // Only the lists schema knows which types are lists, so without it a list type is just a string and
  // gets set literally, leaving a list whose child is text. Asking for a list needs `withLists`.
  it('sets a list type literally, which is not a usable list', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    setBlock(editor, ElementType.UNORDERED_LIST);

    expect(editor.children).toEqual([{ type: ElementType.UNORDERED_LIST, children: [{ text: 'one' }] }]);
  });
});
