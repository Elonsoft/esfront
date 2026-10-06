import { p } from '../../testing';

import { createEditor, Editor } from 'slate';

import { withNodeId } from './ids';
import { getNodeId } from './utils';

import { afterEach, describe, expect, it, vi } from 'vitest';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

const idOf = (node: unknown) => {
  return (node as { id?: unknown }).id;
};

describe('getNodeId', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns a v4 UUID', () => {
    expect(getNodeId()).toMatch(UUID);
  });

  // A counter would restart on every load and reissue ids the saved document already carries.
  it('does not repeat itself', () => {
    const ids = new Set(Array.from({ length: 1000 }, getNodeId));

    expect(ids.size).toBe(1000);
  });

  // `randomUUID` is only exposed in a secure context, unlike `getRandomValues`.
  it('falls back to getRandomValues outside a secure context', () => {
    // Fixed bytes rather than the real generator, which the stub below would shadow.
    const getRandomValues = vi.fn((bytes: Uint8Array) => bytes.fill(0x07));

    vi.stubGlobal('crypto', { getRandomValues });

    expect(getNodeId()).toBe('07070707-0707-4707-8707-070707070707');
    expect(getRandomValues).toHaveBeenCalled();
  });

  it('falls back to Math.random when there is no web crypto', () => {
    vi.stubGlobal('crypto', undefined);

    const ids = new Set(Array.from({ length: 1000 }, getNodeId));

    expect(Array.from(ids).every((id) => UUID.test(id))).toBe(true);
    expect(ids.size).toBe(1000);
  });
});

describe('withNodeId', () => {
  it('assigns an id to an inserted block', () => {
    const editor = withNodeId(createEditor());

    editor.children = [];
    editor.insertNodes(p('one'), { at: [0] });

    expect(idOf(editor.children[0])).toMatch(UUID);
  });

  it('gives two inserted blocks different ids', () => {
    const editor = withNodeId(createEditor());

    editor.children = [];
    editor.insertNodes(p('one'), { at: [0] });
    editor.insertNodes(p('two'), { at: [1] });

    expect(idOf(editor.children[0])).not.toBe(idOf(editor.children[1]));
  });

  it('leaves the ids of existing nodes alone', () => {
    const editor = withNodeId(createEditor());

    // The id is not declared on the test element types, the same way an application that never reads
    // its ids would leave them undeclared.
    const existing = { ...p('one'), id: 'kept' };

    editor.children = [existing];
    Editor.normalize(editor, { force: true });

    expect(idOf(editor.children[0])).toBe('kept');
  });
});
