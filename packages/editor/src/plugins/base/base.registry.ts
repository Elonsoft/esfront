import { BaseSchema } from './base.types';

import { Editor } from 'slate';

const EDITOR_BASE_SCHEMA = new WeakMap<Editor, BaseSchema>();

export function register(editor: Editor, schema: BaseSchema): void {
  EDITOR_BASE_SCHEMA.set(editor, schema);
}

export function unregister(editor: Editor): void {
  EDITOR_BASE_SCHEMA.delete(editor);
}

export function has(editor: Editor) {
  return EDITOR_BASE_SCHEMA.has(editor);
}

export function get(editor: Editor): BaseSchema {
  const schema = EDITOR_BASE_SCHEMA.get(editor);

  if (!schema) {
    throw new Error(
      'This editor instance does not have a BaseSchema associated. Make sure you initialize it with withBase() before using BaseEditor functionality.'
    );
  }

  return schema;
}
