import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';

import { SortingMenu, SortingMenuValue } from '.';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySalesStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount' },
  { label: 'Square', value: 'bySquare' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySalesStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' }
];

type Args = { multiple: boolean };

const meta: Meta<Args> = {
  title: 'SortingMenu',
  tags: ['autodocs'],
  parameters: {
    references: ['SortingMenu']
  },
  args: {
    multiple: false
  }
};

export default meta;
type Story = StoryObj<Args>;

const DemoWrapper = ({ locale, multiple }: { locale: string; multiple: boolean }) => {
  const [value, setValue] = useState<SortingMenuValue | null>(null);
  const [values, setValues] = useState<SortingMenuValue[]>([]);

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  return (
    <>
      <Button color="primary" variant="contained" onClick={onMenuOpen}>
        {locale === 'ru' ? 'Меню' : 'Menu'}
      </Button>
      {multiple ? (
        <SortingMenu
          multiple
          PopoverProps={{
            anchorEl: menuAnchor,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            },
            open: !!menuAnchor,
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            onClose: onMenuClose
          }}
          options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
          value={values}
          onChange={setValues}
        />
      ) : (
        <SortingMenu
          PopoverProps={{
            anchorEl: menuAnchor,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            },
            open: !!menuAnchor,
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right'
            },
            onClose: onMenuClose
          }}
          options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
          value={value}
          onChange={setValue}
        />
      )}
    </>
  );
};

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    return <DemoWrapper locale={locale} multiple={args.multiple} />;
  }
};
