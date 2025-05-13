import { HeaderActionsProps } from './HeaderActions.types';

import clsx from 'clsx';
import { getHeaderActionsUtilityClass } from './HeaderActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type HeaderActionsOwnerState = {
  classes?: HeaderActionsProps['classes'];
};

const useUtilityClasses = (ownerState: HeaderActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getHeaderActionsUtilityClass, classes);
};

const HeaderActionsRoot = styled('div', {
  name: 'ESHeaderActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'flex',
  gap: '4px',
  marginLeft: 'auto',
  padding: '8px 0 8px 16px',
});

export const HeaderActions = (inProps: HeaderActionsProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESHeaderActions' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <HeaderActionsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </HeaderActionsRoot>
  );
};
