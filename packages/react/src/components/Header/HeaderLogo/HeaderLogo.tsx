import { HeaderLogoProps, HeaderLogoTypeMap } from './HeaderLogo.types';

import clsx from 'clsx';
import { getHeaderLogoUtilityClass } from './HeaderLogo.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type HeaderLogoOwnerState = {
  classes?: HeaderLogoProps['classes'];
};

const useUtilityClasses = (ownerState: HeaderLogoOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getHeaderLogoUtilityClass, classes);
};

const HeaderLogoRoot = styled('a', {
  name: 'ESHeaderLogo',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  borderRadius: '4px',
  color: 'inherit',
  display: 'inline-flex',
  padding: '12px 8px 12px 8px',
  marginRight: '16px',

  '&:focus-visible': {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
    outlineOffset: '-2px',
  },
}));

export const HeaderLogo: OverridableComponent<HeaderLogoTypeMap> = (inProps: HeaderLogoProps) => {
  const { children, className, classes: inClasses, ...props } = useThemeProps({ props: inProps, name: 'ESHeaderLogo' });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <HeaderLogoRoot className={clsx(classes.root, className)} {...props}>
      {children}
    </HeaderLogoRoot>
  );
};
