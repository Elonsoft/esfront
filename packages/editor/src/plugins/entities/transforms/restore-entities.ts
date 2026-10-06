import { Editor, Element } from 'slate';

import { getEntityId, getEntityNodes, getEntityStore } from '../checks';
import type { EntityState } from '../entities.types';

/**
 * Seeds the store from a document that was loaded rather than typed, marking every entity it finds as
 * already uploaded.
 *
 * Without this, a view would need two ways to read an entity: the store for one just uploaded, the node
 * for one that came out of storage. With it the store is the only place to look, which is what the
 * `entityId` indirection was for.
 *
 * Where the payload comes off the node is the application's business, because it decided what to put
 * there in `createUploadedProps`:
 *
 * ```ts
 * restoreEntities(editor, (node) => node.uploaded);
 * ```
 *
 * An entity the store already holds is left alone, so calling this cannot interrupt an upload in flight.
 */
export const restoreEntities = <TPayload>(editor: Editor, getPayload: (node: Element) => TPayload | undefined) => {
  const store = getEntityStore<EntityState<TPayload>>(editor);

  for (const [node] of getEntityNodes(editor)) {
    const entityId = getEntityId(node);

    if (entityId === undefined || store.get(entityId)) {
      continue;
    }

    const payload = getPayload(node);

    if (payload === undefined) {
      continue;
    }

    // No file: this one was uploaded by a session that has already ended.
    store.set(entityId, { file: null, status: 'done', progress: null, error: null, payload });
  }
};
