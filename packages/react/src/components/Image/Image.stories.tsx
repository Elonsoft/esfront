import { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

const meta: Meta<typeof Image> = {
  tags: ['autodocs'],
  component: Image,
  parameters: {
    references: ['Image'],
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Demo: Story = {
  render: () => {
    return (
      <Image>
        <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-61785-800.jpg" />
      </Image>
    );
  },
};
