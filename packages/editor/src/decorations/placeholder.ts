import { Editor, Element, NodeEntry, Path, Range } from 'slate';

import { BaseEditor } from '../plugins/base';

export interface PlaceholderContext {
  /** The empty element a placeholder is being asked for. */
  node: Element;
  /** The path of that element. */
  path: Path;
  /** Whether the caret sits inside it, which is how a placeholder is limited to the active block. */
  isCursorInside: boolean;
}

export interface PlaceholderOptions {
  /**
   * Returns the placeholder to show on the empty element, or `undefined` for none. Returning a value
   * per element type is what gives a heading a different prompt from a list item.
   */
  getPlaceholder: (context: PlaceholderContext) => string | undefined;
  /**
   * The property the placeholder is set on, which is also the one to read in `renderLeaf`.
   *
   * @default 'placeholder'
   */
  key?: string;
}

/**
 * Builds a `decorate` function that marks empty blocks with a placeholder.
 *
 * Decorations rather than rendered props, because slate splits the text of a block around them,
 * which gives `renderLeaf` a zero width leaf at the start of the block to hang the prompt off:
 *
 * ```tsx
 * const decorate = createPlaceholderDecorate(editor, {
 *   getPlaceholder: ({ node, isCursorInside }) =>
 *     node.type === 'paragraph' ? (isCursorInside ? 'Type something' : undefined) : node.type,
 * });
 *
 * <Editable decorate={decorate} renderLeaf={renderLeaf} />;
 * ```
 */
export const createPlaceholderDecorate = (editor: Editor, options: PlaceholderOptions) => {
  const { getPlaceholder, key = 'placeholder' } = options;

  return ([node, path]: NodeEntry): Range[] => {
    // Only blocks that hold text directly: a container such as a list is empty by the same measure,
    // but its path is not a position a decoration can sit at.
    if (!BaseEditor.isTextBlock(editor, node) || Editor.string(editor, path) !== '') {
      return [];
    }

    const { selection } = editor;
    const isCursorInside = !!selection && Range.isCollapsed(selection) && Range.includes(selection, path);
    const placeholder = getPlaceholder({ node, path, isCursorInside });

    if (placeholder === undefined) {
      return [];
    }

    const point = { path, offset: 0 };

    // A decoration carries whatever properties it is given through to the leaf, which `Range` itself
    // has no room for.
    return [{ anchor: point, focus: point, [key]: placeholder } as Range];
  };
};
