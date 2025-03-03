import { PageHGroupActionsProps } from './PageHGroupActions.types';

import clsx from 'clsx';
import { getPageHGroupActionsUtilityClass } from './PageHGroupActions.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type PageHGroupActionsOwnerState = {
  classes?: PageHGroupActionsProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPageHGroupActionsUtilityClass, classes);
};

const PageHGroupActionsRoot = styled('div', {
  name: 'ESPageHGroupActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  gap: '16px',
}));

export const PageHGroupActions = (inProps: PageHGroupActionsProps) => {
  const { className, children, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupActions',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <PageHGroupActionsRoot className={clsx(classes.root, className)}>{children}</PageHGroupActionsRoot>;
};
