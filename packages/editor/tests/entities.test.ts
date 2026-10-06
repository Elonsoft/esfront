import { createEditor, Element } from 'slate';

import { createEntityStore, EntitiesEditor, EntityState, withBase, withEntities } from '../src';
import {
  BASE_SCHEMA,
  createBaseTestEditor,
  createEntitiesTestEditor,
  createTestEditor,
  cursor,
  dataTransfer,
  ENTITIES_SCHEMA,
  entityState,
  fakeFile,
  file,
  p,
  UploadedFile,
  uploadedFile,
  withId,
} from '../src/testing';

import { describe, expect, it, vi } from 'vitest';

describe('withEntities', () => {
  it('registers the plugin', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    expect(EntitiesEditor.isEntitiesEnabled(editor)).toBe(true);
    expect(EntitiesEditor.isEntitiesEnabled(createBaseTestEditor([p('one')]))).toBe(false);
  });

  // Voidness follows from the schema, so there is one declaration of what an entity node is rather than
  // one for the plugin and another for slate.
  it('marks entity nodes void', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), p('one')]);

    expect(editor.isVoid(editor.children[0] as Element)).toBe(true);
    expect(editor.isVoid(editor.children[1] as Element)).toBe(false);
  });

  it('leaves voidness decided by another plugin alone', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);
    const { isVoid } = editor;

    editor.isVoid = (element) => element.type === 'paragraph' || isVoid(element);

    expect(editor.isVoid(editor.children[0] as Element)).toBe(true);
  });
});

describe('withEntities insertData', () => {
  it('turns a dropped file into an entity node', () => {
    const { editor, fallbackData } = createEntitiesTestEditor([p('one')]);

    editor.selection = cursor([0, 0]);
    editor.insertData(dataTransfer({ files: [fakeFile('a.txt')] }));

    expect(EntitiesEditor.getEntityNodes(editor)).toHaveLength(1);
    // The same paste carries a markup fallback for the file, which must not land alongside the node.
    expect(fallbackData).toEqual([]);
  });

  it('inserts one node per accepted file', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    editor.selection = cursor([0, 0]);
    editor.insertData(dataTransfer({ files: [fakeFile('a.txt'), fakeFile('b.txt')] }));

    expect(EntitiesEditor.getEntityNodes(editor)).toHaveLength(2);
  });

  it('passes a paste carrying no files straight on', () => {
    const { editor, fallbackData } = createEntitiesTestEditor([p('one')]);
    const data = dataTransfer({ text: 'hello' });

    editor.selection = cursor([0, 0]);
    editor.insertData(data);

    expect(EntitiesEditor.getEntityNodes(editor)).toEqual([]);
    expect(fallbackData).toEqual([data]);
  });

  it('keeps only the files the predicate accepts', () => {
    const store = createEntityStore<EntityState<UploadedFile>>();
    const accept = (candidate: File) => candidate.type === 'text/plain';
    const fallbackData: DataTransfer[] = [];

    const editor = withEntities({ schema: ENTITIES_SCHEMA, store, accept })(
      Object.assign(withBase(BASE_SCHEMA)(createEditor()), {
        insertData: (data: DataTransfer) => {
          fallbackData.push(data);
        },
      })
    );

    editor.children = [p('one')];
    editor.selection = cursor([0, 0]);
    editor.insertData(dataTransfer({ files: [fakeFile('a.txt'), fakeFile('b.bin', 'application/octet-stream')] }));

    expect(EntitiesEditor.getEntityNodes(editor)).toHaveLength(1);
    expect(fallbackData).toEqual([]);
  });

  // Declining every file is not the same as swallowing the paste, so it falls through to whatever
  // would otherwise have handled it.
  it('passes a paste on when it accepts none of its files', () => {
    const store = createEntityStore<EntityState<UploadedFile>>();
    const fallbackData: DataTransfer[] = [];

    const editor = withEntities({ schema: ENTITIES_SCHEMA, store, accept: () => false })(
      Object.assign(withBase(BASE_SCHEMA)(createEditor()), {
        insertData: (data: DataTransfer) => {
          fallbackData.push(data);
        },
      })
    );

    editor.children = [p('one')];
    editor.selection = cursor([0, 0]);

    const data = dataTransfer({ files: [fakeFile('a.txt')] });

    editor.insertData(data);

    expect(EntitiesEditor.getEntityNodes(editor)).toEqual([]);
    expect(fallbackData).toEqual([data]);
  });
});

describe('EntitiesEditor.getEntityId', () => {
  it('reads the id off an entity node', () => {
    expect(EntitiesEditor.getEntityId(file('e1'))).toBe('e1');
  });

  it('is undefined for a node without one', () => {
    expect(EntitiesEditor.getEntityId(p('one'))).toBeUndefined();
  });
});

describe('EntitiesEditor.isEntityNode', () => {
  it('follows the schema', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), p('one')]);

    expect(EntitiesEditor.isEntityNode(editor, editor.children[0])).toBe(true);
    expect(EntitiesEditor.isEntityNode(editor, editor.children[1])).toBe(false);
  });
});

describe('EntitiesEditor.getEntityNodes', () => {
  it('returns every entity node in the document', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), p('one'), file('e2')]);

    expect(EntitiesEditor.getEntityNodes(editor).map(([, path]) => path)).toEqual([[0], [2]]);
  });

  it('can be narrowed to a location', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), file('e2')]);

    expect(EntitiesEditor.getEntityNodes(editor, [1]).map(([node]) => EntitiesEditor.getEntityId(node))).toEqual([
      'e2',
    ]);
  });
});

describe('EntitiesEditor.findEntityNode', () => {
  it('finds the node carrying the id', () => {
    const { editor } = createEntitiesTestEditor([p('one'), file('e1')]);

    expect(EntitiesEditor.findEntityNode(editor, 'e1')?.[1]).toEqual([1]);
  });

  // An upload finishes long after it started, so the node has to be found by id rather than through a
  // path captured when it was inserted.
  it('finds the node after it has moved', () => {
    const { editor } = createEntitiesTestEditor([p('one'), file('e1')]);

    editor.moveNodes({ at: [1], to: [0] });

    expect(EntitiesEditor.findEntityNode(editor, 'e1')?.[1]).toEqual([0]);
  });

  it('is null once the node is gone', () => {
    const { editor } = createEntitiesTestEditor([file('e1')]);

    editor.removeNodes({ at: [0] });

    expect(EntitiesEditor.findEntityNode(editor, 'e1')).toBeNull();
  });

  it('is null for an unknown id', () => {
    const { editor } = createEntitiesTestEditor([file('e1')]);

    expect(EntitiesEditor.findEntityNode(editor, 'nope')).toBeNull();
  });
});

describe('EntitiesEditor.getEntity', () => {
  it('reads the state held for a node', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(EntitiesEditor.getEntity<EntityState<UploadedFile>>(editor, 'e1')).toEqual(
      entityState<UploadedFile>({ payload: uploadedFile('f1') })
    );
  });
});

describe('EntitiesEditor.getOrphanEntityIds', () => {
  it('is empty while every id is carried by a node', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(EntitiesEditor.getOrphanEntityIds(editor)).toEqual([]);
  });

  // Removing a node leaves its entity behind on purpose: undo has to be able to bring the node back to
  // something that still exists, so cleaning up is the application's call, later.
  it('reports an id whose node is gone', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), file('e2')], {
      entities: [
        ['e1', entityState<UploadedFile>()],
        ['e2', entityState<UploadedFile>()],
      ],
    });

    editor.removeNodes({ at: [0] });

    expect(EntitiesEditor.getOrphanEntityIds(editor)).toEqual(['e1']);
  });

  it('ignores nodes that carry no entity id', () => {
    const { editor } = createEntitiesTestEditor([withId(p('one'), 'block')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(EntitiesEditor.getOrphanEntityIds(editor)).toEqual(['e1']);
  });
});

describe('entities helpers without the plugin', () => {
  const message = /withEntities\(\)/;

  it('throw, naming the plugin to add', () => {
    const editor = createTestEditor([p('one')]);

    expect(() => EntitiesEditor.isEntityNode(editor, editor.children[0])).toThrow(message);
    expect(() => EntitiesEditor.getEntityNodes(editor)).toThrow(message);
    expect(() => EntitiesEditor.getOrphanEntityIds(editor)).toThrow(message);
  });
});

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
