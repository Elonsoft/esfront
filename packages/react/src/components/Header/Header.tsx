import { HeaderProps } from './Header.types';

import clsx from 'clsx';
import { getHeaderUtilityClass } from './Header.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type HeaderOwnerState = {
  classes?: HeaderProps['classes'];
};

const useUtilityClasses = (ownerState: HeaderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getHeaderUtilityClass, classes);
};

const HeaderRoot = styled('header', {
  name: 'ESHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({});

export const Header = (inProps: HeaderProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESHeader' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <HeaderRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </HeaderRoot>
  );
};
