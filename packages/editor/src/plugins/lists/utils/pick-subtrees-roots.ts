import { Node, NodeEntry, Path } from 'slate';

/**
 * Reduces a set of node entries to the ones that are not nested inside another entry of the set.
 *
 * A selection that spans a nested list matches both the outer list items and the inner ones. A
 * depth change must only be applied to the outermost of those: moving an ancestor already carries
 * its descendants along, so applying it to both would move the same content twice.
 */
export const pickSubtreesRoots = <T extends Node>(entries: NodeEntry<T>[]): NodeEntry<T>[] => {
  return entries.filter(([, path]) => {
    return !entries.some(([, otherPath]) => {
      return Path.isAncestor(otherPath, path);
    });
  });
};
