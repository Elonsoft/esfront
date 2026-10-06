import { EntitiesOptions } from './entities.types';

import { Editor } from 'slate';

const EDITOR_ENTITIES_OPTIONS = new WeakMap<Editor, EntitiesOptions<never>>();

export function register<T>(editor: Editor, options: EntitiesOptions<T>): void {
  EDITOR_ENTITIES_OPTIONS.set(editor, options as EntitiesOptions<never>);
}

export function unregister(editor: Editor): void {
  EDITOR_ENTITIES_OPTIONS.delete(editor);
}

export function has(editor: Editor) {
  return EDITOR_ENTITIES_OPTIONS.has(editor);
}

export function get<T>(editor: Editor): EntitiesOptions<T> {
  const options = EDITOR_ENTITIES_OPTIONS.get(editor);

  if (!options) {
    throw new Error(
      'This editor instance does not have an EntitiesSchema associated. Make sure you initialize it with withEntities() before using EntitiesEditor functionality.'
    );
  }

  return options as EntitiesOptions<T>;
}
