import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

import { createEntityStore, EntitiesEditor, EntityState, withBase, withEntities } from '../src';
import {
  BASE_SCHEMA,
  createDeferredUploader,
  createEntitiesTestEditor,
  ENTITIES_SCHEMA,
  entityState,
  fakeFile,
  file,
  flush,
  p,
  stateOf,
  UploadedFile,
  uploadedFile,
} from '../src/testing';

import { describe, expect, it } from 'vitest';

const uploadedIdOf = (node: unknown) => {
  return (node as { uploaded?: { id: string } }).uploaded?.id;
};

describe('the upload queue', () => {
  it('starts an inserted entity uploading', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });
    const dropped = fakeFile('a.txt');

    const entityId = EntitiesEditor.insertEntityNode(editor, dropped, [0]) as string;

    await flush();

    expect(calls).toHaveLength(1);
    expect(calls[0].file).toBe(dropped);
    expect(stateOf(editor, entityId)).toMatchObject({ status: 'uploading', progress: 0 });
  });

  it('does nothing without an uploader, leaving the entity pending', async () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();

    expect(stateOf(editor, entityId)?.status).toBe('pending');
  });

  it('reports progress', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    calls[0].onProgress(0.4);

    expect(stateOf(editor, entityId)?.progress).toBe(0.4);
  });

  it('records the payload on the node when it resolves', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    calls[0].resolve(uploadedFile('file-1'));
    await flush();

    expect(stateOf(editor, entityId)).toMatchObject({ status: 'done', progress: 1, payload: uploadedFile('file-1') });
    expect(uploadedIdOf(EntitiesEditor.getEntityNodes(editor)[0][0])).toBe('file-1');
  });

  it('keeps the error when it rejects, leaving the node alone', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    calls[0].reject(new Error('nope'));
    await flush();

    expect(stateOf(editor, entityId)).toMatchObject({ status: 'error', progress: null });
    expect(stateOf(editor, entityId)?.error).toBeInstanceOf(Error);
    expect(uploadedIdOf(EntitiesEditor.getEntityNodes(editor)[0][0])).toBeUndefined();
  });

  it('tries again on retry, clearing the error', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    calls[0].reject(new Error('nope'));
    await flush();

    EntitiesEditor.retryEntityUpload(editor, entityId);
    await flush();

    expect(calls).toHaveLength(2);
    expect(stateOf(editor, entityId)).toMatchObject({ status: 'uploading', error: null });
  });

  it('does not queue an entity that is already uploading', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    EntitiesEditor.enqueueEntityUpload(editor, entityId);
    await flush();

    expect(calls).toHaveLength(1);
  });

  // Assigning `editor.children` emits no operations, so nothing queues an entity a loaded document
  // arrived with. That is the intent: a saved document cannot carry a `File` to upload in the first
  // place, so its entities are already done.
  it('leaves an entity a loaded document arrived with alone', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();

    createEntitiesTestEditor([file('e1')], {
      upload,
      entities: [['e1', entityState<UploadedFile>({ file: fakeFile('a.txt') })]],
    });

    await flush();

    expect(calls).toEqual([]);
  });

  describe('aborting', () => {
    it('aborts the upload when the node is removed', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor } = createEntitiesTestEditor([p('one')], { upload });

      EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);

      await flush();

      const [{ signal }] = calls;

      editor.removeNodes({ at: [0] });

      expect(signal.aborted).toBe(true);
    });

    // The node can come back — removing one is undoable — so the file and the state are kept, waiting.
    it('leaves an aborted entity pending rather than failed', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor, store } = createEntitiesTestEditor([p('one')], { upload });

      const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

      await flush();
      editor.removeNodes({ at: [0] });
      calls[0].reject(new Error('aborted'));
      await flush();

      expect(store.get(entityId)).toMatchObject({ status: 'pending', error: null });
      expect(store.get(entityId)?.file).not.toBeNull();
    });

    it('writes nothing when the node went while the upload was running', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor } = createEntitiesTestEditor([p('one')], { upload });

      EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);

      await flush();
      editor.removeNodes({ at: [0] });
      calls[0].resolve(uploadedFile('file-1'));

      await expect(flush()).resolves.toBeUndefined();
      expect(EntitiesEditor.getEntityNodes(editor)).toEqual([]);
    });

    it('ignores progress reported after an abort', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor, store } = createEntitiesTestEditor([p('one')], { upload });

      const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

      await flush();
      editor.removeNodes({ at: [0] });
      calls[0].onProgress(0.9);

      expect(store.get(entityId)?.progress).not.toBe(0.9);
    });

    it('drops an entity that had not started yet', async () => {
      const { upload } = createDeferredUploader<UploadedFile>();
      const { editor, store } = createEntitiesTestEditor([p('one')], { upload, concurrency: 1 });

      const first = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;
      const second = EntitiesEditor.insertEntityNode(editor, fakeFile('b.txt'), [0]) as string;

      await flush();
      EntitiesEditor.abortEntityUpload(editor, second);

      expect(store.get(first)?.status).toBe('uploading');
      expect(store.get(second)?.status).toBe('pending');
    });
  });

  describe('concurrency', () => {
    it('runs no more than the limit at once', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor } = createEntitiesTestEditor([p('one')], { upload, concurrency: 2 });

      EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);
      EntitiesEditor.insertEntityNode(editor, fakeFile('b.txt'), [0]);
      EntitiesEditor.insertEntityNode(editor, fakeFile('c.txt'), [0]);

      await flush();

      expect(calls).toHaveLength(2);
    });

    it('starts the next one as a slot frees up', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor } = createEntitiesTestEditor([p('one')], { upload, concurrency: 1 });

      EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);
      EntitiesEditor.insertEntityNode(editor, fakeFile('b.txt'), [0]);

      await flush();
      expect(calls).toHaveLength(1);

      calls[0].resolve(uploadedFile('file-1'));
      await flush();

      expect(calls).toHaveLength(2);
    });
  });

  // Undo takes back what the user did, and the user did not upload anything. Recorded, one undo would
  // strip the payload off a node the store still reports as uploaded.
  describe('history', () => {
    const createHistoryEditor = (uploader: ReturnType<typeof createDeferredUploader<UploadedFile>>['upload']) => {
      const store = createEntityStore<EntityState<UploadedFile>>();
      const editor = withEntities({ schema: ENTITIES_SCHEMA, store, upload: uploader })(
        withHistory(
          Object.assign(withBase(BASE_SCHEMA)(createEditor()), {
            insertData: () => {},
          })
        )
      );

      editor.children = [p('one')];

      return { editor, store };
    };

    // The discriminator: recorded, the first undo would strip the response off and leave the node behind. Not
    // recorded, the first undo takes back the insertion itself, which is what the user actually did.
    it('does not make the payload write its own undo step', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor } = createHistoryEditor(upload);

      EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);

      await flush();
      calls[0].resolve(uploadedFile('file-1'));
      await flush();

      expect(uploadedIdOf(EntitiesEditor.getEntityNodes(editor)[0][0])).toBe('file-1');

      editor.undo();

      expect(EntitiesEditor.getEntityNodes(editor)).toEqual([]);
    });

    // Removing the node aborts the upload and leaves the entity waiting, so putting the node back has
    // to start it again — which is why the queueing hangs off `insert_node` rather than the insert
    // transform.
    it('starts the upload again when an undo puts the node back', async () => {
      const { upload, calls } = createDeferredUploader<UploadedFile>();
      const { editor, store } = createHistoryEditor(upload);

      const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

      await flush();
      editor.removeNodes({ at: [0] });
      calls[0].reject(new Error('aborted'));
      await flush();

      expect(store.get(entityId)?.status).toBe('pending');

      editor.undo();
      await flush();

      expect(calls).toHaveLength(2);
      expect(store.get(entityId)?.status).toBe('uploading');
    });
  });
});
