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
      <TextField label="Value" value={value} onChange={(event) => setValue(event.target.value)} size="40" fullWidth />
      <Button variant="contained" size="32" onClick={onCopy}>
        Copy
      </Button>
      {isReadSupported && (
        <Button variant="contained" size="32" onClick={onPaste}>
          Paste
        </Button>
      )}
    </Box>
  );
};
