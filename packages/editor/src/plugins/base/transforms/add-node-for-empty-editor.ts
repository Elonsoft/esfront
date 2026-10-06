import { Editor } from 'slate';

import { createDefaultTextNode } from '../checks';

/**
 * Puts a default text node into a document that has no blocks left, so that there is always somewhere
 * to place the caret.
 */
export const addNodeForEmptyEditor = (editor: Editor) => {
  if (Editor.last(editor, [])[1].length === 0) {
    editor.insertNodes(createDefaultTextNode(editor));
  }
};
