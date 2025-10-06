import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import Typography from '@mui/material/Typography';

import { useMutationObserver } from './useMutationObserver';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useMutationObserver',
  parameters: {
    references: ['useMutationObserver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [mutated, setMutated] = useState<string | null>(null);

    useMutationObserver(
      ref,
      (entries) => {
        setMutated(entries[0].attributeName);
      },
      {
        attributes: true,
      }
    );

    return (
      <div>
        <Button
          color="primary"
          size="400"
          variant="contained"
          onClick={() => {
            if (ref.current) {
              ref.current.setAttribute('id', 'useMutationObserver');
            }
          }}
        >
          Set ID
        </Button>
        <Typography ref={ref} component="div" marginTop="8px" variant="body100">
          Attribute mutated: <b>{mutated}</b>
        </Typography>
      </div>
    );
  },
};
