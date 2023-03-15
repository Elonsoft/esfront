import { SFSFiltersGroupProps } from './SFSFiltersGroup.types';

import clsx from 'clsx';
import { getSFSFiltersGroupUtilityClass } from './SFSFiltersGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';

type SFSFiltersGroupOwnerState = {
  classes?: SFSFiltersGroupProps['classes'];
};

const useUtilityClasses = (ownerState: SFSFiltersGroupOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    title: ['title']
  };

  return composeClasses(slots, getSFSFiltersGroupUtilityClass, classes);
};

const SFSFiltersGroupRoot = styled('div', {
  name: 'ESSFSFiltersGroup',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  color: theme.palette.monoA.A900,

  '&:not(:last-of-type)': {
    paddingBottom: 0
  }
}));

const SFSFiltersGroupTitle = styled(Typography, {
  name: 'ESSFSFiltersGroup',
  slot: 'Title',
  overridesResolver: (_, styles) => styles.title
})(() => ({})) as typeof Typography;

export const SFSFiltersGroup = (inProps: SFSFiltersGroupProps) => {
  const { className, children, sx, title, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSFSFiltersGroup'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSFiltersGroupRoot className={clsx(classes.root, className)} sx={sx}>
      {!!title && (
        <SFSFiltersGroupTitle className={classes.title} component="div" variant="body200Medium">
          {title}
        </SFSFiltersGroupTitle>
      )}
      {children}
    </SFSFiltersGroupRoot>
  );
};
