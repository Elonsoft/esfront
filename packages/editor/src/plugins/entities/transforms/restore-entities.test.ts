import { Element } from 'slate';

import { insertEntityNode } from './insert-entity-node';
import { restoreEntities } from './restore-entities';

import {
  createDeferredUploader,
  createEntitiesTestEditor,
  entityState,
  fakeFile,
  file,
  flush,
  p,
  UploadedFile,
  uploadedFile,
} from '../../../testing';
import { getEntity } from '../checks';
import type { EntityState } from '../entities.types';

import { describe, expect, it } from 'vitest';

// How the application reads the response back off its own node, having put it there itself.
const fromNode = (node: Element) => {
  return (node as Element & { uploaded?: UploadedFile }).uploaded;
};

const stateOf = (editor: Parameters<typeof getEntity>[0], entityId: string) => {
  return getEntity<EntityState<UploadedFile>>(editor, entityId);
};

describe('restoreEntities', () => {
  // Without this a view needs two ways to read an entity: the store for a fresh upload, the node for one
  // that came out of storage.
  it('seeds the store from the nodes of a loaded document', () => {
    const uploaded = uploadedFile('file-1');
    const { editor } = createEntitiesTestEditor([file('e1', uploaded)]);

    restoreEntities(editor, fromNode);

    expect(stateOf(editor, 'e1')).toEqual({
      file: null,
      status: 'done',
      progress: null,
      error: null,
      payload: uploaded,
    });
  });

  it('restores every entity in the document', () => {
    const { editor } = createEntitiesTestEditor([
      file('e1', uploadedFile('file-1')),
      p('one'),
      file('e2', uploadedFile('file-2')),
    ]);

    restoreEntities(editor, fromNode);

    expect(stateOf(editor, 'e1')?.payload?.id).toBe('file-1');
    expect(stateOf(editor, 'e2')?.payload?.id).toBe('file-2');
  });

  it('skips a node that carries no response yet', () => {
    const { editor, store } = createEntitiesTestEditor([file('e1')]);

    restoreEntities(editor, fromNode);

    expect(store.getSnapshot().size).toBe(0);
  });

  it('leaves an entity the store already holds alone', () => {
    const existing = entityState<UploadedFile>({ status: 'error', error: new Error('nope') });
    const { editor } = createEntitiesTestEditor([file('e1', uploadedFile('file-1'))], {
      entities: [['e1', existing]],
    });

    restoreEntities(editor, fromNode);

    expect(stateOf(editor, 'e1')).toBe(existing);
  });

  // Calling it while something is uploading must not replace the state that upload reports into.
  it('does not interrupt an upload in flight', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    restoreEntities(editor, fromNode);

    expect(stateOf(editor, entityId)?.status).toBe('uploading');

    calls[0].resolve(uploadedFile('file-1'));
    await flush();

    expect(stateOf(editor, entityId)?.status).toBe('done');
  });

  // The round trip the whole arrangement exists for: save, reload into a fresh store, render the same.
  it('survives a round trip through JSON', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const first = createEntitiesTestEditor([p('one')], { upload });

    insertEntityNode(first.editor, fakeFile('a.png', 'image/png'), [0]);

    await flush();
    calls[0].resolve(uploadedFile('file-1', 'image/png'));
    await flush();

    const saved = JSON.parse(JSON.stringify(first.editor.children));
    const second = createEntitiesTestEditor(saved);

    expect(second.store.getSnapshot().size).toBe(0);

    restoreEntities(second.editor, fromNode);

    const entityId = (saved[0] as { entityId: string }).entityId;

    expect(stateOf(second.editor, entityId)?.payload).toEqual(uploadedFile('file-1', 'image/png'));
    // The file never reaches the document, so a reloaded entity has the response and nothing else.
    expect(stateOf(second.editor, entityId)?.file).toBeNull();
  });
});
