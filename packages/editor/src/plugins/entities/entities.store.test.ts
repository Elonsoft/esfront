import { createEntityStore } from './entities.store';

import { describe, expect, it, vi } from 'vitest';

interface State {
  progress: number;
}

describe('createEntityStore', () => {
  it('holds state per id', () => {
    const store = createEntityStore<State>();

    store.set('a', { progress: 0 });

    expect(store.get('a')).toEqual({ progress: 0 });
    expect(store.get('b')).toBeUndefined();
  });

  it('seeds from an iterable', () => {
    const store = createEntityStore<State>([['a', { progress: 1 }]]);

    expect(store.get('a')).toEqual({ progress: 1 });
  });

  it('derives the next state from the current one', () => {
    const store = createEntityStore<State>([['a', { progress: 1 }]]);

    store.update('a', (previous) => ({ progress: (previous?.progress ?? 0) + 1 }));

    expect(store.get('a')).toEqual({ progress: 2 });
  });

  it('forgets an id', () => {
    const store = createEntityStore<State>([['a', { progress: 1 }]]);

    store.delete('a');

    expect(store.get('a')).toBeUndefined();
  });

  it('keeps working when destructured', () => {
    const { set, update, get } = createEntityStore<State>();

    set('a', { progress: 1 });
    update('a', (previous) => ({ progress: (previous?.progress ?? 0) + 1 }));

    expect(get('a')).toEqual({ progress: 2 });
  });

  describe('snapshots', () => {
    // `useSyncExternalStore` compares snapshots by reference. A new one per read loops forever; reusing
    // one after a change misses the update. The identity has to track the contents exactly.
    it('keeps the same snapshot while nothing changes', () => {
      const store = createEntityStore<State>([['a', { progress: 1 }]]);

      expect(store.getSnapshot()).toBe(store.getSnapshot());
    });

    it('replaces the snapshot when an entity changes', () => {
      const store = createEntityStore<State>();
      const before = store.getSnapshot();

      store.set('a', { progress: 1 });

      expect(store.getSnapshot()).not.toBe(before);
    });

    it('keeps the same snapshot when setting the identical value', () => {
      const store = createEntityStore<State>();
      const value = { progress: 1 };

      store.set('a', value);

      const before = store.getSnapshot();

      store.set('a', value);

      expect(store.getSnapshot()).toBe(before);
    });

    it('keeps the same snapshot when deleting an id it does not hold', () => {
      const store = createEntityStore<State>();
      const before = store.getSnapshot();

      store.delete('a');

      expect(store.getSnapshot()).toBe(before);
    });

    // One entity changing must not look like every entity changing, or every bound view re-renders.
    it('keeps the state of an untouched entity identical', () => {
      const store = createEntityStore<State>();
      const a = { progress: 1 };

      store.set('a', a);
      store.set('b', { progress: 2 });

      expect(store.get('a')).toBe(a);
    });
  });

  describe('subscribe', () => {
    it('notifies on a change', () => {
      const store = createEntityStore<State>();
      const listener = vi.fn();

      store.subscribe(listener);
      store.set('a', { progress: 1 });

      expect(listener).toHaveBeenCalledTimes(1);
    });

    it('does not notify when nothing changed', () => {
      const store = createEntityStore<State>();
      const listener = vi.fn();

      store.subscribe(listener);
      store.delete('a');

      expect(listener).not.toHaveBeenCalled();
    });

    it('stops notifying once unsubscribed', () => {
      const store = createEntityStore<State>();
      const listener = vi.fn();

      store.subscribe(listener)();
      store.set('a', { progress: 1 });

      expect(listener).not.toHaveBeenCalled();
    });

    it('survives a listener removing itself while being notified', () => {
      const store = createEntityStore<State>();
      const second = vi.fn();
      const unsubscribe = store.subscribe(() => unsubscribe());

      store.subscribe(second);

      expect(() => store.set('a', { progress: 1 })).not.toThrow();
      expect(second).toHaveBeenCalled();
    });
  });
});
