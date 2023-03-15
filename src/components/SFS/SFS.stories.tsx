import { useState } from 'react';

import { SFSSortingValue } from './SFSSorting/SFSSorting.types';

import { Args, Story } from '@storybook/react';

import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

import { SFS, SFSFilters, SFSFiltersGroup, SFSRow, SFSSearch, SFSSorting } from '..';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount' },
  { label: 'Площадь', value: 'bySquare' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySaledStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' }
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount' },
  { label: 'Square', value: 'bySquare' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySaledStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' }
];

export const Demo: Story<Args> = (args, { globals: { locale } }) => {
  const [search, setSearch] = useState('');

  const [value, setValue] = useState<SFSSortingValue | null>(null);
  const [values, setValues] = useState<SFSSortingValue[]>([]);
  const [filters, setFilters] = useState<Record<string, any>>({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': ''
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.currentTarget.value);
  };

  const onClearSearch = () => {
    setSearch('');
  };

  const onFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <SFS>
      <SFSRow>
        <SFSSearch onChange={onSearchChange} onClear={search ? onClearSearch : undefined} value={search} />
        {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
        {args.SFSSortingMultiple ? (
          <SFSSorting
            key="1"
            multiple
            value={values}
            onChange={setValues}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        ) : (
          <SFSSorting
            key="2"
            value={value}
            onChange={setValue}
            options={locale == 'ru' ? sortingOptionsRu : sortingOptionsEn}
          />
        )}
        <Divider orientation="vertical" />
        <SFSFilters
          count={Object.values(filters).filter(Boolean).length}
          onReset={() =>
            setFilters({
              '1': '',
              '2': '',
              '3': '',
              '4': '',
              '5': '',
              '6': ''
            })
          }
        >
          <SFSFiltersGroup title={locale === 'ru' ? 'Основное' : 'General'}>
            <TextField
              size="48"
              name="1"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Ответственный' : 'Responsible'}
              value={filters['1']}
            />
            <TextField
              size="48"
              name="2"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Создатель' : 'Author'}
              value={filters['2']}
            />
            <TextField
              size="48"
              name="3"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Статус задачи' : 'Task status'}
              value={filters['3']}
            />
            <TextField
              size="48"
              name="4"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Этап выполнения' : 'Execution stage'}
              value={filters['4']}
            />
          </SFSFiltersGroup>
          <SFSFiltersGroup title={locale === 'ru' ? 'Другое' : 'Other'}>
            <TextField
              size="48"
              name="5"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Срок выполнения' : 'Deadline'}
              value={filters['5']}
            />
            <TextField
              size="48"
              name="6"
              onChange={onFiltersChange}
              label={locale === 'ru' ? 'Закрытие' : 'Closure'}
              value={filters['6']}
            />
          </SFSFiltersGroup>
        </SFSFilters>
      </SFSRow>
    </SFS>
  );
};
