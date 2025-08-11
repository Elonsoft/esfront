import { FiltersFooterProps } from './FiltersFooter.types';

import clsx from 'clsx';
import { getFiltersFooterUtilityClass } from './FiltersFooter.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { buttonClasses } from '../../Button';

type FiltersFooterOwnerState = {
  classes?: FiltersFooterProps['classes'];
};

const useUtilityClasses = (ownerState: FiltersFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getFiltersFooterUtilityClass, classes);
};

const FiltersFooterRoot = styled('div', {
  name: 'ESFiltersFooter',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(({ theme }) => ({
  backgroundColor: theme.vars.palette.surface[50],
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
  display: 'flex',
  gap: '16px',
  padding: '15px 16px 16px',

  [`& .${buttonClasses.fullWidth}`]: {
    width: 'auto',
    flexGrow: 1,
  },
}));

export const FiltersFooter = (inProps: FiltersFooterProps) => {
  const { children, className, sx, ...props } = useDefaultProps({ props: inProps, name: 'ESFiltersFooter' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <FiltersFooterRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </FiltersFooterRoot>
  );
};
