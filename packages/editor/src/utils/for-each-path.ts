import { Editor, NodeEntry, Path } from 'slate';

export interface ForEachPathOptions {
  /** Visits the entries from the last to the first. */
  reverse?: boolean;
}

/**
 * Runs the callback once per entry, against a path that is still correct by the time its turn comes.
 *
 * Changing one node shifts the paths of the others, so the paths captured up front cannot be used as
 * they are. Each is tracked by a ref that follows the document, and an entry whose node is gone by
 * then is skipped.
 */
export const forEachPath = (
  editor: Editor,
  entries: NodeEntry[],
  apply: (path: Path) => void,
  options: ForEachPathOptions = {}
) => {
  const refs = entries.map(([, path]) => editor.pathRef(path));

  try {
    for (const ref of options.reverse ? [...refs].reverse() : refs) {
      if (ref.current) {
        apply(ref.current);
      }
    }
  } finally {
    refs.forEach((ref) => ref.unref());
  }
};
