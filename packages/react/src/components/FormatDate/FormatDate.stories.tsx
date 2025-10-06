import { Controls, Description, Markdown, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { Meta, StoryObj } from '@storybook/react-vite';

import requirements from './FormatDate.stories.requirements.md?raw';
import { FormatDate } from '.';

import { ReferencesList } from '../../../.storybook/components/ReferencesList';

const meta: Meta<typeof FormatDate> = {
  tags: ['autodocs'],
  component: FormatDate,
  argTypes: {
    children: {
      control: { type: 'date' },
    },
    formatString: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: '2021-01-30T13:00:00.000Z',
    format: 'fullDateTime',
  },
  parameters: {
    references: ['DateAdapterProvider', 'FormatDate'],
    docs: {
      page: () => {
        // TODO: Simplify this part / make it generic.
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />
            <Markdown>{requirements}</Markdown>
            <ReferencesList />
          </>
        );
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormatDate>;

export const Demo: Story = {
  render: (args) => {
    return <FormatDate {...args} />;
  },
};
