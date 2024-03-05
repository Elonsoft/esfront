import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { useBoolean } from './useBoolean';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useBoolean',
  parameters: {
    references: ['useBoolean']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [on, toggle] = useBoolean(true);
    return (
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div>{on ? 'ON' : 'OFF'}</div>
        <Button color="primary" variant="contained" onClick={toggle}>
          Toggle
        </Button>
        <Button color="primary" variant="contained" onClick={() => toggle(true)}>
          set ON
        </Button>
        <Button color="primary" variant="contained" onClick={() => toggle(false)}>
          set OFF
        </Button>
      </Box>
    );
  }
};
