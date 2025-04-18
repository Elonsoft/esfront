import { Meta, StoryObj } from '@storybook/react';

import { Box, TextField } from '@mui/material';

import {
  Filters,
  FiltersContent,
  FiltersFilter,
  FiltersFooter,
  FiltersFormControlLabel,
  FiltersFormGroup,
  FiltersHeader,
} from '.';

import { IconCloseW350, IconTrashLine } from '../../icons';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Search } from '../Search';
import { Switch } from '../Switch';
import { TextFieldGroup } from '../TextFieldGroup';
import { Tooltip } from '../Tooltip';

const meta: Meta<typeof Filters> = {
  tags: ['autodocs'],
  component: Filters,
  parameters: {
    references: ['Filters'],
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Filters>;

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export const Demo: Story = {
  render: (_args, context) => {
    return (
      <Filters sx={{ width: '336px', margin: '-1rem' }}>
        <FiltersHeader />
        <FiltersContent>
          <FiltersFilter title={context.globals.locale === 'ru' ? 'Мощность' : 'Power'}>
            <Box sx={{ padding: '4px 8px 8px' }}>
              <TextFieldGroup>
                <TextField fullWidth label="От" size="40" />
                <TextField fullWidth label="До" size="40" />
              </TextFieldGroup>
            </Box>
          </FiltersFilter>
          <FiltersFilter endAdornment={<Switch />} title={context.globals.locale === 'ru' ? 'В наличии' : 'In stock'} />
          <FiltersFilter
            TooltipProps={{
              title: context.globals.locale === 'ru' ? 'Описание' : 'Description',
            }}
            endAdornment={
              <Tooltip placement="top-end" title={context.globals.locale === 'ru' ? 'Сбросить' : 'Reset'}>
                <Button color="tertiary" size="300" variant="text">
                  <IconCloseW350 container containerSize="20px" />
                </Button>
              </Tooltip>
            }
            title={context.globals.locale === 'ru' ? 'Производители' : 'Manufacturers'}
          >
            <FiltersFormGroup
              header={<Search placeholder={context.globals.locale === 'ru' ? 'Найти' : 'Search'} />}
              maxLines={5}
            >
              {ITEMS.map((item) => (
                <FiltersFormControlLabel
                  key={item}
                  control={<Checkbox color="secondary" size="medium" variant="hybrid" />}
                  count={10}
                  label={context.globals.locale === 'ru' ? 'Производитель' : 'Manufacturer'}
                />
              ))}
            </FiltersFormGroup>
          </FiltersFilter>
        </FiltersContent>
        <FiltersFooter>
          <Button fullWidth color="primary" size="500" variant="contained">
            {context.globals.locale === 'ru' ? 'Показать' : 'Apply'}
          </Button>
          <Button color="error" size="500" variant="outlined">
            <IconTrashLine />
          </Button>
        </FiltersFooter>
      </Filters>
    );
  },
};
