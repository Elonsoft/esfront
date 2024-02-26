/* eslint-disable storybook/default-exports */

import { useRef, useState } from 'react';

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useResizeObserver } from './useResizeObserver';

export const Demo: Story = () => {
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
};
