import { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup } from '.';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof AvatarGroup> = {
  tags: ['autodocs'],
  component: AvatarGroup,
  parameters: {
    references: ['AvatarGroup'],
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Demo: Story = {
  render: (args) => {
    return (
      <AvatarGroup cutoutWidth={args.cutoutWidth} direction={args.direction} size={args.size} spacing={args.spacing}>
        <Avatar alt="John Sharp" src="./avatar/1.png" />
        <Avatar alt="John Sharp" src="./avatar/2.png" />
        <Avatar alt="John Sharp" src="./avatar/3.png" />
        <Avatar alt="John Sharp" src="./avatar/4.png" />
        <Avatar alt="John Sharp" src="./avatar/5.png" />
      </AvatarGroup>
    );
  },
};

/** We can use `AvatarGroup` not only with the `Avatar` component. */
export const Children: Story = {
  render: () => {
    return (
      <AvatarGroup cutoutWidth={5} size={56} spacing={-20}>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/1.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Sharp John">
          <Avatar alt="Sharp John" src="./avatar/2.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/3.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="Sharp John">
          <Avatar alt="Sharp John" src="./avatar/4.png" />
        </Tooltip>
        <Tooltip arrow placement="top" title="John Sharp">
          <Avatar alt="John Sharp" src="./avatar/5.png" />
        </Tooltip>
        <Button color="tertiary" size="700" variant="contained">
          +5
        </Button>
      </AvatarGroup>
    );
  },
};
