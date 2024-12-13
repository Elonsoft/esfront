import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import { SFS, SFSChips, SFSFilters, SFSFiltersGroup, SFSRow, SFSSearch, SFSSorting } from '.';

import { Chip } from '../Chip';
import { Chips } from '../Chips';
import { Divider } from '../Divider';
import { SortingMenuValue } from '../SortingMenu';

const sortingOptionsRu = [
  { label: 'Кол-во квартир', value: 'byCount', labelAsc: '0–9', labelDesc: '9–0' },
  { label: 'Площадь', value: 'bySquare', labelAsc: '0–9', labelDesc: '9–0' },
  { label: 'Срок сдачи', value: 'byRent' },
  { label: 'Старт продаж', value: 'bySalesStart' },
  { label: 'Дата создания', value: 'byCreationDate' },
  { label: 'Новизна', value: 'byNewest' },
];

const sortingOptionsEn = [
  { label: 'Number of apartments', value: 'byCount', labelAsc: '0–9', labelDesc: '9–0' },
  { label: 'Square', value: 'bySquare', labelAsc: '0–9', labelDesc: '9–0' },
  { label: 'Deadline', value: 'byRent' },
  { label: 'Start of sales', value: 'bySalesStart' },
  { label: 'Date of creation', value: 'byCreationDate' },
  { label: 'Novelty', value: 'byNewest' },
];

type Args = ComponentProps<typeof SFS> & { SFSSortingMultiple?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: SFS,
  parameters: {
    references: ['SFS', 'SFSChips', 'SFSFilters', 'SFSFiltersGroup', 'SFSRow', 'SFSSearch', 'SFSSorting'],
  },
  argTypes: {
    SFSSortingMultiple: {
      name: 'SFSSorting.multiple',
      description: 'If `true`, multiple options can be selected.',
      control: { type: 'boolean' },
    },
  },
};

const SFSChipsTooltipProps = {
  slotProps: {
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -4],
          },
        },
      ],
    },
  },
};

const ChipTooltipProps = {
  placement: 'top' as const,
  slotProps: {
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -4],
          },
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, { globals: { locale } }) {
    const [search, setSearch] = useState('');

    const [value, setValue] = useState<SortingMenuValue | null>(null);
    const [values, setValues] = useState<SortingMenuValue[]>([]);
    const [filters, setFilters] = useState<Record<string, any>>({
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
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

    const onFiltersReset = () => {
      setFilters({
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
      });
    };

    const onFilterReset = (name: string) => () => {
      setFilters({
        ...filters,
        [name]: '',
      });
    };

    return (
      <SFS>
        <SFSRow>
          <SFSSearch value={search} onChange={onSearchChange} onClear={search ? onClearSearch : undefined} />
          {!!search && <Divider flexItem orientation="vertical" sx={{ color: 'monoA.A200', margin: '8px 0' }} />}
          {args.SFSSortingMultiple ? (
            <SFSSorting
              key="1"
              multiple
              options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
              value={values}
              onChange={setValues}
            />
          ) : (
            <SFSSorting
              key="2"
              options={locale === 'ru' ? sortingOptionsRu : sortingOptionsEn}
              value={value}
              onChange={setValue}
            />
          )}
          <Divider orientation="vertical" />
          <SFSFilters count={Object.values(filters).filter(Boolean).length} onReset={onFiltersReset}>
            <SFSFiltersGroup title={locale === 'ru' ? 'Основное' : 'General'}>
              <TextField
                label={locale === 'ru' ? 'Ответственный' : 'Responsible'}
                name="1"
                size="48"
                value={filters['1']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Создатель' : 'Author'}
                name="2"
                size="48"
                value={filters['2']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Статус задачи' : 'Task status'}
                name="3"
                size="48"
                value={filters['3']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Этап выполнения' : 'Execution stage'}
                name="4"
                size="48"
                value={filters['4']}
                onChange={onFiltersChange}
              />
            </SFSFiltersGroup>
            <SFSFiltersGroup title={locale === 'ru' ? 'Другое' : 'Other'}>
              <TextField
                label={locale === 'ru' ? 'Срок выполнения' : 'Deadline'}
                name="5"
                size="48"
                value={filters['5']}
                onChange={onFiltersChange}
              />
              <TextField
                label={locale === 'ru' ? 'Закрытие' : 'Closure'}
                name="6"
                size="48"
                value={filters['6']}
                onChange={onFiltersChange}
              />
            </SFSFiltersGroup>
          </SFSFilters>
        </SFSRow>
        {!!Object.values(filters).filter(Boolean).length && (
          <SFSChips TooltipProps={SFSChipsTooltipProps} onDelete={onFiltersReset}>
            <Chips>
              {!!filters['1'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Ответственный' : 'Responsible'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('1')}>
                    {filters['1']}
                  </Chip>
                </Tooltip>
              )}
              {!!filters['2'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Создатель' : 'Author'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('2')}>
                    {filters['2']}
                  </Chip>
                </Tooltip>
              )}
              {!!filters['3'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Статус задачи' : 'Task status'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('3')}>
                    {filters['3']}
                  </Chip>
                </Tooltip>
              )}
              {!!filters['4'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Этап выполнения' : 'Execution stage'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('4')}>
                    {filters['4']}
                  </Chip>
                </Tooltip>
              )}
              {!!filters['5'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Срок выполнения' : 'Deadline'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('5')}>
                    {filters['5']}
                  </Chip>
                </Tooltip>
              )}
              {!!filters['6'] && (
                <Tooltip {...ChipTooltipProps} title={locale === 'ru' ? 'Закрытие' : 'Closure'}>
                  <Chip tabIndex={0} onDelete={onFilterReset('6')}>
                    {filters['6']}
                  </Chip>
                </Tooltip>
              )}
            </Chips>
          </SFSChips>
        )}
      </SFS>
    );
  },
};
