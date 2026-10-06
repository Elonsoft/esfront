import { KeyboardEvent } from 'react';

import { onListsKeyDown } from '../src';
import { createBaseTestEditor, createTestEditor, cursor, li, p, ul } from '../src/testing';

import { describe, expect, it, vi } from 'vitest';

const keyDown = (key: string, shiftKey = false) => {
  return { key, shiftKey, preventDefault: vi.fn() } as unknown as KeyboardEvent<HTMLElement>;
};

describe('onListsKeyDown', () => {
  it('claims Tab inside a list', () => {
    const editor = createTestEditor([ul(li('one'), li('two'))], cursor([0, 1, 0, 0]));
    const next = vi.fn();
    const event = keyDown('Tab');

    onListsKeyDown(editor, next)(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
    expect(editor.children).toEqual([ul(li('one', ul(li('two'))))]);
  });

  it('delegates a key it does not claim', () => {
    const editor = createTestEditor([ul(li('one'))], cursor([0, 0, 0, 0]));
    const next = vi.fn();

    onListsKeyDown(editor, next)(keyDown('a'));

    expect(next).toHaveBeenCalled();
  });

  it('delegates outside a list', () => {
    const editor = createTestEditor([p('one')], cursor([0, 0]));
    const next = vi.fn();

    onListsKeyDown(editor, next)(keyDown('Tab'));

    expect(next).toHaveBeenCalled();
  });

  // Every check in the handler reaches for the lists schema, which throws when the plugin is absent.
  // The handler is one link of a chain, so it has to fall through rather than take the chain down.
  it('delegates when the lists plugin is not registered', () => {
    const editor = createBaseTestEditor([p('one')], cursor([0, 0]));
    const next = vi.fn();

    expect(() => onListsKeyDown(editor, next)(keyDown('Tab'))).not.toThrow();
    expect(next).toHaveBeenCalled();
  });
});
