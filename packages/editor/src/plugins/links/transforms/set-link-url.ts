import { Editor, Element } from 'slate';

import { isLinkMatches } from '../checks';
import type { LinkProps } from '../links.types';

/**
 * Changes the url of the links the current selection covers, leaving their text alone.
 */
export const setLinkUrl = (editor: Editor, url: string) => {
  if (!editor.selection) {
    return;
  }

  editor.setNodes<Element & LinkProps>(
    { url },
    {
      match: (node) => {
        return isLinkMatches(editor, node);
      },
    }
  );
};
