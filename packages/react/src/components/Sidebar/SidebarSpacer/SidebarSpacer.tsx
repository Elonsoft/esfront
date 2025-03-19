import { SidebarSpacerProps } from './SidebarSpacer.types';

import clsx from 'clsx';
import { getSidebarSpacerUtilityClass } from './SidebarSpacer.classes';

import { styled, useThemeProps } from '@mui/material/styles';
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
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebarSpacer',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <SidebarSpacerRoot className={clsx(classes.root, className)} sx={sx} />;
};
