import { useSyncExternalStore } from 'react';

import { useSlateStatic } from 'slate-react';

import { UploadedFile } from '../testing';
import { EntitiesEditor, EntityState } from '..';

/**
 * Subscribes to the state of one entity.
 *
 * `useSyncExternalStore` compares snapshots by reference, which is the whole reason the store replaces
 * its snapshot on every change rather than mutating it. `subscribe` and `getSnapshot` are created once
 * with the store, so they are stable across renders without any memoizing here.
 */
export const useEntityState = (entityId: string) => {
  const editor = useSlateStatic();
  const store = EntitiesEditor.getEntityStore<EntityState<UploadedFile>>(editor);
  const entities = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return entities.get(entityId);
};
