import { useEffect, useState } from 'react';

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useLatest } from './useLatest';

export const Demo: Story = () => {
  const [count, setCount] = useState(0);

  const latestCallback = useLatest(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    const onClick = () => {
      latestCallback.current();
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return <Typography variant="body100">Count of clicks on this page: {count}</Typography>;
};
