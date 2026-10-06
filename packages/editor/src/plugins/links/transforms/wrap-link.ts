import { Editor, Range } from 'slate';

import { unwrapLink } from './unwrap-link';

import { createLinkNode, getLink } from '../checks';

/**
 * Wraps the given range into a link node, defaulting to the current selection. A collapsed
 * selection gets a link whose text is the url itself.
 */
export const wrapLink = (editor: Editor, url: string, at?: Range) => {
  if (at) {
    editor.wrapNodes(createLinkNode(editor, { children: [], url }), { at, split: true });
    return;
  }

  if (getLink(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = !!selection && Range.isCollapsed(selection);
  const link = createLinkNode(editor, { children: isCollapsed ? [{ text: url }] : [], url });

  if (isCollapsed) {
    editor.insertNodes(link);
  } else {
    editor.wrapNodes(link, { split: true });
    editor.collapse({ edge: 'end' });
  }
};
