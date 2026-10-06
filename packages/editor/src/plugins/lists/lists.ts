import { Editor } from 'slate';

import * as Registry from './lists.registry';
import type { ListsSchema } from './lists.types';
import { withListsNormalization } from './normalizations';

/**
 * Associates a {@link ListsSchema} with the editor, which tells the lists helpers which node types
 * make up a list. On its own it enforces nothing.
 */
export const withListsSchema =
  (schema: ListsSchema) =>
  <T extends Editor>(editor: T) => {
    Registry.register(editor, schema);

    return editor;
  };

/**
 * Associates a {@link ListsSchema} with the editor and enables the normalizations that keep the list
 * structure valid.
 *
 * Use {@link withListsSchema} and {@link withListsNormalization} separately only to order the
 * normalizations differently against another plugin's.
 */
export const withLists =
  (schema: ListsSchema) =>
  <T extends Editor>(editor: T) => {
    return withListsNormalization(withListsSchema(schema)(editor));
  };
