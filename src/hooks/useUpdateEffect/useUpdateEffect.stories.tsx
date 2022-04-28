import { useEffect, useState } from 'react';

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useUpdateEffect } from './useUpdateEffect';

export const Demo: Story = () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState<number | null>(null);
  const [updateEffectCount, setUpdateEffectCount] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setEffectCount(count);
    }, 1000);
  }, [count]);

  useUpdateEffect(() => {
    setTimeout(() => {
      setUpdateEffectCount(count);
    }, 1000);
  }, [count]);

  return (
    <>
      <Typography component="div" variant="body100">
        Count: {count}
      </Typography>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <Typography component="div" variant="body100">
        Count from effect: {effectCount}
      </Typography>
      <Typography component="div" variant="body100">
        Count from update effect: {updateEffectCount}
      </Typography>
    </>
  );
};
