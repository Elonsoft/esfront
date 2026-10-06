import { insertEntityNode } from './insert-entity-node';

import { createEntitiesTestEditor, cursor, fakeFile, p, UploadedFile } from '../../../testing';
import { getEntity, getEntityId, getEntityNodes } from '../checks';
import type { EntityState } from '../entities.types';

import { describe, expect, it } from 'vitest';

const stateOf = (editor: Parameters<typeof getEntity>[0], entityId: string) => {
  return getEntity<EntityState<UploadedFile>>(editor, entityId);
};

describe('insertEntityNode', () => {
  it('inserts a node after the block the caret is in', () => {
    const { editor } = createEntitiesTestEditor([p('one'), p('two')]);

    editor.selection = cursor([0, 0]);

    insertEntityNode(editor, fakeFile('a.txt'));

    expect(getEntityNodes(editor).map(([, path]) => path)).toEqual([[1]]);
  });

  it('inserts at an explicit path', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    insertEntityNode(editor, fakeFile('a.txt'), [0]);

    expect(getEntityNodes(editor).map(([, path]) => path)).toEqual([[0]]);
  });

  // The node and the store entry have to agree on the id, which is the one way this indirection breaks.
  it('mints an id the node and the store share', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    const entityId = insertEntityNode(editor, fakeFile('a.txt'), [0]);
    const [[node]] = getEntityNodes(editor);

    expect(entityId).not.toBeNull();
    expect(getEntityId(node)).toBe(entityId);
    expect(stateOf(editor, entityId as string)).toBeDefined();
  });

  it('seeds the state as pending, holding the file', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);
    const file = fakeFile('a.txt');

    const entityId = insertEntityNode(editor, file, [0]);

    expect(stateOf(editor, entityId as string)).toEqual({
      file,
      status: 'pending',
      progress: null,
      error: null,
      payload: null,
    });
  });

  // The file is the thing that cannot be serialized, so it has to stay out of the node.
  it('keeps the file out of the document', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    insertEntityNode(editor, fakeFile('a.txt'), [0]);

    expect(JSON.stringify(editor.children)).not.toContain('a.txt');
  });

  it('gives two files different ids', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    const first = insertEntityNode(editor, fakeFile('a.txt'), [0]);
    const second = insertEntityNode(editor, fakeFile('b.txt'), [0]);

    expect(first).not.toBe(second);
    expect(getEntityNodes(editor)).toHaveLength(2);
  });

  it('does nothing without a location, leaving no state behind', () => {
    const { editor, store } = createEntitiesTestEditor([p('one')]);

    expect(insertEntityNode(editor, fakeFile('a.txt'))).toBeNull();
    expect(getEntityNodes(editor)).toEqual([]);
    expect(store.getSnapshot().size).toBe(0);
  });
});
