import { SyntheticEvent, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-restricted-imports
import Box from '@mui/material/Box';

import { Tab, Tabs } from '.';

import { IconAtLineW500 } from '../../icons';

const meta: Meta<typeof Tabs> = {
  tags: ['autodocs'],
  component: Tabs,
  parameters: {
    references: ['Tabs', 'Tab', 'TabScrollButton'],
  },
  argTypes: {
    action: {
      table: {
        disable: true,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
    centered: {
      options: [false, true],
      control: 'boolean',
    },
    children: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
    ScrollButtonComponent: {
      table: {
        disable: true,
      },
    },
    scrollButtons: {
      control: 'radio',
      options: ['auto', true, false],
    },
    slots: {
      table: {
        disable: true,
      },
    },
    TabIndicatorProps: {
      table: {
        disable: true,
      },
    },
    TabIndicatorSlidingAnimation: {
      control: 'select',
      options: ['expand', 'slide'],
    },
    TabScrollButtonProps: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabsData = {
  en: [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
    'Ninth',
    'Tenth',
    'Eleventh',
    'Twelfth',
  ],
  ru: [
    'Первый',
    'Второй',
    'Третий',
    'Четвертый',
    'Пятый',
    'Шестой',
    'Седьмой',
    'Восьмой',
    'Девятый',
    'Десятый',
    'Одиннадцатый',
    'Двенадцатый',
  ],
};

const gap = 4;

export const Demo: Story = {
  render: function Render(args, context) {
    const [value, setValue] = useState(0);

    const tabRefs = useRef<Array<HTMLButtonElement | undefined>>([]);

    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const handleChange = (event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ '& .es-tabs__flex-container': { gap: `${gap}px` } }}>
        <Tabs {...args} value={value} onChange={handleChange}>
          {(locale === 'en' ? tabsData.en : tabsData.ru).map((label, index) => (
            <Tab
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el || undefined;
              }}
              endIcon={<IconAtLineW500 size="24px" />}
              label={label}
              startIcon={<IconAtLineW500 size="24px" />}
            />
          ))}
        </Tabs>
      </Box>
    );
  },
};
