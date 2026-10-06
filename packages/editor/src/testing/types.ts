import { BaseEditor as SlateBaseEditor, Descendant } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

/**
 * The element types the demo and the tests use. The library itself knows nothing about them: it
 * reaches every node through the schemas declared in `schema.ts`.
 */
export enum ElementType {
  PARAGRAPH = 'paragraph',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  ORDERED_LIST = 'ol',
  UNORDERED_LIST = 'ul',
  LIST_ITEM = 'list-item',
  LIST_ITEM_TEXT = 'list-item-text',
  LINK = 'link',
  FILE = 'file',
}

export type EditorText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  lineThrough?: boolean;
  // A mark does not have to be on or off; these hold a value, which is what `getMarkValue` and the
  // `value` argument of `toggleMark` exist for.
  color?: string;
  backgroundColor?: string;
};

export type ParagraphElement = { type: ElementType.PARAGRAPH; children: Descendant[] };

export type HeadingElement = {
  type: ElementType.H1 | ElementType.H2 | ElementType.H3 | ElementType.H4 | ElementType.H5 | ElementType.H6;
  children: Descendant[];
};

export type OrderedListElement = { type: ElementType.ORDERED_LIST; children: Descendant[] };

export type UnorderedListElement = { type: ElementType.UNORDERED_LIST; children: Descendant[] };

export type ListItemElement = { type: ElementType.LIST_ITEM; children: Descendant[] };

export type ListItemTextElement = { type: ElementType.LIST_ITEM_TEXT; children: Descendant[] };

export type LinkElement = { type: ElementType.LINK; url?: string; children: Descendant[] };

/**
 * What an upload resolves to: a whole API response rather than just an id, because the parts of it a view
 * needs — a url to render, say — are not the part the document keeps.
 */
export type UploadedFile = { id: string; name: string; type: string; url: string };

/**
 * A void block whose payload is uploaded separately. It holds the `entityId` the state is keyed by, and
 * the identifier the upload resolved to once there is one.
 */
export type FileElement = {
  type: ElementType.FILE;
  entityId: string;
  /**
   * The whole response the upload answered with. Kept on the node so that a saved document can be
   * rendered again without asking the server what its files are.
   */
  uploaded?: UploadedFile;
  children: EditorText[];
};

export type EditorElement =
  | ParagraphElement
  | HeadingElement
  | OrderedListElement
  | UnorderedListElement
  | ListItemElement
  | ListItemTextElement
  | LinkElement
  | FileElement;

// Slate resolves `Element` and `Text` through module augmentation, so the document shape can only
// be declared once per application. That is why `@esfront/editor` never ships an augmentation of
// its own: it would force every consumer onto these exact node types. It is also why the demo and
// the tests share this one declaration instead of each bringing their own.
declare module 'slate' {
  interface CustomTypes {
    Editor: SlateBaseEditor & ReactEditor & HistoryEditor;
    Element: EditorElement;
    Text: EditorText;
  }
}
