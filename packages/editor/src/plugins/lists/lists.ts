import { ListsSchema } from './lists.types';

import { Editor } from 'slate';

import * as Registry from './lists.registry';

export const withLists = (schema: ListsSchema) => (editor: Editor) => {
  Registry.register(editor, schema);

  return editor;
};
