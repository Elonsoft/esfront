import { KeyboardEvent, KeyboardEventHandler } from 'react';

import { Editor, Element, Node, Transforms } from 'slate';

import { ListsEditor } from './lists.editor';

export const onListsKeyDown = (editor: Editor, func: KeyboardEventHandler<HTMLElement>) => {
  return (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      const listItemsInSelection = ListsEditor.getListItems(editor);

      if (listItemsInSelection.length > 0) {
        console.log('split list item');
        event.preventDefault();
        return ListsEditor.splitListItem(editor);
      }
    }

    func(event);
  };
};
