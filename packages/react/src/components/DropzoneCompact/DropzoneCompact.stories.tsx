import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { DropzoneCompact } from '.';

import { Button } from '../Button';

const getText = (args: Args, context: StoryContext<unknown>) => {
  return args.children || (context.globals.locale === 'en' ? 'Drag over this area' : 'Переместите в эту область');
};

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Drag this button' : 'Переместите кнопку';
};

const meta: Meta<typeof DropzoneCompact> = {
  tags: ['autodocs'],
  component: DropzoneCompact,
  parameters: {
    references: ['DropzoneCompact'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropzoneCompact>;

export const Demo: Story = {
  render: (args, context) => {
    const onDrop = () => {
      console.info('DROP');
    };

    return (
      <>
        <Button disableTouchRipple draggable color="tertiary" size="500" variant="contained">
          {getButtonText(context)}
        </Button>
        <DropzoneCompact {...args} sx={{ marginTop: '16px' }} onDrop={onDrop}>
          {getText(args, context)}
        </DropzoneCompact>
      </>
    );
  },
};
