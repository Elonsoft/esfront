import { LinksSchema } from './links.types';

import { Editor } from 'slate';

const EDITOR_LINKS_SCHEMA = new WeakMap<Editor, LinksSchema>();

export function register(editor: Editor, schema: LinksSchema): void {
  EDITOR_LINKS_SCHEMA.set(editor, schema);
}

export function unregister(editor: Editor): void {
  EDITOR_LINKS_SCHEMA.delete(editor);
}

export function has(editor: Editor) {
  return EDITOR_LINKS_SCHEMA.has(editor);
}

export function get(editor: Editor): LinksSchema {
  const schema = EDITOR_LINKS_SCHEMA.get(editor);

  if (!schema) {
    throw new Error(
      'This editor instance does not have a LinksSchema associated. Make sure you initialize it with withLinks() before using LinksEditor functionality.'
    );
  }

  return schema;
}
