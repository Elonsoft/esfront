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
