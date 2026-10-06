import { Editor, Point, Range } from 'slate';

import { isLinkMatches } from '../checks';

// `unwrapLink` splits a link node whenever the selection covers part of it and restarts, so the
// loop below is bounded to keep a transform that fails to make progress from hanging the editor.
const MAX_UNWRAP_ITERATIONS = 1000;

/**
 * Removes the links the current selection covers, keeping the text they held.
 *
 * A selection covering only part of a link splits it first, so that the part outside the selection
 * stays a link.
 */
export const unwrapLink = (editor: Editor) => {
  const { selection: initialSelection } = editor;

  if (!initialSelection) {
    return;
  }

  if (Range.isCollapsed(initialSelection)) {
    editor.unwrapNodes({
      match: (node) => {
        return isLinkMatches(editor, node);
      },
    });

    return;
  }

  for (let iteration = 0; iteration < MAX_UNWRAP_ITERATIONS; iteration++) {
    const { selection: editorSelection } = editor;

    if (!editorSelection) {
      return;
    }

    const matches = Array.from(
      editor.nodes({
        at: Editor.unhangRange(editor, editorSelection),
        match: (node) => {
          return isLinkMatches(editor, node);
        },
      })
    );

    const match = matches[0];

    if (!match) {
      return;
    }

    const selection = Range.isForward(editorSelection)
      ? editorSelection
      : { anchor: editorSelection.focus, focus: editorSelection.anchor };

    const range = { anchor: Editor.start(editor, match[1]), focus: Editor.end(editor, match[1]) };
    const intersection = Range.intersection(range, selection);

    if (!intersection) {
      return;
    }

    if (Point.equals(selection.focus, range.anchor) || Point.equals(selection.anchor, range.focus)) {
      return;
    }

    if (Range.equals(range, intersection)) {
      editor.unwrapNodes({
        at: range,
        match: (node) => {
          return isLinkMatches(editor, node);
        },
      });

      if (matches.length === 1) {
        return;
      }

      continue;
    }

    // The selection covers part of the link, so it is split and the loop retries on the part
    // that now lines up with the selection.
    if (!Point.equals(range.anchor, intersection.anchor)) {
      editor.splitNodes({
        at: { anchor: intersection.anchor, focus: intersection.anchor },
        match: (node) => {
          return isLinkMatches(editor, node);
        },
      });

      continue;
    }

    if (!Point.equals(range.focus, intersection.focus)) {
      editor.splitNodes({
        at: { anchor: intersection.focus, focus: intersection.focus },
        match: (node) => {
          return isLinkMatches(editor, node);
        },
      });

      continue;
    }

    // Neither branch above could make progress, so there is nothing left to unwrap.
    return;
  }
};
