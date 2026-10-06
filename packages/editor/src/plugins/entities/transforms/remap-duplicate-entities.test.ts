import { duplicateBlocks } from '../../../blocks';
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
  ul,
  UploadedFile,
  uploadedFile,
} from '../../../testing';
import { getEntityId, getEntityNodes, getOrphanPayloads } from '../checks';

import { describe, expect, it } from 'vitest';

const entityIds = (editor: Parameters<typeof getEntityNodes>[0]) => {
  return getEntityNodes(editor).map(([node]) => getEntityId(node));
};

describe('duplicating an entity block', () => {
  // Two nodes reading one store entry is the failure this prevents: removing either would abort the
  // upload the other is waiting for, and cleaning up after one would pull the file out from the other.
  it('gives the copy its own entity id', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.selection = cursor([0, 0]);
    duplicateBlocks(editor);

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
    duplicateBlocks(editor);

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
    duplicateBlocks(editor);
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
    duplicateBlocks(editor);
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
    duplicateBlocks(editor);

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

describe('getOrphanPayloads', () => {
  it('reports what a removed entity uploaded', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.removeNodes({ at: [0] });

    expect(getOrphanPayloads<UploadedFile>(editor)).toEqual([uploadedFile('file-1')]);
  });

  // The point of going by payload rather than by id: a copy keeps the original upload, so deleting it
  // because one of the two nodes went would break the one that stayed.
  it('leaves an upload a surviving copy still points at', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    editor.selection = cursor([0, 0]);
    duplicateBlocks(editor);
    editor.removeNodes({ at: [0] });

    expect(getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });

  it('ignores an entity that never finished uploading', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ file: fakeFile('a.txt') })]],
    });

    editor.removeNodes({ at: [0] });

    expect(getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });

  it('is empty while nothing is orphaned', () => {
    const { editor } = createEntitiesTestEditor([file('e1')], {
      entities: [['e1', entityState<UploadedFile>({ status: 'done', payload: uploadedFile('file-1') })]],
    });

    expect(getOrphanPayloads<UploadedFile>(editor)).toEqual([]);
  });
});
