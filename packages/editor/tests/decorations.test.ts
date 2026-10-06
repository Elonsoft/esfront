import { Editor, Range } from 'slate';

import { createPlaceholderDecorate } from '../src';
import { createTestEditor, cursor, ElementType, h2, li, p, point, range, ul } from '../src/testing';

import { describe, expect, it } from 'vitest';

const placeholderOf = (ranges: Range[]) => {
  return ranges.map((decoration) => (decoration as Range & { placeholder?: string }).placeholder);
};

const decorateAll = (editor: Editor) => {
  const decorate = createPlaceholderDecorate(editor, {
    getPlaceholder: ({ node, isCursorInside }) => {
      if (node.type === ElementType.PARAGRAPH) {
        return isCursorInside ? 'Type something' : undefined;
      }

      return node.type;
    },
  });

  return Array.from(editor.nodes({ at: [] })).flatMap((entry) => placeholderOf(decorate(entry)));
};

describe('createPlaceholderDecorate', () => {
  it('marks an empty block', () => {
    expect(decorateAll(createTestEditor([h2('')], null))).toEqual([ElementType.H2]);
  });

  it('leaves a block with text alone', () => {
    expect(decorateAll(createTestEditor([h2('one')], null))).toEqual([]);
  });

  // The caret flag is what keeps a prompt on every paragraph of a long document from showing at once.
  it('marks a paragraph only while the caret is inside it', () => {
    expect(decorateAll(createTestEditor([p('')], cursor([0, 0])))).toEqual(['Type something']);
    expect(decorateAll(createTestEditor([p('')], null))).toEqual([]);
  });

  it('reports the caret as outside when the selection is expanded', () => {
    const editor = createTestEditor([p(''), p('')], range(point([0, 0], 0), point([1, 0], 0)));

    expect(decorateAll(editor)).toEqual([]);
  });

  it('marks an empty list item text', () => {
    expect(decorateAll(createTestEditor([ul(li(''))], null))).toEqual([ElementType.LIST_ITEM_TEXT]);
  });

  it('puts the decoration at the start of the block', () => {
    const editor = createTestEditor([h2('')], null);
    const decorate = createPlaceholderDecorate(editor, { getPlaceholder: () => 'empty' });

    expect(decorate([editor.children[0], [0]])).toEqual([
      { anchor: { path: [0], offset: 0 }, focus: { path: [0], offset: 0 }, placeholder: 'empty' },
    ]);
  });

  it('uses the configured key', () => {
    const editor = createTestEditor([h2('')], null);
    const decorate = createPlaceholderDecorate(editor, { getPlaceholder: () => 'empty', key: 'prompt' });

    expect(decorate([editor.children[0], [0]])[0]).toHaveProperty('prompt', 'empty');
  });
});
