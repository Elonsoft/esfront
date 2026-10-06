import { NodeEntry } from 'slate';

import { pickSubtreesRoots } from './pick-subtrees-roots';

import { li } from '../../../testing';

import { describe, expect, it } from 'vitest';

const entry = (path: number[]): NodeEntry => [li(), path];

describe('pickSubtreesRoots', () => {
  it('drops entries nested inside another entry', () => {
    const outer = entry([0, 1]);
    const inner = entry([0, 1, 1, 0]);

    expect(pickSubtreesRoots([outer, inner])).toEqual([outer]);
  });

  it('keeps siblings', () => {
    const first = entry([0, 0]);
    const second = entry([0, 1]);

    expect(pickSubtreesRoots([first, second])).toEqual([first, second]);
  });

  it('keeps an entry whose path merely starts the same', () => {
    const first = entry([0, 1]);
    const second = entry([0, 10]);

    expect(pickSubtreesRoots([first, second])).toEqual([first, second]);
  });
});
