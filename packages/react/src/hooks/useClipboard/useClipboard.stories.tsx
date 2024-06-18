import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useClipboard } from './useClipboard';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useClipboard',
  parameters: {
    references: ['useClipboard'],
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const { writeText, readText, isReadSupported } = useClipboard();

    const [value, setValue] = useState('');

    const onCopy = () => {
      writeText(value);
    };

    const onPaste = () => {
      readText().then((data) => {
        setValue(data);
      });
    };

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
        <TextField fullWidth label="Value" size="40" value={value} onChange={(event) => setValue(event.target.value)} />
        <Button color="primary" size="400" variant="contained" onClick={onCopy}>
          Copy
        </Button>
        {isReadSupported && (
          <Button color="primary" size="400" variant="contained" onClick={onPaste}>
            Paste
          </Button>
        )}
      </Box>
    );
  },
};
