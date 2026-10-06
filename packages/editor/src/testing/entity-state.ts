import { UploadedFile } from './types';

import { EntityState } from '../plugins/entities';

/** Builds an {@link EntityState}, defaulting to the shape an entity has right after insertion. */
export const entityState = <T>(overrides: Partial<EntityState<T>> = {}): EntityState<T> => {
  return { file: null, status: 'pending', progress: null, error: null, payload: null, ...overrides };
};

/** Builds what an upload resolves to, the way an API would answer. */
export const uploadedFile = (id: string, type = 'text/plain'): UploadedFile => {
  return { id, name: `${id}.txt`, type, url: `https://files.example.com/${id}` };
};
