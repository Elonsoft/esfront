import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useEvent } from './useEvent';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useEvent',
  parameters: {
    references: ['useEvent']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    function Chat() {
      const onClick = useEvent(() => {
        setMessage(text);
        setCount(count + 1);
      });

      return (
        <Button sx={{ width: '220px' }} onClick={onClick}>
          Click {!!count && count}
        </Button>
      );
    }

    return (
      <>
        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextField fullWidth label="Value" size="40" value={text} onChange={(event) => setText(event.target.value)} />
          <Chat />
        </Box>
        <Box sx={{ margin: '8px' }}>Text: {text}</Box>
        <Box sx={{ margin: '8px' }}>Message: {message}</Box>
      </>
    );
  }
};
