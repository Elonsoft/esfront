import { AutocompleteFooterProps } from './AutocompleteFooter.types';

import clsx from 'clsx';
import { getAutocompleteFooterUtilityClass } from './AutocompleteFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AutocompleteFooterOwnerState = {
  classes?: AutocompleteFooterProps['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteFooterUtilityClass, classes);
};

const AutocompleteFooterRoot = styled('div', {
  name: 'ESAutocompleteFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  padding: '5px 16px 6px',
  borderTop: `1px solid ${theme.palette.monoA.A100}`
}));

export const AutocompleteFooter = (inProps: AutocompleteFooterProps) => {
  const {
    className,
    sx,

    children,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteFooter'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteFooterRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AutocompleteFooterRoot>
  );
};
