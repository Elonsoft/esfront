import { Editor, Location, Range } from 'slate';

/**
 * Prepares a location for use as the `at` of a node query.
 *
 * A range that ends at the very start of a node counts that node as selected, which is rarely what a
 * user dragging a selection means; `Editor.unhangRange` trims it. Anything that is not a range has
 * nothing to trim and passes straight through.
 */
export const normalizeLocation = (editor: Editor, at: Location): Location => {
  return Range.isRange(at) ? Editor.unhangRange(editor, at) : at;
};
