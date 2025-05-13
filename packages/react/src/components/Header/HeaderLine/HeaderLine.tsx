import { HeaderLineProps } from './HeaderLine.types';

import clsx from 'clsx';
import { getHeaderLineUtilityClass } from './HeaderLine.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type HeaderLineOwnerState = {
  classes?: HeaderLineProps['classes'];
};

const useUtilityClasses = (ownerState: HeaderLineOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getHeaderLineUtilityClass, classes);
};

const HeaderLineRoot = styled('div', {
  name: 'ESHeaderLine',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  maxWidth: '1440px',
  padding: '0 56px',
});

export const HeaderLine = (inProps: HeaderLineProps) => {
  const { children, className, sx, ...props } = useThemeProps({ props: inProps, name: 'ESHeaderLine' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <HeaderLineRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </HeaderLineRoot>
  );
};
