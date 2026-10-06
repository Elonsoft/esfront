import { Editor } from 'slate';

import { UploadedFile } from './types';

import { EntitiesEditor, EntityState } from '../plugins/entities';

/** Builds an {@link EntityState}, defaulting to the shape an entity has right after insertion. */
export const entityState = <T>(overrides: Partial<EntityState<T>> = {}): EntityState<T> => {
  return { file: null, status: 'pending', progress: null, error: null, payload: null, ...overrides };
};

/**
 * Reads the state held for an entity, typed to the {@link UploadedFile} payload the fixtures upload.
 *
 * Stays optional, because an entity having no state at all is itself something the tests assert.
 */
export const stateOf = (editor: Editor, entityId: string) => {
  return EntitiesEditor.getEntity<EntityState<UploadedFile>>(editor, entityId);
};

/** Builds what an upload resolves to, the way an API would answer. */
export const uploadedFile = (id: string, type = 'text/plain'): UploadedFile => {
  return { id, name: `${id}.txt`, type, url: `https://files.example.com/${id}` };
};
