import { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { useScrollDirection } from './useScrollDirection';

type Args = { throttleTimeout?: number };

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useScrollDirection',
  parameters: {
    references: ['useScrollDirection'],
    docs: {
      story: { inline: false },
    },
  },
  argTypes: {
    throttleTimeout: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args) {
    const scrollDirection = useScrollDirection({ throttleTimeout: args.throttleTimeout });

    return (
      <>
        <Typography sx={{ position: 'fixed' }} variant="overline">
          {scrollDirection ? scrollDirection : `the page hasn't been scrolled`}
        </Typography>
        <Box sx={{ height: '150vh' }} />
      </>
    );
  },
};
