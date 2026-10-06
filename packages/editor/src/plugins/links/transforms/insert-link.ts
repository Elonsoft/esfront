import { Editor } from 'slate';

import { wrapLink } from './wrap-link';

/**
 * Wraps the current selection into a link, when there is a selection to wrap.
 */
export const insertLink = (editor: Editor, url: string) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};
