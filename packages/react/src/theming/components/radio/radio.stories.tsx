import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import { Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Overrides/Radio',
  parameters: {
    viewMode: 'canvas',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'error'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Demo: Story = {
  render: (args) => {
    return (
      <RadioGroup defaultValue="One">
        <FormControlLabel control={<Radio {...args} />} label="One" value="One" />
        <FormControlLabel control={<Radio {...args} />} label="Two" value="Two" />
      </RadioGroup>
    );
  },
};
