import { Editor, Node } from 'slate';

import { getEntitiesOptions } from '../entities.options';
import * as Registry from '../entities.registry';
import type { EntitiesSchema, EntityStore } from '../entities.types';

/**
 * Checks whether the editor was initialized with `withEntities`.
 */
export const isEntitiesEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

/**
 * Returns the entities schema the editor was initialized with, or `undefined` when it has none.
 */
export const getEntitiesSchema = (editor: Editor): EntitiesSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor).schema : undefined;
};

/**
 * Returns the store the editor was initialized with.
 *
 * The value type is whatever the caller declares: the registry holds one store per editor without
 * knowing its shape, so the type cannot be recovered from it.
 */
export const getEntityStore = <T>(editor: Editor): EntityStore<T> => {
  return getEntitiesOptions(editor).store as EntityStore<T>;
};

/**
 * Returns the predicate deciding whether a dropped or pasted file becomes an entity. Every file is
 * accepted when the editor was given none.
 */
export const getEntityAccept = (editor: Editor) => {
  return getEntitiesOptions(editor).accept ?? (() => true);
};

// Schema proxies

/**
 * Checks whether the node is an entity, as the schema defines one.
 */
export const isEntityNode = (editor: Editor, node: Node) => {
  return getEntitiesOptions(editor).schema.isEntityNode(node);
};

/**
 * Builds an entity node carrying the given id, which is what ties it to its state in the store.
 */
export const createEntityNode = (editor: Editor, entityId: string) => {
  return getEntitiesOptions(editor).schema.createEntityNode(entityId);
};
