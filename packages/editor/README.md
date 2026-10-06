# @esfront/editor

A set of [slate](https://docs.slatejs.org) plugins for building a rich text editor.

The package is headless. It ships no components: the toolbar, the element renderers and the node schemas belong to the
application, because they are where the shape of a document is decided. The `Editor` story in the Storybook of
`@esfront/react` shows one way to assemble them.

## Credits

The lists plugin is a fork of [`@prezly/slate-lists`](https://github.com/prezly/slate/tree/main/packages/slate-lists) by
Prezly (MIT), and keeps its design: the schema registry, the list / list item / list item text structure, and the names
of most of its helpers and transforms. See [NOTICE.md](./NOTICE.md) for the license.

## Installation

Install the correct versions of each package, which are listed by the command:

```
npm info "@esfront/editor@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```
npx install-peerdeps --dev @esfront/editor
```

## Usage

### Declaring the document shape

Slate resolves `Element` and `Text` through module augmentation, which can only happen once per application. That is why
this package never augments them: doing so would force every consumer onto one fixed set of node types. Declare your own
instead:

```ts
import { BaseEditor as SlateBaseEditor, Descendant } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

type ParagraphElement = { type: 'paragraph'; children: Descendant[] };
type LinkElement = { type: 'link'; url?: string; children: Descendant[] };

declare module 'slate' {
  interface CustomTypes {
    Editor: SlateBaseEditor & ReactEditor & HistoryEditor;
    Element: ParagraphElement | LinkElement;
    Text: { text: string; bold?: boolean };
  }
}
```

### Schemas

Because the package does not know your element types, each plugin takes a schema of predicates and factories that tells
it how to recognise and create the nodes it works with:

```ts
import { BaseSchema } from '@esfront/editor';
import { Element } from 'slate';

const BASE_SCHEMA: BaseSchema = {
  isDefaultTextNode: (node) => Element.isElementType(node, 'paragraph'),
  getDefaultTextNodeType: () => 'paragraph',
  createDefaultTextNode: (props) => ({ children: [{ text: '' }], ...props, type: 'paragraph' }),
};
```

### Plugins

Each plugin registers its schema against the editor instance and returns the editor, so they compose the way slate
plugins normally do. `withBase` is a prerequisite of the others.

```ts
import { withBase, withLinks, withLists, withNodeId } from '@esfront/editor';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { withReact } from 'slate-react';

const editor = withLists(LISTS_SCHEMA)(
  withLinks(LINKS_SCHEMA)(withBase(BASE_SCHEMA)(withNodeId(withReact(withHistory(createEditor())))))
);
```

| Plugin                   | What it adds                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `withBase`               | The default text node every other plugin falls back to.                                  |
| `withLinks`              | Links as inlines, auto-linking on paste and on completing a url, removal of empty links. |
| `withLists`              | Lists, list items, the transforms that nest them, and the normalizations below.          |
| `withNodeId`             | A UUID on every inserted block, so ids survive a reload.                                 |
| `withListsSchema`        | The lists schema on its own, without the normalizations.                                 |
| `withListsNormalization` | The lists normalizations on their own.                                                   |

`withLists` is `withListsSchema` followed by `withListsNormalization`. Use the two separately only to order the
normalizations differently against another plugin's.

### List normalization

The lists transforms rely on an invariant: a list contains nothing but list items, a list item contains its text node
followed by at most one nested list, and none of those three ever appears outside its parent. `withListsNormalization`
enforces it, which is what lets a pasted or otherwise malformed document recover instead of staying broken.

Each rule makes one change and returns, letting slate normalize again, so a badly nested subtree is repaired over
several passes.

| Rule                            | What it enforces                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| `normalizeOrphanListItem`       | A list item outside a list is unwrapped.                                              |
| `normalizeOrphanListItemText`   | A list item text outside a list item becomes a default text node.                     |
| `normalizeOrphanNestedList`     | A nested list is moved to the one slot it belongs in, merging with any already there. |
| `normalizeListChildren`         | A list holds only list items; an empty list is removed.                               |
| `normalizeListItemChildren`     | A list item holds its text and at most one nested list, in that order.                |
| `normalizeListItemTextChildren` | A list item text holds text and inlines only.                                         |
| `normalizeSiblingLists`         | Two adjacent lists of the same type are merged into one.                              |

### Editors

`BaseEditor`, `LinksEditor` and `ListsEditor` are namespaces of helpers that take the editor as their first argument.

Note that `BaseEditor` is unrelated to slate's own `BaseEditor` type, which is why the snippets above import the latter
under an alias.

```ts
import { BaseEditor, ListsEditor } from '@esfront/editor';

BaseEditor.toggleMark(editor, 'bold');
ListsEditor.toggleList(editor, 'ul');
```

`BaseEditor.toggleBlock` and `BaseEditor.getTextBlocks` only consider top level blocks. The text of a list item is left
alone on purpose: changing its type would break the structure the lists plugin expects.

The lists transforms come in two tiers. The location based ones act on everything the selection covers and are what a
toolbar or a key handler should call; the path based ones act on one list item and are the building blocks underneath.

| Transform                               | What it does                                               |
| --------------------------------------- | ---------------------------------------------------------- |
| `toggleList(editor, type, at?)`         | Wraps into a list, switches its type, or unwraps it.       |
| `wrapInList(editor, type, at?)`         | Wraps the convertible top level blocks into one list.      |
| `unwrapList(editor, at?)`               | Lifts every list item out of its list.                     |
| `setListType(editor, type, at?)`        | Changes the type of the lists the selection sits in.       |
| `increaseDepth(editor, at?)`            | Nests every selected list item under its previous sibling. |
| `decreaseDepth(editor, at?)`            | Lifts every selected list item one level out.              |
| `splitListItem(editor, at?)`            | Breaks the current list item in two at the caret.          |
| `increaseListItemDepth(editor, path)`   | The single item form of `increaseDepth`.                   |
| `decreaseListItemDepth(editor, path)`   | The single item form of `decreaseDepth`.                   |
| `moveListItemsToAnotherList(editor, …)` | Appends one list's items to another's.                     |
| `moveListToListItem(editor, …)`         | Makes a list the nested list of a list item.               |
| `mergeListWithPreviousSiblingList(…)`   | Merges a list into the sibling list before it.             |

`wrapInList` converts only top level blocks the schema reports through `isConvertibleToListTextNode`. A block nested in
another structure — a quote, a table cell — is left alone: a list there would belong to that structure, not to the
document.

`ListsEditor.getSelectedListItems` is what the depth transforms use to decide their targets. It takes the list items
whose own text the location touches, so a caret inside a nested item does not also select every ancestor item, and then
drops any item contained in another, because moving the outer one already carries the inner.
`ListsEditor.getSelectedLists` returns the lists owning those items, which is what `setListType` and `toggleList` act
on.

Lists of different types may be nested in each other, so every type change is scoped to the lists the selection is in:
the list around a nested one, and the sublists hanging off it, keep their own types. Promoting a sublist out of its list
with `decreaseDepth` likewise leaves its type as it was.

### Key handlers

Key handling comes as middleware, each of which decides whether to delegate to the rest of the chain. `composeKeyDown`
wires them up in order, outermost first:

```ts
import { composeKeyDown, onBaseKeyDown, onListsKeyDown } from '@esfront/editor';

const onKeyDown = composeKeyDown(editor, [onListsKeyDown, onBaseKeyDown]);
```

| Handler          | Keys it claims                                                                                                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `onListsKeyDown` | `Tab` and `Shift+Tab` change the depth, `Enter` splits a list item or lifts an empty one out, `Backspace` at the start of an item outdents it. |
| `onBaseKeyDown`  | `Enter` starts a new default text node, `Shift+Enter` inserts a soft break.                                                                    |

`Backspace` is claimed only where deleting backward would break the list structure, which
`ListsEditor.isDeleteBackwardAllowed` decides. At the start of a list item the merge would pull the item's text into the
enclosing list, so the key outdents instead.

## Serialization

The package does not serialize. A document is a plain slate value, and turning it into HTML, markdown or anything else
is left to the application.
