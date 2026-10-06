import { Element } from 'slate';

import { BlocksEditor, EntitiesEditor } from '../src';
import {
  createDeferredUploader,
  createEntitiesTestEditor,
  cursor,
  entityState,
  fakeFile,
  file,
  flush,
  li,
  p,
  stateOf,
  ul,
  UploadedFile,
  uploadedFile,
} from '../src/testing';

import { describe, expect, it } from 'vitest';

describe('EntitiesEditor.insertEntityNode', () => {
  it('inserts a node after the block the caret is in', () => {
    const { editor } = createEntitiesTestEditor([p('one'), p('two')]);

    editor.selection = cursor([0, 0]);

    EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'));

    expect(EntitiesEditor.getEntityNodes(editor).map(([, path]) => path)).toEqual([[1]]);
  });

  it('inserts at an explicit path', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);

    expect(EntitiesEditor.getEntityNodes(editor).map(([, path]) => path)).toEqual([[0]]);
  });

  // The node and the store entry have to agree on the id, which is the one way this indirection breaks.
  it('mints an id the node and the store share', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);
    const [[node]] = EntitiesEditor.getEntityNodes(editor);

    expect(entityId).not.toBeNull();
    expect(EntitiesEditor.getEntityId(node)).toBe(entityId);
    expect(stateOf(editor, entityId as string)).toBeDefined();
  });

  it('seeds the state as pending, holding the file', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);
    const file = fakeFile('a.txt');

    const entityId = EntitiesEditor.insertEntityNode(editor, file, [0]);

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

    EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);

    expect(JSON.stringify(editor.children)).not.toContain('a.txt');
  });

  it('gives two files different ids', () => {
    const { editor } = createEntitiesTestEditor([p('one')]);

    const first = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]);
    const second = EntitiesEditor.insertEntityNode(editor, fakeFile('b.txt'), [0]);

    expect(first).not.toBe(second);
    expect(EntitiesEditor.getEntityNodes(editor)).toHaveLength(2);
  });

  it('does nothing without a location, leaving no state behind', () => {
    const { editor, store } = createEntitiesTestEditor([p('one')]);

    expect(EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'))).toBeNull();
    expect(EntitiesEditor.getEntityNodes(editor)).toEqual([]);
    expect(store.getSnapshot().size).toBe(0);
  });
});

const entityIds = (editor: Parameters<typeof EntitiesEditor.getEntityNodes>[0]) => {
  return EntitiesEditor.getEntityNodes(editor).map(([node]) => EntitiesEditor.getEntityId(node));
};

describe('duplicating an entity block', () => {
  // Two nodes reading one store entry is the failure this prevents: removing either would abort the
  // upload the other is waiting for, and cleaning up after one would pull the file out from the other.
  it('gives the copy its own entity id', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.selection = cursor([0, 0]);
    BlocksEditor.duplicateBlocks(editor);

    const [first, second] = entityIds(editor);

    expect(first).toBe('e1');
    expect(second).not.toBe('e1');
    expect(second).toBeDefined();
  });

  it('gives the copy its own state, pointing at the same upload', () => {
    const { editor, store } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.selection = cursor([0, 0]);
    BlocksEditor.duplicateBlocks(editor);

    const copyId = entityIds(editor)[1] as string;

    expect(store.get(copyId)).toMatchObject({ status: 'done', payload: uploadedFile('file-1') });
  });

  it('does not upload the copy of a finished entity again', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([file('e1')], {
      upload,
      entities: [
        ['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1'), file: fakeFile('a.txt') })],
      ],
    });

    editor.selection = cursor([0, 0]);
    BlocksEditor.duplicateBlocks(editor);
    await flush();

    expect(calls).toEqual([]);
  });

  // An upload in flight reports to the node that started it, so the copy cannot share it and starts
  // over instead.
  it('uploads the copy of an unfinished entity on its own', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor, store } = createEntitiesTestEditor([file('e1')], {
      upload,
      entities: [['e1', entityState<UploadedFile>({ status: 'uploading', progress: 0.5, file: fakeFile('a.txt') })]],
    });

    editor.selection = cursor([0, 0]);
    BlocksEditor.duplicateBlocks(editor);
    await flush();

    const copyId = entityIds(editor)[1] as string;

    expect(calls).toHaveLength(1);
    expect(store.get(copyId)?.status).toBe('uploading');
    expect(store.get('e1')?.status).toBe('uploading');
  });

  it('remaps an entity nested inside a duplicated block', () => {
    const { editor } = createEntitiesTestEditor([ul(li('one'))], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    // A list item holding an entity, which reaches the plugin as one subtree rather than one node.
    editor.insertNodes(file('e1'), { at: [0, 0, 1] });
    editor.selection = cursor([0, 0, 0, 0]);
    BlocksEditor.duplicateBlocks(editor);

    const ids = entityIds(editor);

    expect(ids).toHaveLength(2);
    expect(new Set(ids).size).toBe(2);
  });

  it('leaves an id the document does not already carry alone', () => {
    const { editor } = createEntitiesTestEditor([p('one')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.insertNodes(file('e1'), { at: [0] });

    expect(entityIds(editor)).toEqual(['e1']);
  });
});

describe('EntitiesEditor.getOrphanPayloads', () => {
  it('reports what a removed entity uploaded', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.removeNodes({ at: [0] });

    expect(EntitiesEditor.getOrphanPayloads<UploadedFile>(editor)).toEqual([uploadedFile('file-1')]);
  });

  // The point of going by payload rather than by id: a copy keeps the original upload, so deleting it
  // because one of the two nodes went would break the one that stayed.
  it('leaves an upload a surviving copy still points at', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.selection = cursor([0, 0]);
    BlocksEditor.duplicateBlocks(editor);
    editor.removeNodes({ at: [0] });

    expect(EntitiesEditor.getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });

  it('ignores an entity that never finished uploading', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ file: fakeFile('a.txt') })]],
    });

    editor.removeNodes({ at: [0] });

    expect(EntitiesEditor.getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });

  it('is empty while nothing is orphaned', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    expect(EntitiesEditor.getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });
});

// How the application reads the response back off its own node, having put it there itself.
const fromNode = (node: Element) => {
  return (node as Element & { uploaded?: UploadedFile }).uploaded;
};

describe('EntitiesEditor.restoreEntities', () => {
  // Without this a view needs two ways to read an entity: the store for a fresh upload, the node for one
  // that came out of storage.
  it('seeds the store from the nodes of a loaded document', () => {
    const uploaded = uploadedFile('file-1');
    const { editor } = createEntitiesTestEditor([file('e1', uploaded)]);

    EntitiesEditor.restoreEntities(editor, fromNode);

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

    EntitiesEditor.restoreEntities(editor, fromNode);

    expect(stateOf(editor, 'e1')?.payload?.id).toBe('file-1');
    expect(stateOf(editor, 'e2')?.payload?.id).toBe('file-2');
  });

  it('skips a node that carries no response yet', () => {
    const { editor, store } = createEntitiesTestEditor([file('e1')]);

    EntitiesEditor.restoreEntities(editor, fromNode);

    expect(store.getSnapshot().size).toBe(0);
  });

  it('leaves an entity the store already holds alone', () => {
    const existing = entityState<UploadedFile>({ status: 'error', error: new Error('nope') });
    const { editor } = createEntitiesTestEditor([file('e1', uploadedFile('file-1'))], {
      entities: [['e1', existing]],
    });

    EntitiesEditor.restoreEntities(editor, fromNode);

    expect(stateOf(editor, 'e1')).toBe(existing);
  });

  // Calling it while something is uploading must not replace the state that upload reports into.
  it('does not interrupt an upload in flight', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const { editor } = createEntitiesTestEditor([p('one')], { upload });

    const entityId = EntitiesEditor.insertEntityNode(editor, fakeFile('a.txt'), [0]) as string;

    await flush();
    EntitiesEditor.restoreEntities(editor, fromNode);

    expect(stateOf(editor, entityId)?.status).toBe('uploading');

    calls[0].resolve(uploadedFile('file-1'));
    await flush();

    expect(stateOf(editor, entityId)?.status).toBe('done');
  });

  // The round trip the whole arrangement exists for: save, reload into a fresh store, render the same.
  it('survives a round trip through JSON', async () => {
    const { upload, calls } = createDeferredUploader<UploadedFile>();
    const first = createEntitiesTestEditor([p('one')], { upload });

    EntitiesEditor.insertEntityNode(first.editor, fakeFile('a.png', 'image/png'), [0]);

    await flush();
    calls[0].resolve(uploadedFile('file-1', 'image/png'));
    await flush();

    const saved = JSON.parse(JSON.stringify(first.editor.children));
    const second = createEntitiesTestEditor(saved);

    expect(second.store.getSnapshot().size).toBe(0);

    EntitiesEditor.restoreEntities(second.editor, fromNode);

    const entityId = (saved[0] as { entityId: string }).entityId;

    expect(stateOf(second.editor, entityId)?.payload).toEqual(uploadedFile('file-1', 'image/png'));
    // The file never reaches the document, so a reloaded entity has the response and nothing else.
    expect(stateOf(second.editor, entityId)?.file).toBeNull();
  });
});
