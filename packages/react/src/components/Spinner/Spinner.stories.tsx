import { Meta, StoryObj } from '@storybook/react';

import { SpinnerDashRing } from './SpinnerDashRing';
import { SpinnerFadingBars } from './SpinnerFadingBars';
import { SpinnerFadingDots } from './SpinnerFadingDots';
import { SpinnerFadingDoubleRing } from './SpinnerFadingDoubleRing';
import { SpinnerFadingRing } from './SpinnerFadingRing';
import { SpinnerRing } from './SpinnerRing';

const meta: Meta<typeof SpinnerDashRing> = {
  tags: ['autodocs'],
  component: SpinnerDashRing,
  parameters: {
    references: [
      'SpinnerDashRing',
      'SpinnerFadingBars',
      'SpinnerFadingDots',
      'SpinnerFadingDoubleRing',
      'SpinnerFadingRing',
      'SpinnerRing',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof SpinnerDashRing>;

/* Spinner` is a component for express an unspecified wait time. The animation works with CSS, not JavaScript. */
export const Demo: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'grid',
          gap: '24px',
          gridAutoFlow: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <SpinnerFadingRing {...args} />
        <SpinnerFadingDots {...args} />
        <SpinnerFadingBars {...args} />
        <SpinnerRing {...args} />
        <SpinnerDashRing {...args} />
        <SpinnerFadingDoubleRing {...args} />
      </div>
    );
  },
};
