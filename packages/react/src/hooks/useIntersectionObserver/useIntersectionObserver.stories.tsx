import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material-pigment-css/Box';

import { useIntersectionObserver } from './useIntersectionObserver';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useIntersectionObserver',
  parameters: {
    references: ['useIntersectionObserver'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    useIntersectionObserver(ref, (entries) => {
      setIntersecting(entries[0].isIntersecting);
    });

    return (
      <Box
        sx={{
          height: 'min(calc(100vh - 32px), 300px)',
          overflow: 'auto',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <Typography
          component="div"
          sx={{ position: 'sticky', top: 0, backgroundColor: 'monoB.500', padding: '4px 8px' }}
          variant="body100"
        >
          Bottom element is intersecting: {isIntersecting.toString()}
        </Typography>
        <Box sx={{ height: '600px' }} />
        <Box ref={ref} sx={{ height: '64px', backgroundColor: 'primary.300' }} />
      </Box>
    );
  },
};
