import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { useCookie } from './useCookie';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useCookie',
  parameters: {
    references: ['useCookie'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [cookie, updateCookie, removeCookie] = useCookie('useCookie', '');

    return (
      <div sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
        <TextField
          fullWidth
          aria-label="Cookie"
          helperText="This input's value is saved inside the 'useCookie' cookie."
          size="40"
          value={cookie}
          onChange={(event) => updateCookie(event.target.value)}
        />
        <Button color="primary" size="400" variant="contained" onClick={removeCookie}>
          Remove cookie
        </Button>
      </div>
    );
  },
};
