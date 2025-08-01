import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';

import { useSessionStorage } from './useSessionStorage';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useSessionStorage',
  parameters: {
    references: ['useSessionStorage'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, update, remove] = useSessionStorage('useSessionStorage', '');

    return (
      <div sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '360px' }}>
        <TextField
          fullWidth
          aria-label="SessionStorage"
          helperText="This input's value is saved inside the sessionStorage in 'useSessionStorage' key."
          size="40"
          value={value || ''}
          onChange={(event) => update(event.target.value)}
        />
        <Button color="primary" size="400" variant="contained" onClick={() => remove()}>
          Remove
        </Button>
      </div>
    );
  },
};
