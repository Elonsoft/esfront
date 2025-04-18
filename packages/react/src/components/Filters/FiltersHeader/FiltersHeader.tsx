import { FiltersHeaderProps } from './FiltersHeader.types';

import clsx from 'clsx';
import { getFiltersHeaderUtilityClass } from './FiltersHeader.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { Button } from '../../Button';
import { Search } from '../../Search';

type FiltersHeaderOwnerState = {
  classes?: FiltersHeaderProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersHeaderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFiltersHeaderUtilityClass, classes);
};

const FiltersHeaderRoot = styled('div', {
  name: 'ESFiltersHeader',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => ({
  padding: '16px 16px 8px',
}));

const FiltersHeaderTitle = styled('div', {
  name: 'ESFiltersHeader',
  slot: 'Title',
  overridesResolver: (_props, styles) => styles.title,
})(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.vars.palette.monoA.A900,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
}));

const FiltersHeaderSearch = styled(Search, {
  name: 'ESFiltersHeader',
  slot: 'Search',
  overridesResolver: (_props, styles) => styles.search,
})(() => ({
  marginTop: '16px',
}));

export const FiltersHeader = (inProps: FiltersHeaderProps) => {
  const { className, sx, labelFilters, labelReset, ...props } = useThemeProps({
    props: inProps,
    name: 'ESFiltersHeader',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersHeaderRoot className={clsx(classes.root, className)} sx={sx}>
      <FiltersHeaderTitle>
        {labelFilters}
        <Button color="tertiary" size="300" variant="text">
          {labelReset}
        </Button>
      </FiltersHeaderTitle>
      <FiltersHeaderSearch placeholder="Поиск по фильтрам" />
    </FiltersHeaderRoot>
  );
};
