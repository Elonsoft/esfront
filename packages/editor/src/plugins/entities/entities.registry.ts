import { Editor } from 'slate';

import type { EntitiesOptions } from './entities.types';

import { createSchemaRegistry } from '../../utils';

// The payload type cannot be stored, because one registry holds the options of every editor and each of
// them may have been given a different one. It is erased on the way in and restored on the way out, so
// the generics below are the whole reason this is not the plain registry the other plugins use.
const registry = createSchemaRegistry<EntitiesOptions<never>>({ schema: 'Entities' });

export const { unregister, has } = registry;

export function register<T>(editor: Editor, options: EntitiesOptions<T>): void {
  registry.register(editor, options as EntitiesOptions<never>);
}

export function get<T>(editor: Editor): EntitiesOptions<T> {
  return registry.get(editor) as EntitiesOptions<T>;
}
