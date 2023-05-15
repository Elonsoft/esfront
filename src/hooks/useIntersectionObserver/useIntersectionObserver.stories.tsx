import { useRef, useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useIntersectionObserver } from './useIntersectionObserver';

export const Demo: Story = () => {
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
        borderRadius: '4px'
      }}
    >
      <Typography
        sx={{ position: 'sticky', top: 0, backgroundColor: 'monoB.500', padding: '4px 8px' }}
        component="div"
        variant="body100"
      >
        Bottom element is intersecting: {isIntersecting.toString()}
      </Typography>
      <Box sx={{ height: '600px' }} />
      <Box ref={ref} sx={{ height: '64px', backgroundColor: 'primary.300' }} />
    </Box>
  );
};
