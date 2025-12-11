import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useForceUpdate } from './useForceUpdate';

import { Button } from '../../components/Button';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useForceUpdate',
  parameters: {
    references: ['useForceUpdate'],
  },
};

export default meta;

type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const update = useForceUpdate();

    const date = useRef(new Date(0).getTime());
    const isFirst = useRef(true);

    if (isFirst.current) {
      isFirst.current = false;
    } else {
      date.current = new Date().getTime();
    }

    return (
      <>
        <Button color="primary" size="400" variant="contained" onClick={update}>
          Update
        </Button>
        <div className="body200 mt-8">Time: {date.current}</div>
      </>
    );
  },
};
