import { FiltersProps } from './Filters.types';

import clsx from 'clsx';
import { getFiltersUtilityClass } from './Filters.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type FiltersOwnerState = {
  classes?: FiltersProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFiltersUtilityClass, classes);
};

const FiltersRoot = styled('div', {
  name: 'ESFilters',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  backgroundColor: theme.vars.palette.surface[50],
}));

/** The collection of components for building a ecommerce filters. */
export const Filters = (inProps: FiltersProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESFilters' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </FiltersRoot>
  );
};
