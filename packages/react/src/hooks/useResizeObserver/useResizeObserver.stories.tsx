import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useResizeObserver } from './useResizeObserver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useResizeObserver',
  parameters: {
    references: ['useResizeObserver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDetailsElement | null>(null);

    useResizeObserver(ref, () => {
      if (ref.current) {
        setHeight(ref.current.clientHeight);
      }
    });

    return (
      <Typography variant="body100">
        <Typography gutterBottom>Height of the element is {height} PX.</Typography>
        <details ref={ref}>
          <summary>Click here in order to change element&apos;s height.</summary>
          <div>
            <code>ResizeObserver</code> is triggered upon this text&apos;s visibility change.
          </div>
        </details>
      </Typography>
    );
  },
};
