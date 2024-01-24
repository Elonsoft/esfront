import { useState } from 'react';

import { Controls, Description, Markdown, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { capitalize } from '@mui/material/utils';

import requirements from './PhoneField.stories.requirements.md?raw';
import { PhoneField } from '.';

import { ReferencesList } from '../../../.storybook/components/ReferencesList';
import { IconGlobalLineW500 } from '../../icons';
import { Button } from '../Button';
import * as Flags from '../Flags/icons';

import { CountryCode, getCountries } from 'libphonenumber-js';

const COUNTRIES = getCountries();

const meta: Meta<typeof PhoneField> = {
  tags: ['autodocs'],
  component: PhoneField,
  parameters: {
    references: ['PhoneField'],
    docs: {
      page: () => {
        // TODO: Simplify this part / make it generic.
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories includePrimary={false} />
            <Markdown>{requirements}</Markdown>
            <ReferencesList />
          </>
        );
      },
    },
  },
  argTypes: {
    countries: {
      control: false,
    },
    defaultCountry: {
      control: false,
    },
    preferredCountries: {
      table: {
        disable: true,
      },
    },
    getCountryFlag: {
      control: false,
    },
    getCountryDisplayName: {
      control: false,
    },
    focused: {
      table: {
        disable: true,
      },
    },
    hiddenLabel: {
      table: {
        disable: true,
      },
    },
    margin: {
      table: {
        disable: true,
      },
    },
    MenuProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    countries: ['RU', 'KZ', 'US', 'GB', 'AT', 'GE', 'VU'],
  },
};

export default meta;

type Story = StoryObj<typeof PhoneField>;

const getLabel = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru' ? 'Телефон' : 'Phone';
};

const getDemoCountryFlag = (country: CountryCode | null) => {
  switch (country) {
    case 'RU':
    case 'KZ':
    case 'US':
    case 'GB':
    case 'AT':
    case 'GE':
    case 'VU': {
      const FlagComponent = country ? Flags[`Flag${capitalize(country.toLowerCase())}` as keyof typeof Flags] : null;
      return FlagComponent ? <FlagComponent /> : <IconGlobalLineW500 />;
    }
    default:
      return <IconGlobalLineW500 />;
  }
};

const getCountryFlag = (country: CountryCode | null) => {
  const FlagComponent = country ? Flags[`Flag${capitalize(country.toLowerCase())}` as keyof typeof Flags] : null;
  return FlagComponent ? <FlagComponent /> : <IconGlobalLineW500 />;
};

export const Demo: Story = {
  render: (args, context) => {
    return (
      <PhoneField
        {...args}
        getCountryFlag={getDemoCountryFlag}
        label={getLabel(context)}
        sx={{ width: '250px', marginTop: '30px' }}
      />
    );
  },
};

export const Controlled: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState('+7950');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
        <div>
          <PhoneField
            {...args}
            getCountryFlag={getDemoCountryFlag}
            label={getLabel(context)}
            sx={{ width: '250px', marginTop: '30px' }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>{value}</div>
        <Button size="200" variant="outlined" onClick={() => setValue('+79509999999')}>
          +79509999999
        </Button>
        <Button size="200" variant="outlined" onClick={() => setValue('+44 21 2312 3123')}>
          +442123123123
        </Button>
      </div>
    );
  },
};

export const DefaultCountry: Story = {
  render: (args, context) => {
    return (
      <PhoneField
        {...args}
        defaultCountry="RU"
        getCountryFlag={getDemoCountryFlag}
        label={getLabel(context)}
        sx={{ width: '250px', marginTop: '30px' }}
      />
    );
  },
};

export const AllCountries: Story = {
  render: (args, context) => {
    return (
      <PhoneField
        {...args}
        countries={COUNTRIES}
        getCountryFlag={getCountryFlag}
        label={getLabel(context)}
        sx={{ width: '250px', marginTop: '30px' }}
      />
    );
  },
};

export const SingleCountry: Story = {
  render: (args, context) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
        <PhoneField {...args} countries={['RU']} getCountryFlag={getCountryFlag} label={getLabel(context)} />
        <PhoneField {...args} countries={['GB']} getCountryFlag={getCountryFlag} label={getLabel(context)} />
      </div>
    );
  },
};

export const WithoutButton: Story = {
  render: (args, context) => {
    return <PhoneField {...args} InputProps={{ startAdornment: null }} countries={['RU']} label={getLabel(context)} />;
  },
};
