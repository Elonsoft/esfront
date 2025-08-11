import { PageHGroupStatusProps } from './PageHGroupStatus.types';

import clsx from 'clsx';
import { getPageHGroupStatusUtilityClass } from './PageHGroupStatus.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type PageHGroupStatusOwnerState = {
  classes?: PageHGroupStatusProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupStatusOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPageHGroupStatusUtilityClass, classes);
};

const PageHGroupStatusRoot = styled('div', {
  name: 'ESPageHGroupStatus',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  ...theme.typography.body100,
  color: theme.vars.palette.monoA.A600,
}));

export const PageHGroupStatus = (inProps: PageHGroupStatusProps) => {
  const { className, children, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupStatus',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupStatusRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </PageHGroupStatusRoot>
  );
};
