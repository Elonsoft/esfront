import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { ClearButton } from '.';

const meta: Meta<typeof ClearButton> = {
  tags: ['autodocs'],
  component: ClearButton,
  parameters: {
    references: ['ClearButton'],
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ClearButton>;

const DemoWrapper = ({ locale }: { locale: 'en' | 'ru' }) => {
  const [search, setSearch] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div style={{ maxWidth: '360px' }}>
      <TextField
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{!!search && <ClearButton onClick={() => setSearch('')} />}</InputAdornment>
          ),
        }}
        label={locale === 'en' ? 'Name' : 'Имя'}
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export const Demo: Story = {
  render: (args, context) => {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';
    return <DemoWrapper locale={locale} />;
  },
};
