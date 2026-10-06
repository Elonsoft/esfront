import { BASE_SCHEMA, ElementType, point, range } from '../../testing';

import { createEditor, Descendant, Editor, Range } from 'slate';

import { withBase } from './base';
import { BaseEditor } from './base.editor';

import { describe, expect, it } from 'vitest';

const createMarksEditor = (children: Descendant[], selection: Range): Editor => {
  const editor = withBase(BASE_SCHEMA)(createEditor());

  editor.children = children;
  editor.selection = selection;

  return editor;
};

const bold = (text: string) => {
  return { type: ElementType.PARAGRAPH, children: [{ text, bold: true }] } as Descendant;
};

const plain = (text: string) => {
  return { type: ElementType.PARAGRAPH, children: [{ text }] } as Descendant;
};

const coloured = (text: string, color: string) => {
  return { type: ElementType.PARAGRAPH, children: [{ text, color }] } as Descendant;
};

const whole = (text: string) => {
  return range(point([0, 0], 0), point([0, 0], text.length));
};

describe('isMarkActive', () => {
  // `editor.marks` is the set of marks pending for the next insertion and is null most of the time,
  // so reading it instead of `Editor.marks(editor)` reports every mark as inactive.
  it('is true over text that carries the mark', () => {
    const editor = createMarksEditor([bold('one')], range(point([0, 0], 0), point([0, 0], 3)));

    expect(BaseEditor.isMarkActive(editor, 'bold')).toBe(true);
  });

  it('is true with the cursor inside text that carries the mark', () => {
    const editor = createMarksEditor([bold('one')], range(point([0, 0], 1), point([0, 0], 1)));

    expect(BaseEditor.isMarkActive(editor, 'bold')).toBe(true);
  });

  it('is false over text without the mark', () => {
    const editor = createMarksEditor([plain('one')], range(point([0, 0], 0), point([0, 0], 3)));

    expect(BaseEditor.isMarkActive(editor, 'bold')).toBe(false);
  });
});

describe('toggleMark', () => {
  it('adds the mark when it is not active', () => {
    const editor = createMarksEditor([plain('one')], range(point([0, 0], 0), point([0, 0], 3)));

    BaseEditor.toggleMark(editor, 'bold');

    expect(editor.children).toEqual([bold('one')]);
  });

  // Reporting the mark as inactive made this branch unreachable, so a mark could never be removed.
  it('removes the mark when it is active', () => {
    const editor = createMarksEditor([bold('one')], range(point([0, 0], 0), point([0, 0], 3)));

    BaseEditor.toggleMark(editor, 'bold');

    expect(editor.children).toEqual([plain('one')]);
  });

  it('round trips', () => {
    const editor = createMarksEditor([plain('one')], range(point([0, 0], 0), point([0, 0], 3)));

    BaseEditor.toggleMark(editor, 'bold');
    BaseEditor.toggleMark(editor, 'bold');

    expect(editor.children).toEqual([plain('one')]);
  });
});

// A mark may hold a value rather than only be on or off, which a hard coded `=== true` cannot express.
describe('marks that hold a value', () => {
  it('reads the value back', () => {
    const editor = createMarksEditor([coloured('one', 'red')], whole('one'));

    expect(BaseEditor.getMarkValue(editor, 'color')).toBe('red');
  });

  it('is undefined when the mark is absent', () => {
    const editor = createMarksEditor([plain('one')], whole('one'));

    expect(BaseEditor.getMarkValue(editor, 'color')).toBeUndefined();
  });

  it('is active only for the value it carries', () => {
    const editor = createMarksEditor([coloured('one', 'red')], whole('one'));

    expect(BaseEditor.isMarkActive(editor, 'color', 'red')).toBe(true);
    expect(BaseEditor.isMarkActive(editor, 'color', 'blue')).toBe(false);
  });

  it('sets the value', () => {
    const editor = createMarksEditor([plain('one')], whole('one'));

    BaseEditor.setMark(editor, 'color', 'red');

    expect(editor.children).toEqual([coloured('one', 'red')]);
  });

  it('switches from one value to another', () => {
    const editor = createMarksEditor([coloured('one', 'red')], whole('one'));

    BaseEditor.toggleMark(editor, 'color', 'blue');

    expect(editor.children).toEqual([coloured('one', 'blue')]);
  });

  it('clears the value when the same one is toggled again', () => {
    const editor = createMarksEditor([coloured('one', 'red')], whole('one'));

    BaseEditor.toggleMark(editor, 'color', 'red');

    expect(editor.children).toEqual([plain('one')]);
  });
});

describe('block helpers at a location', () => {
  it('reads a block the selection is not in', () => {
    const editor = createMarksEditor([plain('one'), bold('two')], whole('one'));

    expect(BaseEditor.isBlockActive(editor, ElementType.PARAGRAPH, [1])).toBe(true);
    expect(BaseEditor.getTextBlocks(editor, [1]).map(([, path]) => path)).toEqual([[1]]);
  });

  it('converts a block the selection is not in', () => {
    const editor = createMarksEditor([plain('one'), plain('two')], whole('one'));

    BaseEditor.toggleBlock(editor, ElementType.H2, [1]);

    expect(editor.children).toEqual([plain('one'), { type: ElementType.H2, children: [{ text: 'two' }] }]);
  });
});
