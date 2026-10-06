import { Editor, Range, Text } from 'slate';

import { isValidHttpUrl } from './is-valid-http-url';

import { LinksEditor } from '../links.editor';

const WORD_BEFORE_CURSOR = /(\S+)\s$/;

/**
 * Turns the word preceding the cursor into a link when it is a valid url.
 *
 * Called once whitespace has been typed rather than on every keystroke, so that a url is linked
 * when it is complete instead of while it is still being written.
 */
export const linkifyBeforeCursor = (editor: Editor) => {
  const { selection } = editor;

  if (!selection || !Range.isCollapsed(selection) || LinksEditor.getLink(editor)) {
    return;
  }

  const [leaf, path] = Editor.leaf(editor, selection);

  if (!Text.isText(leaf)) {
    return;
  }

  const match = WORD_BEFORE_CURSOR.exec(leaf.text.slice(0, selection.anchor.offset));

  if (!match || !isValidHttpUrl(match[1])) {
    return;
  }

  const offset = selection.anchor.offset - match[0].length;

  LinksEditor.wrapLink(editor, match[1], {
    anchor: { path, offset },
    focus: { path, offset: offset + match[1].length },
  });
};
