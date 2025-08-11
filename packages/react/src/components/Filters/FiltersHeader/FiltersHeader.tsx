import { FiltersHeaderProps } from './FiltersHeader.types';

import clsx from 'clsx';
import { getFiltersHeaderUtilityClass } from './FiltersHeader.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { Button } from '../../Button';

type FiltersHeaderOwnerState = {
  classes?: FiltersHeaderProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersHeaderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    title: ['title'],
    children: ['children'],
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

const FiltersHeaderChildren = styled('div', {
  name: 'ESFiltersHeader',
  slot: 'Children',
  overridesResolver: (_props, styles) => styles.children,
})(() => ({
  marginTop: '16px',
}));

export const FiltersHeader = (inProps: FiltersHeaderProps) => {
  const { children, className, sx, onClear, labelFilters, labelReset, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESFiltersHeader',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersHeaderRoot className={clsx(classes.root, className)} sx={sx}>
      <FiltersHeaderTitle className={classes.title}>
        {labelFilters}
        {!!onClear && (
          <Button color="tertiary" size="300" variant="text" onClick={onClear}>
            {labelReset}
          </Button>
        )}
      </FiltersHeaderTitle>
      {!!children && <FiltersHeaderChildren className={classes.children}>{children}</FiltersHeaderChildren>}
    </FiltersHeaderRoot>
  );
};
