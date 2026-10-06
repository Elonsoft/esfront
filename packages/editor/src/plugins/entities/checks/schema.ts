import { Editor, Node } from 'slate';

import * as Registry from '../entities.registry';
import type { EntitiesSchema, EntityStore } from '../entities.types';

const options = (editor: Editor) => {
  return Registry.get(editor);
};

export const isEntitiesEnabled = (editor: Editor) => {
  return Registry.has(editor);
};

export const getEntitiesSchema = (editor: Editor): EntitiesSchema | undefined => {
  return Registry.has(editor) ? Registry.get(editor).schema : undefined;
};

/**
 * Returns everything the editor was initialized with, which the upload queue needs in full rather than
 * one piece at a time.
 */
export const getEntitiesOptions = <TPayload>(editor: Editor) => {
  return Registry.get<TPayload>(editor);
};

/**
 * Returns the store the editor was initialized with.
 *
 * The value type is whatever the caller declares: the registry holds one store per editor without
 * knowing its shape, so the type cannot be recovered from it.
 */
export const getEntityStore = <T>(editor: Editor): EntityStore<T> => {
  return options(editor).store as EntityStore<T>;
};

/**
 * Returns the predicate deciding whether a dropped or pasted file becomes an entity. Every file is
 * accepted when the editor was given none.
 */
export const getEntityAccept = (editor: Editor) => {
  return options(editor).accept ?? (() => true);
};

// Schema proxies

export const isEntityNode = (editor: Editor, node: Node) => {
  return options(editor).schema.isEntityNode(node);
};

export const createEntityNode = (editor: Editor, entityId: string) => {
  return options(editor).schema.createEntityNode(entityId);
};

export const createUploadedProps = <TPayload>(editor: Editor, payload: TPayload) => {
  return Registry.get<TPayload>(editor).schema.createUploadedProps(payload);
};
