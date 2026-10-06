import { createBaseTestEditor, cursor, ElementType, p } from '../../testing';

import { getLists, isListNode } from './checks';
import { toggleList, unwrapList, wrapInList } from './transforms';

import { describe, expect, it } from 'vitest';

// A lists helper called on an editor without `withLists` throws, naming the plugin to add. That is the
// contract for a direct call: a missing plugin is a wiring mistake, and failing loudly points at it.
// The exceptions are documented alongside the pieces that have to tolerate it — `onListsKeyDown`,
// which is one link of a handler chain, and `BlocksEditor`, which only needs lists for list types.
describe('lists helpers without the plugin', () => {
  const message = /withLists\(\)/;

  it('throws from a check', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => isListNode(editor, editor.children[0])).toThrow(message);
    expect(() => getLists(editor)).toThrow(message);
  });

  it('throws from a transform', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));

    expect(() => toggleList(editor, ElementType.UNORDERED_LIST)).toThrow(message);
    expect(() => wrapInList(editor, ElementType.UNORDERED_LIST)).toThrow(message);
    expect(() => unwrapList(editor)).toThrow(message);
  });
});
