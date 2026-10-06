import { createEditor, Descendant, Editor, Range } from 'slate';
import { DOMEditor } from 'slate-dom';

import { BASE_SCHEMA, ENTITIES_SCHEMA, LISTS_SCHEMA } from './schema';
import { UploadedFile } from './types';

import { withBase } from '../plugins/base';
import { createEntityStore, EntityState, EntityStore, EntityUploader, withEntities } from '../plugins/entities';
import { withLists } from '../plugins/lists';

/**
 * Builds a bare editor with the base and lists plugins for use in tests.
 *
 * Deliberately free of `withReact`, so the transforms can be exercised without a DOM. The children
 * are assigned as they are, without normalizing, so that a test can feed in an invalid document and
 * assert on what the normalizations make of it.
 */
export const createTestEditor = (children: Descendant[], selection: Range | null = null): Editor => {
  const editor = withLists(LISTS_SCHEMA)(withBase(BASE_SCHEMA)(createEditor()));

  editor.children = children;
  editor.selection = selection;

  return editor;
};

/**
 * Builds a test editor with the base plugin only, for asserting on what the helpers do when the lists
 * plugin is not registered.
 */
export const createBaseTestEditor = (children: Descendant[], selection: Range | null = null): Editor => {
  const editor = withBase(BASE_SCHEMA)(createEditor());

  editor.children = children;
  editor.selection = selection;

  return editor;
};

export interface EntitiesTestEditorOptions {
  /** Seeds the store, for a document loaded with entities already in it. */
  entities?: Iterable<readonly [string, EntityState<UploadedFile>]>;
  upload?: EntityUploader<UploadedFile>;
  concurrency?: number;
  accept?: (file: File) => boolean;
}

export interface EntitiesTestEditor {
  editor: Editor & Pick<DOMEditor, 'insertData'>;
  store: EntityStore<EntityState<UploadedFile>>;
  /**
   * What reached the `insertData` the plugin wraps, i.e. the data it chose not to handle itself.
   */
  fallbackData: DataTransfer[];
}

/**
 * Builds a test editor with the base and entities plugins, returning the store alongside it so a test
 * can assert on both sides of the `entityId` indirection.
 *
 * The entities plugin wraps `insertData`, which only a DOM editor has, so a recording stub stands in
 * for it. That keeps these tests free of a DOM while still exercising the override, since the slice of
 * `DataTransfer` the plugin reads is just an object.
 *
 * No `withHistory`: a test that cares what undo does composes its own editor, so that the arrangement
 * being asserted on is visible in the test rather than hidden in here.
 */
export const createEntitiesTestEditor = (
  children: Descendant[],
  { entities, ...options }: EntitiesTestEditorOptions = {}
): EntitiesTestEditor => {
  const store = createEntityStore<EntityState<UploadedFile>>(entities);
  const fallbackData: DataTransfer[] = [];

  const editor = withEntities({ schema: ENTITIES_SCHEMA, store, ...options })(
    Object.assign(withBase(BASE_SCHEMA)(createEditor()), {
      insertData: (data: DataTransfer) => {
        fallbackData.push(data);
      },
    })
  );

  editor.children = children;

  return { editor, store, fallbackData };
};
