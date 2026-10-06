import { Editor, Location } from 'slate';

import { setElementType } from '../../../utils';
import { getSelectedLists } from '../checks';

/**
 * Changes the type of the lists the location sits in.
 *
 * Only those lists change. The list around a nested one and the sublists hanging off it keep their
 * own types, so a document can mix them.
 */
export const setListType = (editor: Editor, type: string, at: Location | null = editor.selection) => {
  const lists = getSelectedLists(editor, at);

  if (!lists.length) {
    return;
  }

  editor.withoutNormalizing(() => {
    for (const [, listPath] of lists) {
      setElementType(editor, type, { at: listPath });
    }
  });
};
