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
      'SpinnerRing'
    ]
  },
  argTypes: {
    dashEase: {
      description: 'Easing function for spinner dashStroke animation.',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string'
        }
      }
    }
  },
  args: {
    dashEase: 'ease-in-out'
  }
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
          justifyContent: 'flex-start'
        }}
      >
        <SpinnerFadingRing color={args.color} duration={args.duration} ease={args.ease} size={args.size} />
        <SpinnerFadingDots color={args.color} duration={args.duration} ease={args.ease} size={args.size} />
        <SpinnerFadingBars color={args.color} duration={args.duration} ease={args.ease} size={args.size} />
        <SpinnerRing color={args.color} duration={args.duration} ease={args.ease} size={args.size} />
        <SpinnerDashRing {...args} />
        <SpinnerFadingDoubleRing color={args.color} duration={args.duration} ease={args.ease} size={args.size} />
      </div>
    );
  }
};
