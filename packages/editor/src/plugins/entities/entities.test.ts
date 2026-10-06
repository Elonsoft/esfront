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
} from '../../testing';

import { createEditor, Element } from 'slate';

import {
  findEntityNode,
  getEntity,
  getEntityId,
  getEntityNodes,
  getOrphanEntityIds,
  isEntitiesEnabled,
  isEntityNode,
} from './checks';
import { withEntities } from './entities';
import { createEntityStore } from './entities.store';
import type { EntityState } from './entities.types';

import { withBase } from '../base';

import { describe, expect, it } from 'vitest';

describe('withEntities', () => {
  it('registers the plugin', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    expect(isEntitiesEnabled(editor)).toBe(true);
    expect(isEntitiesEnabled(createBaseTestEditor([p('one')]))).toBe(false);
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

    expect(getEntityNodes(editor)).toHaveLength(1);
    // The same paste carries a markup fallback for the file, which must not land alongside the node.
    expect(fallbackData).toEqual([]);
  });

  it('inserts one node per accepted file', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    editor.selection = cursor([0, 0]);
    editor.insertData(dataTransfer({ files: [fakeFile('a.txt'), fakeFile('b.txt')] }));

    expect(getEntityNodes(editor)).toHaveLength(2);
  });

  it('passes a paste carrying no files straight on', () => {
    const { editor, fallbackData } = createEntitiesTestEditor([p('one')]);
    const data = dataTransfer({ text: 'hello' });

    editor.selection = cursor([0, 0]);
    editor.insertData(data);

    expect(getEntityNodes(editor)).toEqual([]);
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

    expect(getEntityNodes(editor)).toHaveLength(1);
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

    expect(getEntityNodes(editor)).toEqual([]);
    expect(fallbackData).toEqual([data]);
  });
});

describe('getEntityId', () => {
  it('reads the id off an entity node', () => {
    expect(getEntityId(file('e1'))).toBe('e1');
  });

  it('is undefined for a node without one', () => {
    expect(getEntityId(p('one'))).toBeUndefined();
  });
});

describe('isEntityNode', () => {
  it('follows the schema', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), p('one')]);

    expect(isEntityNode(editor, editor.children[0])).toBe(true);
    expect(isEntityNode(editor, editor.children[1])).toBe(false);
  });
});

describe('getEntityNodes', () => {
  it('returns every entity node in the document', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), p('one'), file('e2')]);

    expect(getEntityNodes(editor).map(([, path]) => path)).toEqual([[0], [2]]);
  });

  it('can be narrowed to a location', () => {
    const { editor } = createEntitiesTestEditor([file('e1'), file('e2')]);

    expect(getEntityNodes(editor, [1]).map(([node]) => getEntityId(node))).toEqual(['e2']);
  });
});

describe('findEntityNode', () => {
  it('finds the node carrying the id', () => {
    const { editor } = createEntitiesTestEditor([p('one'), file('e1')]);

    expect(findEntityNode(editor, 'e1')?.[1]).toEqual([1]);
  });

  // An upload finishes long after it started, so the node has to be found by id rather than through a
  // path captured when it was inserted.
  it('finds the node after it has moved', () => {
    const { editor } = createEntitiesTestEditor([p('one'), file('e1')]);

    editor.moveNodes({ at: [1], to: [0] });

    expect(findEntityNode(editor, 'e1')?.[1]).toEqual([0]);
  });

  it('is null once the node is gone', () => {
    const { editor } = createEntitiesTestEditor([file('e1')]);

    editor.removeNodes({ at: [0] });

    expect(findEntityNode(editor, 'e1')).toBeNull();
  });

  it('is null for an unknown id', () => {
    const { editor } = createEntitiesTestEditor([file('e1')]);

    expect(findEntityNode(editor, 'nope')).toBeNull();
  });
});

describe('getEntity', () => {
  it('reads the state held for a node', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(getEntity<EntityState<UploadedFile>>(editor, 'e1')).toEqual(
      entityState<UploadedFile>({ payload: uploadedFile('f1') })
    );
  });
});

describe('getOrphanEntityIds', () => {
  it('is empty while every id is carried by a node', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(getOrphanEntityIds(editor)).toEqual([]);
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

    expect(getOrphanEntityIds(editor)).toEqual(['e1']);
  });

  it('ignores nodes that carry no entity id', () => {
    const { editor } = createEntitiesTestEditor([withId(p('one'), 'block')], {
      entities: [['e1', entityState<UploadedFile>({ payload: uploadedFile('f1') })]],
    });

    expect(getOrphanEntityIds(editor)).toEqual(['e1']);
  });
});

describe('entities helpers without the plugin', () => {
  const message = /withEntities\(\)/;

  it('throw, naming the plugin to add', () => {
    const editor = createTestEditor([p('one')]);

    expect(() => isEntityNode(editor, editor.children[0])).toThrow(message);
    expect(() => getEntityNodes(editor)).toThrow(message);
    expect(() => getOrphanEntityIds(editor)).toThrow(message);
  });
});
