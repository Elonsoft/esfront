import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { FormControl } from '@mui/material';

import { RadioGroup } from './RadioGroup';

import { FormControlLabel } from '../FormControlLabel';
import { Radio } from '../Radio';

const LABELS = {
  en: [
    { value: 'home', label: 'Home' },
    { value: 'catalog', label: 'Catalog' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'tablets', label: 'Tablets' },
    { value: 'apple', label: 'Apple' },
  ],
  ru: [
    { value: 'home', label: 'Главная страница' },
    { value: 'catalog', label: 'Каталог' },
    { value: 'electronics', label: 'Электроника' },
    { value: 'tablets', label: 'Планшеты' },
    { value: 'apple', label: 'Apple' },
  ],
};

type Args = ComponentProps<typeof RadioGroup>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: RadioGroup,
  parameters: {
    references: ['RadioGroup'],
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          {...args}
        >
          {LABELS[locale].map((item) => (
            <FormControlLabel key={item.value} control={<Radio value={item.value} />} label={item.label} />
          ))}
        </RadioGroup>
      </FormControl>
    );
  },
};
