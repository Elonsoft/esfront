import { EntityStore } from './entities.types';

/**
 * Builds an {@link EntityStore}.
 *
 * Deliberately free of any framework: the package ships no components, so binding this to a view is
 * the application's job. In React that is `useSyncExternalStore(store.subscribe, store.getSnapshot)`.
 */
export const createEntityStore = <T>(initial?: Iterable<readonly [string, T]>): EntityStore<T> => {
  let snapshot: ReadonlyMap<string, T> = new Map(initial);
  const listeners = new Set<() => void>();

  const emit = () => {
    // A copy, so that a listener removing itself cannot disturb the iteration.
    for (const listener of [...listeners]) {
      listener();
    }
  };

  const commit = (next: Map<string, T>) => {
    snapshot = next;
    emit();
  };

  const get = (id: string) => {
    return snapshot.get(id);
  };

  const set = (id: string, value: T) => {
    if (snapshot.has(id) && snapshot.get(id) === value) {
      // Nothing changed, so leave the snapshot identity alone: a new one would read as a change.
      return;
    }

    commit(new Map(snapshot).set(id, value));
  };

  // Standalone functions rather than methods, so that destructuring the store keeps them working.
  return {
    get,
    set,
    update(id, updater) {
      set(id, updater(snapshot.get(id)));
    },
    delete(id) {
      if (!snapshot.has(id)) {
        return;
      }

      const next = new Map(snapshot);

      next.delete(id);
      commit(next);
    },
    getSnapshot() {
      return snapshot;
    },
    subscribe(listener) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
  };
};
