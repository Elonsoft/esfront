// List items have either 1 or 2 children, always in the following order:
// 0 - list item text
// 1 - nested list (optional)
//
// `withListsNormalization` is what keeps this invariant true; the transforms rely on it.
export const TEXT_PATH_INDEX = 0;
export const NESTED_LIST_PATH_INDEX = 1;

// Several transforms repeat until a condition clears. The bound keeps one that fails to make
// progress from hanging the editor.
export const MAX_LIST_ITERATIONS = 1000;
