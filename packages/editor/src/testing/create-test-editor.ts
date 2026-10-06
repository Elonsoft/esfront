import { createEditor, Descendant, Editor, Range } from 'slate';

import { BASE_SCHEMA, LISTS_SCHEMA } from './schema';

import { withBase } from '../plugins/base';
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
