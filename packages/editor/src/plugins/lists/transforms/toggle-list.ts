import { Editor, Location } from 'slate';

import { setListType } from './set-list-type';
import { unwrapList } from './unwrap-list';
import { wrapInList } from './wrap-in-list';

import { isElementType } from '../../../utils';
import { getSelectedLists } from '../checks';

/**
 * Wraps the blocks within the location into a list of the given type.
 *
 * When the location already sits in lists of that type they are unwrapped, otherwise they are
 * switched to it. Only the lists the location sits in are considered, so toggling inside a nested
 * list leaves the list around it alone.
 */
export const toggleList = (editor: Editor, type: string, at?: Location) => {
  const location = at ?? editor.selection;

  if (!location) {
    return;
  }

  const lists = getSelectedLists(editor, location);

  if (lists.length) {
    const isActive = lists.every(([list]) => {
      return isElementType(list, type);
    });

    if (isActive) {
      unwrapList(editor, at);
    } else {
      setListType(editor, type, location);
    }

    return;
  }

  wrapInList(editor, type, location);
};
