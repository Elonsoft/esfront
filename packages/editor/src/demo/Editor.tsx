import { ChangeEvent, MouseEvent, ReactNode, useMemo, useRef, useState } from 'react';

import { BaseSelection, createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, useSlate, withReact } from 'slate-react';

import { DEFAULT_LABELS, EditorLabels } from './Editor.labels';
import { ElementFile } from './ElementFile';

import { BASE_SCHEMA, ElementType, ENTITIES_SCHEMA, LINKS_SCHEMA, LISTS_SCHEMA, UploadedFile } from '../testing';
import {
  BaseEditor,
  composeKeyDown,
  createEntityStore,
  EntitiesEditor,
  EntityState,
  EntityUploader,
  isElementType,
  isValidHttpUrl,
  LinksEditor,
  ListsEditor,
  onBaseKeyDown,
  onListsKeyDown,
  withBase,
  withEntities,
  withLinks,
  withLists,
  withNodeId,
} from '..';

import {
  Button,
  Divider,
  IconAttachmentLineW500,
  IconFormatBoldFillW500,
  IconFormatClearFillW500,
  IconFormatHeader1FillW500,
  IconFormatHeader2FillW500,
  IconFormatHeader3FillW500,
  IconFormatItalicFillW500,
  IconFormatListBulletedLineW500,
  IconFormatListNumberedLineW500,
  IconFormatStrikethroughFillW500,
  IconFormatUnderlineFillW500,
  IconLinkLineW500,
  IconLinkOffLineW500,
  TextField,
  Tooltip,
  useEvent,
} from '@esfront/react';

export interface EditorProps {
  /** The initial document. Slate requires at least one node. */
  defaultValue?: Descendant[];
  /** Overrides for the toolbar labels. Every string the demo renders comes from here. */
  labels?: Partial<EditorLabels>;
  /** Called with the document whenever it changes. Selection-only changes are filtered out. */
  onChange?: (value: Descendant[]) => void;
  /** Uploads an attached file. Without one, attachments stay pending. */
  upload?: EntityUploader<UploadedFile>;
}

const EMPTY_VALUE: Descendant[] = [{ type: ElementType.PARAGRAPH, children: [{ text: '' }] }];

// Pressing a toolbar button must not move focus out of the editor, otherwise the selection the
// transform is about to act on is gone by the time the click lands.
const preventDefault = (event: MouseEvent<HTMLElement>) => {
  event.preventDefault();
};

const createRenderElement = (labels: EditorLabels) =>
  function RenderElement({ attributes, children, element }: RenderElementProps) {
    switch (element.type) {
      case ElementType.H1:
        return <h1 {...attributes}>{children}</h1>;
      case ElementType.H2:
        return <h2 {...attributes}>{children}</h2>;
      case ElementType.H3:
        return <h3 {...attributes}>{children}</h3>;
      case ElementType.H4:
        return <h4 {...attributes}>{children}</h4>;
      case ElementType.H5:
        return <h5 {...attributes}>{children}</h5>;
      case ElementType.H6:
        return <h6 {...attributes}>{children}</h6>;
      case ElementType.ORDERED_LIST:
        return <ol {...attributes}>{children}</ol>;
      case ElementType.UNORDERED_LIST:
        return <ul {...attributes}>{children}</ul>;
      case ElementType.LIST_ITEM:
        return <li {...attributes}>{children}</li>;
      case ElementType.LIST_ITEM_TEXT:
        return <div {...attributes}>{children}</div>;
      case ElementType.LINK:
        return (
          <a {...attributes} href={element.url}>
            {children}
          </a>
        );
      case ElementType.FILE:
        return (
          <ElementFile attributes={attributes} element={element} labels={labels}>
            {children}
          </ElementFile>
        );
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  let content: ReactNode = children;

  // Semantic elements rather than inline styles, so the theme keeps control of how a mark looks.
  if (leaf.bold) {
    content = <strong>{content}</strong>;
  }

  if (leaf.italic) {
    content = <em>{content}</em>;
  }

  if (leaf.underline) {
    content = <u>{content}</u>;
  }

  if (leaf.lineThrough) {
    content = <s>{content}</s>;
  }

  return <span {...attributes}>{content}</span>;
};

interface ToolbarButtonProps {
  children: ReactNode;
  label: string;
  pressed?: boolean;
  onClick: () => void;
}

const ToolbarButton = ({ children, label, pressed, onClick }: ToolbarButtonProps) => {
  return (
    <Tooltip placement="top" title={label}>
      <Button
        aria-label={label}
        aria-pressed={pressed}
        color={pressed ? 'mono-a' : 'tertiary'}
        size="400"
        type="button"
        variant="outlined"
        onClick={onClick}
        onMouseDown={preventDefault}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

interface BlockButtonProps {
  children: ReactNode;
  label: string;
  type: ElementType;
}

const BlockButton = ({ children, label, type }: BlockButtonProps) => {
  const editor = useSlate();

  const onClick = useEvent(() => {
    BaseEditor.toggleBlock(editor, type);
  });

  return (
    <ToolbarButton label={label} pressed={BaseEditor.isBlockActive(editor, type)} onClick={onClick}>
      {children}
    </ToolbarButton>
  );
};

interface MarkButtonProps {
  children: ReactNode;
  label: string;
  mark: string;
}

const MarkButton = ({ children, label, mark }: MarkButtonProps) => {
  const editor = useSlate();

  const onClick = useEvent(() => {
    BaseEditor.toggleMark(editor, mark);
  });

  return (
    <ToolbarButton label={label} pressed={BaseEditor.isMarkActive(editor, mark)} onClick={onClick}>
      {children}
    </ToolbarButton>
  );
};

interface ListButtonProps {
  children: ReactNode;
  label: string;
  type: ElementType.ORDERED_LIST | ElementType.UNORDERED_LIST;
}

const ListButton = ({ children, label, type }: ListButtonProps) => {
  const editor = useSlate();

  // The same lists `toggleList` would act on, so the pressed state and the click agree. A nested
  // list of another type than the one around it reports only its own type here.
  const lists = ListsEditor.getSelectedLists(editor);

  const onClick = useEvent(() => {
    ListsEditor.toggleList(editor, type);
  });

  return (
    <ToolbarButton
      label={label}
      pressed={lists.length > 0 && lists.every(([list]) => isElementType(list, type))}
      onClick={onClick}
    >
      {children}
    </ToolbarButton>
  );
};

/**
 * A demonstration of the plugins `@esfront/editor` ships. It is not exported from the package: the
 * toolbar, the element renderers and the schemas all belong to the application, because they are
 * where the document shape is decided.
 */
export const Editor = ({ defaultValue = EMPTY_VALUE, labels: labelsProp, onChange, upload }: EditorProps) => {
  const labels = useMemo(() => ({ ...DEFAULT_LABELS, ...labelsProp }), [labelsProp]);

  // One store per editor, holding what must not reach the document: the files and their progress.
  const [store] = useState(() => createEntityStore<EntityState<UploadedFile>>());

  const [editor] = useState(() => {
    // Entities outermost of the two that wrap `insertData`, so a dropped file is taken as a file before
    // the links plugin gets a chance to read the paste as text.
    const next = withEntities({ schema: ENTITIES_SCHEMA, store, upload })(
      withLists(LISTS_SCHEMA)(
        withLinks(LINKS_SCHEMA)(withBase(BASE_SCHEMA)(withNodeId(withReact(withHistory(createEditor())))))
      )
    );

    // A document arriving with entities already in it has them nowhere but on its nodes, so the store is
    // seeded from there. Done before the first paint rather than in an effect, so that a restored file
    // renders straight away.
    next.children = defaultValue;

    EntitiesEditor.restoreEntities(next, (node) => (node.type === ElementType.FILE ? node.uploaded : undefined));

    return next;
  });

  const renderElement = useMemo(() => createRenderElement(labels), [labels]);

  const [linkUrl, setLinkUrl] = useState<string | null>(null);
  const linkSelection = useRef<BaseSelection>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const onAttachClick = useEvent(() => {
    fileInput.current?.click();
  });

  const onAttachChange = useEvent((event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    event.target.value = '';

    editor.withoutNormalizing(() => {
      for (const file of files) {
        EntitiesEditor.insertEntityNode(editor, file);
      }
    });
  });

  const onKeyDown = useEvent(composeKeyDown(editor, [onListsKeyDown, onBaseKeyDown]));

  const onSlateChange = useEvent((value: Descendant[]) => {
    const isDocumentChange = editor.operations.some((operation) => operation.type !== 'set_selection');

    if (isDocumentChange) {
      onChange?.(value);
    }
  });

  const onLinkRequest = useEvent(() => {
    // Opening the form moves focus into the input, so the range the link should wrap is kept here.
    linkSelection.current = editor.selection;

    const link = LinksEditor.getLink(editor)?.[0];

    setLinkUrl((link && 'url' in link ? link.url : '') ?? '');
  });

  const onLinkCancel = useEvent(() => {
    setLinkUrl(null);
    ReactEditor.focus(editor);
  });

  const onLinkApply = useEvent(() => {
    const selection = linkSelection.current;

    setLinkUrl(null);

    if (!selection || linkUrl === null || !isValidHttpUrl(linkUrl)) {
      return;
    }

    editor.select(selection);
    LinksEditor.wrapLink(editor, linkUrl);
    ReactEditor.focus(editor);
  });

  const onUnlink = useEvent(() => {
    LinksEditor.unwrapLink(editor);
  });

  return (
    <Slate editor={editor} initialValue={defaultValue} onChange={onSlateChange}>
      <div className="es-editor-demo">
        <div aria-label={labels.toolbar} className="es-editor-demo__toolbar" role="toolbar">
          <BlockButton label={labels.paragraph} type={ElementType.PARAGRAPH}>
            <IconFormatClearFillW500 />
          </BlockButton>
          <BlockButton label={labels.heading1} type={ElementType.H1}>
            <IconFormatHeader1FillW500 />
          </BlockButton>
          <BlockButton label={labels.heading2} type={ElementType.H2}>
            <IconFormatHeader2FillW500 />
          </BlockButton>
          <BlockButton label={labels.heading3} type={ElementType.H3}>
            <IconFormatHeader3FillW500 />
          </BlockButton>

          <Divider flexItem orientation="vertical" />

          <MarkButton label={labels.bold} mark="bold">
            <IconFormatBoldFillW500 />
          </MarkButton>
          <MarkButton label={labels.italic} mark="italic">
            <IconFormatItalicFillW500 />
          </MarkButton>
          <MarkButton label={labels.underline} mark="underline">
            <IconFormatUnderlineFillW500 />
          </MarkButton>
          <MarkButton label={labels.lineThrough} mark="lineThrough">
            <IconFormatStrikethroughFillW500 container containerSize="24px" size="20px" />
          </MarkButton>

          <Divider flexItem orientation="vertical" />

          <ListButton label={labels.unorderedList} type={ElementType.UNORDERED_LIST}>
            <IconFormatListBulletedLineW500 />
          </ListButton>
          <ListButton label={labels.orderedList} type={ElementType.ORDERED_LIST}>
            <IconFormatListNumberedLineW500 />
          </ListButton>

          <Divider flexItem orientation="vertical" />

          <ToolbarButton label={labels.link} onClick={onLinkRequest}>
            <IconLinkLineW500 />
          </ToolbarButton>
          <ToolbarButton label={labels.unlink} onClick={onUnlink}>
            <IconLinkOffLineW500 />
          </ToolbarButton>

          <Divider flexItem orientation="vertical" />

          <ToolbarButton label={labels.fileAttach} onClick={onAttachClick}>
            <IconAttachmentLineW500 />
          </ToolbarButton>

          {/* Dropping or pasting a file onto the editable works without any of this; the button is
              here for the case where there is nothing to drop. */}
          <input
            ref={fileInput}
            multiple
            className="es-editor-demo__file-input"
            type="file"
            onChange={onAttachChange}
          />
        </div>

        {linkUrl !== null && (
          <form
            className="es-editor-demo__link"
            onSubmit={(event) => {
              event.preventDefault();
              onLinkApply();
            }}
          >
            <TextField
              autoFocus
              fullWidth
              label={labels.linkUrl}
              value={linkUrl}
              onChange={(event) => setLinkUrl(event.target.value)}
            />
            <Button size="400" type="submit" variant="outlined">
              {labels.linkApply}
            </Button>
            <Button color="tertiary" size="400" type="button" variant="outlined" onClick={onLinkCancel}>
              {labels.linkCancel}
            </Button>
          </form>
        )}

        <Editable
          className="es-editor-demo__editable"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={onKeyDown}
        />
      </div>
    </Slate>
  );
};
