import { useState } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react-vite';

import { Descendant } from 'slate';

import { Editor } from './Editor';
import { DEFAULT_LABELS, LABELS_RU } from './Editor.labels';
import { createFakeUploader } from './fake-uploader';

import { ElementType } from '../testing';

import './Editor.stories.scss';
import { Button } from '@esfront/react';

const meta: Meta<typeof Editor> = {
  title: 'Editor/Editor',
  component: Editor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          'A demonstration of the plugins `@esfront/editor` ships.',
          '',
          'The toolbar, the element renderers and the node schemas are deliberately part of the story rather than',
          'the package: they are where an application decides what its documents look like.',
        ].join('\n'),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Editor>;

const INITIAL_VALUE: Descendant[] = [
  {
    type: ElementType.H2,
    children: [{ text: 'A heading' }],
  },
  {
    type: ElementType.PARAGRAPH,
    children: [
      { text: 'Text with ' },
      { text: 'bold', bold: true },
      { text: ', ' },
      { text: 'italic', italic: true },
      { text: ' and ' },
      { text: 'struck through', lineThrough: true },
      { text: ' marks, plus a ' },
      { type: ElementType.LINK, url: 'https://example.com', children: [{ text: 'link' }] },
      { text: '.' },
    ],
  },
  {
    type: ElementType.UNORDERED_LIST,
    children: [
      {
        type: ElementType.LIST_ITEM,
        children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A list item' }] }],
      },
      {
        type: ElementType.LIST_ITEM,
        children: [
          { type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A list item with a nested list' }] },
          {
            type: ElementType.UNORDERED_LIST,
            children: [
              {
                type: ElementType.LIST_ITEM,
                children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A nested list item' }] }],
              },
              {
                type: ElementType.LIST_ITEM,
                children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Another nested list item' }] }],
              },
            ],
          },
        ],
      },
      {
        type: ElementType.LIST_ITEM,
        children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A last list item' }] }],
      },
    ],
  },
];

// Every string the demo renders comes from the `labels` prop, so a locale is a different set of
// labels rather than a different component.
const getLabels = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru' ? LABELS_RU : DEFAULT_LABELS;
};

// Built once rather than per render: `withEntities` captures its options when the editor is created, so
// a fresh uploader on every render would not be the one actually in use.
const UPLOAD = createFakeUploader();
const UPLOAD_FAILING = createFakeUploader({ fail: true });

export const Demo: Story = {
  args: {
    defaultValue: INITIAL_VALUE,
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};

/**
 * `onChange` fires for document changes only. Moving the caret around leaves the value untouched.
 */
export const Value: Story = {
  args: {
    defaultValue: INITIAL_VALUE,
  },
  render: (args, context) => {
    const [value, setValue] = useState<Descendant[]>(args.defaultValue ?? []);

    return (
      <div>
        <Editor {...args} labels={getLabels(context)} onChange={setValue} />
        <pre className="mt-16">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  },
};

/**
 * The lists plugin keeps nesting under keyboard control: `Tab` and `Shift+Tab` change the depth of
 * the current list item, `Enter` splits it, and `Enter` on an empty item lifts it out of the list.
 */
export const Nesting: Story = {
  args: {
    defaultValue: [
      {
        type: ElementType.ORDERED_LIST,
        children: [
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Press Tab on the item below' }] }],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'This one' }] }],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Then Shift+Tab to move it back' }] }],
          },
        ],
      },
    ],
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};

/**
 * A list may nest one of the other type. Changing a type is scoped to the lists the selection sits
 * in, so switching the sublist below leaves the list around it alone, and vice versa.
 */
export const MixedNesting: Story = {
  args: {
    defaultValue: [
      {
        type: ElementType.UNORDERED_LIST,
        children: [
          {
            type: ElementType.LIST_ITEM,
            children: [
              { type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A bulleted item' }] },
              {
                type: ElementType.ORDERED_LIST,
                children: [
                  {
                    type: ElementType.LIST_ITEM,
                    children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A numbered sub item' }] }],
                  },
                  {
                    type: ElementType.LIST_ITEM,
                    children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'Another numbered sub item' }] }],
                  },
                ],
              },
            ],
          },
          {
            type: ElementType.LIST_ITEM,
            children: [{ type: ElementType.LIST_ITEM_TEXT, children: [{ text: 'A last bulleted item' }] }],
          },
        ],
      },
    ],
  },
  render: (args, context) => {
    return <Editor {...args} labels={getLabels(context)} />;
  },
};

/**
 * Attaching a file inserts a void block holding nothing but a reference. Use the toolbar button, or drop
 * a file onto the editable.
 *
 * Watch the value below while it uploads. The file name and the progress never appear in it — they live
 * in the entity store beside the document — and the value stays still until the upload finishes, at which
 * point the whole response lands on the node — which is what lets a saved document be rendered again.
 */
export const Uploads: Story = {
  args: {
    defaultValue: [{ type: ElementType.PARAGRAPH, children: [{ text: 'Attach a file, or drop one here.' }] }],
  },
  render: (args, context) => {
    const [value, setValue] = useState<Descendant[]>(args.defaultValue ?? []);

    return (
      <div>
        <Editor {...args} labels={getLabels(context)} upload={UPLOAD} onChange={setValue} />
        <pre className="mt-16">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  },
};

/**
 * The same, with an uploader that always fails. The block reports the failure and offers to try again,
 * while the value below never gains an `uploaded`: there is nothing to record until an upload succeeds.
 */
export const UploadFailure: Story = {
  args: {
    defaultValue: [{ type: ElementType.PARAGRAPH, children: [{ text: 'Attach a file to watch it fail.' }] }],
  },
  render: (args, context) => {
    const [value, setValue] = useState<Descendant[]>(args.defaultValue ?? []);

    return (
      <div>
        <Editor {...args} labels={getLabels(context)} upload={UPLOAD_FAILING} onChange={setValue} />
        <pre className="mt-16">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  },
};

/**
 * The round trip the arrangement exists for. Attach a file, then press the button: the value is put
 * through `JSON.stringify` and a brand new editor is built from it, with an empty store.
 *
 * The file still renders, because the response is on the node and `restoreEntities` puts it back into the
 * store on load. Nothing re-uploads, and the view reads the store either way — it never needs to know
 * whether a file arrived this session or last.
 */
export const Restore: Story = {
  args: {
    defaultValue: [{ type: ElementType.PARAGRAPH, children: [{ text: 'Attach a file, then reload below.' }] }],
  },
  render: (args, context) => {
    const [value, setValue] = useState<Descendant[]>(args.defaultValue ?? []);
    const [loaded, setLoaded] = useState<Descendant[]>(args.defaultValue ?? []);
    const [generation, setGeneration] = useState(0);

    return (
      <div>
        {/* A new key builds a new editor, and with it a new store — the same as a page load. */}
        <Editor
          {...args}
          key={generation}
          defaultValue={loaded}
          labels={getLabels(context)}
          upload={UPLOAD}
          onChange={setValue}
        />

        <Button
          className="mt-16"
          size="400"
          variant="outlined"
          onClick={() => {
            setLoaded(JSON.parse(JSON.stringify(value)) as Descendant[]);
            setGeneration((previous) => previous + 1);
          }}
        >
          Save and reload
        </Button>

        <pre className="mt-16">{JSON.stringify(value, null, 2)}</pre>
      </div>
    );
  },
};
