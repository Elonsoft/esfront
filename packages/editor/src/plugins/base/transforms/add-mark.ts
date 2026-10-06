import { Editor } from 'slate';

/**
 * Applies the given mark to the text at the current selection.
 */
export const addMark = (editor: Editor, mark: string, value: unknown = true) => {
  editor.addMark(mark, value);
};
