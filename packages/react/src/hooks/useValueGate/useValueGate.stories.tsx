import { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import { useValueGate } from './useValueGate';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useValueGate',
  parameters: {
    references: ['useValueGate'],
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [value, setValue] = useState(0);
    const [signal, setSignal] = useState(false);

    const [rising, setRising] = useState(false);
    const [falling, setFalling] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setValue(new Date().getTime());
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    const gatedValue = useValueGate(value, signal, { rising, falling });

    return (
      <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <FormControlLabel
            control={<Checkbox checked={signal} onChange={(event) => setSignal(event.target.checked)} />}
            label="Signal"
          />

          <FormControlLabel
            control={<Checkbox checked={rising} onChange={(event) => setRising(event.target.checked)} />}
            label="Rising"
          />

          <FormControlLabel
            control={<Checkbox checked={falling} onChange={(event) => setFalling(event.target.checked)} />}
            label="Falling"
          />
        </Box>

        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Gated value: {gatedValue}
        </Typography>
      </div>
    );
  },
};
