import { SidebarSpacerProps } from './SidebarSpacer.types';

import clsx from 'clsx';
import { getSidebarSpacerUtilityClass } from './SidebarSpacer.classes';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { styled } from '@mui/material-pigment-css';
import composeClasses from '@mui/utils/composeClasses';

type SidebarSpacerOwnerState = {
  classes?: SidebarSpacerProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarSpacerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getSidebarSpacerUtilityClass, classes);
};

const SidebarSpacerRoot = styled('div', {
  name: 'ESSidebarSpacer',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  flexGrow: '1',
}));

export const SidebarSpacer = (inProps: SidebarSpacerProps) => {
  const { className, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarSpacer',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <SidebarSpacerRoot className={clsx(classes.root, className)} />;
};
