import { Editor, Element } from 'slate';
import { HistoryEditor } from 'slate-history';

import { findEntityNode, getEntityStore } from './checks';
import { createUploadedProps, getEntitiesOptions } from './entities.options';
import type { EntityState } from './entities.types';

const DEFAULT_CONCURRENCY = 3;

interface Queue {
  /** The upload running for an entity, which is how it is aborted. */
  running: Map<string, AbortController>;
  /** The entities waiting for a slot, in the order they were queued. */
  waiting: string[];
}

// Abort controllers are not state the application should see, so they live here rather than in the
// store, which holds only what a view renders.
const QUEUES = new WeakMap<Editor, Queue>();

const getQueue = (editor: Editor): Queue => {
  let queue = QUEUES.get(editor);

  if (!queue) {
    queue = { running: new Map(), waiting: [] };
    QUEUES.set(editor, queue);
  }

  return queue;
};

const patch = <TPayload>(editor: Editor, entityId: string, changes: Partial<EntityState<TPayload>>) => {
  const store = getEntityStore<EntityState<TPayload>>(editor);
  const current = store.get(entityId);

  if (!current) {
    return;
  }

  store.set(entityId, { ...current, ...changes });
};

/**
 * Records what the upload resolved to on the node.
 *
 * Outside the history: undo exists to take back what the user did, and the user did not do this. Left
 * in, one undo would strip the payload off a node the store still reports as uploaded.
 *
 * The node is found by id rather than through a path captured when the upload started, because by now
 * it may have moved — or gone, in which case there is nothing to write to.
 */
const writeUploadedProps = <TPayload>(editor: Editor, entityId: string, payload: TPayload) => {
  const entry = findEntityNode(editor, entityId);

  if (!entry) {
    return;
  }

  const props = createUploadedProps(editor, payload);

  const write = () => {
    editor.setNodes<Element>(props, { at: entry[1] });
  };

  if (HistoryEditor.isHistoryEditor(editor)) {
    HistoryEditor.withoutSaving(editor, write);
  } else {
    write();
  }
};

/** Runs one upload to its end, whatever that end turns out to be. */
const start = async <TPayload>(editor: Editor, entityId: string) => {
  const { upload } = getEntitiesOptions<TPayload>(editor);
  const store = getEntityStore<EntityState<TPayload>>(editor);
  const state = store.get(entityId);
  const queue = getQueue(editor);

  if (!upload || !state?.file) {
    return;
  }

  const controller = new AbortController();

  queue.running.set(entityId, controller);
  patch<TPayload>(editor, entityId, { status: 'uploading', progress: 0, error: null });

  try {
    const payload = await upload(state.file, {
      signal: controller.signal,
      onProgress: (progress) => {
        // Only while this is still the running upload: a late tick from an aborted one would otherwise
        // revive an entity the user has already moved on from.
        if (!controller.signal.aborted && store.get(entityId)?.status === 'uploading') {
          patch<TPayload>(editor, entityId, { progress });
        }
      },
    });

    if (controller.signal.aborted) {
      return;
    }

    patch<TPayload>(editor, entityId, { status: 'done', progress: 1, payload, error: null });
    writeUploadedProps(editor, entityId, payload);
  } catch (error) {
    // An abort is not a failure: the entity goes back to waiting so that it can be tried again.
    patch<TPayload>(
      editor,
      entityId,
      controller.signal.aborted
        ? { status: 'pending', progress: null, error: null }
        : { status: 'error', progress: null, error }
    );
  } finally {
    queue.running.delete(entityId);
  }
};

/** Fills the free slots, and keeps filling them as uploads finish. */
const pump = (editor: Editor) => {
  const { concurrency = DEFAULT_CONCURRENCY } = getEntitiesOptions(editor);
  const queue = getQueue(editor);

  while (queue.running.size < concurrency && queue.waiting.length) {
    const entityId = queue.waiting.shift();

    if (entityId !== undefined) {
      void start(editor, entityId).then(() => pump(editor));
    }
  }
};

/**
 * Queues the upload of an entity, if there is an uploader and the entity is waiting for one.
 *
 * Doing nothing for an entity that is already uploading or done is what makes this safe to call from
 * wherever a node appears, including an undo putting one back.
 */
export const enqueueEntityUpload = (editor: Editor, entityId: string) => {
  const { upload } = getEntitiesOptions(editor);
  const state = getEntityStore<EntityState>(editor).get(entityId);

  if (!upload || !state?.file || state.status === 'uploading' || state.status === 'done') {
    return;
  }

  const queue = getQueue(editor);

  if (queue.running.has(entityId) || queue.waiting.includes(entityId)) {
    return;
  }

  queue.waiting.push(entityId);
  pump(editor);
};

/**
 * Abandons the upload of an entity, leaving it waiting to be tried again.
 *
 * The state and the file are kept, because the node may come back: removing one is undoable.
 */
export const abortEntityUpload = (editor: Editor, entityId: string) => {
  const queue = getQueue(editor);
  const controller = queue.running.get(entityId);

  if (controller) {
    controller.abort();
    return;
  }

  const waiting = queue.waiting.indexOf(entityId);

  if (waiting !== -1) {
    queue.waiting.splice(waiting, 1);
    patch(editor, entityId, { status: 'pending', progress: null, error: null });
  }
};

/**
 * Queues a failed upload again, clearing the error it failed with.
 */
export const retryEntityUpload = (editor: Editor, entityId: string) => {
  patch(editor, entityId, { status: 'pending', progress: null, error: null });
  enqueueEntityUpload(editor, entityId);
};
