import { FiltersContentProps } from './FiltersContent.types';

import clsx from 'clsx';
import { getFiltersContentUtilityClass } from './FiltersContent.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type FiltersContentOwnerState = {
  classes?: FiltersContentProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersContentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFiltersContentUtilityClass, classes);
};

const FiltersContentRoot = styled('div', {
  name: 'ESFiltersContent',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})({
  paddingBottom: '8px',
});

export const FiltersContent = (inProps: FiltersContentProps) => {
  const { children, className, sx, ...props } = useDefaultProps({ props: inProps, name: 'ESFiltersContent' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersContentRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </FiltersContentRoot>
  );
};
