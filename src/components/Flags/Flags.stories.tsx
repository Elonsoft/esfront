import { Meta, StoryObj } from '@storybook/react';

import * as Flags from './icons';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Flags',
  parameters: {
    references: ['Flags']
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {Object.keys(Flags).map((flag) => {
          const Component = Flags[flag as keyof typeof Flags];
          // @ts-expect-error We need to add title prop to SvgIcon.
          return <Component key={flag} title={flag.replace('Flag', '')} />;
        })}
      </div>
    );
  }
};
