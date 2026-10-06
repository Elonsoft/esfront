import { Editor } from 'slate';

import { createLinkNode } from '../checks';

/**
 * Inserts a link whose text is given separately from its url, and selects it.
 */
export const insertLinkText = (editor: Editor, url: string, text: string) => {
  const link = createLinkNode(editor, { children: [{ text }], url });
  editor.insertNodes(link, { select: true });
};
