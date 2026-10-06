import { KeyboardEventHandler } from 'react';

import { Editor } from 'slate';

export type KeyDownMiddleware = (
  editor: Editor,
  next: KeyboardEventHandler<HTMLElement>
) => KeyboardEventHandler<HTMLElement>;

const noop: KeyboardEventHandler<HTMLElement> = () => {
  // The last handler in the chain has nothing left to delegate to.
};

/**
 * Chains key down handlers into a single one. The first middleware of the list runs first and
 * each middleware decides whether to delegate to the rest of the chain.
 *
 * ```ts
 * const onKeyDown = composeKeyDown(editor, [onListsKeyDown, onBaseKeyDown]);
 * ```
 */
export const composeKeyDown = (
  editor: Editor,
  middlewares: KeyDownMiddleware[],
  final: KeyboardEventHandler<HTMLElement> = noop
) => {
  return middlewares.reduceRight((next, middleware) => {
    return middleware(editor, next);
  }, final);
};
