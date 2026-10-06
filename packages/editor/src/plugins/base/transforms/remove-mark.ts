import { Editor } from 'slate';

/**
 * Removes the given mark from the text at the current selection.
 */
export const removeMark = (editor: Editor, mark: string) => {
  editor.removeMark(mark);
};
