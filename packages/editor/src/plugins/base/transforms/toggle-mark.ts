import { Editor } from 'slate';

import { addMark } from './add-mark';
import { removeMark } from './remove-mark';

import { isMarkActive } from '../checks';

/**
 * Applies the given mark to the text at the current selection, or removes it when that exact value
 * is already applied.
 *
 * Passing a value is how a mark that holds one — a color, for instance — is switched from one
 * value to another: only a second toggle of the same value clears it.
 */
export const toggleMark = (editor: Editor, mark: string, value: unknown = true) => {
  if (isMarkActive(editor, mark, value)) {
    removeMark(editor, mark);
  } else {
    addMark(editor, mark, value);
  }
};
