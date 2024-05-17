import { BaseSchema } from './base.types';

import { Editor } from 'slate';

import * as Registry from './base.registry';

export const withBase = (schema: BaseSchema) => (editor: Editor) => {
  Registry.register(editor, schema);

  return editor;
};
