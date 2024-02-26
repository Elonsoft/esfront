/* eslint-disable storybook/default-exports */

import { useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useClipboard } from './useClipboard';

export const Demo: Story = () => {
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
      <Button size="32" variant="contained" onClick={onCopy}>
        Copy
      </Button>
      {isReadSupported && (
        <Button size="32" variant="contained" onClick={onPaste}>
          Paste
        </Button>
      )}
    </Box>
  );
};
