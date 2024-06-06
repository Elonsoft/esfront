import { PageHGroupProps } from './PageHGroup.types';

import clsx from 'clsx';
import { getPageHGroupUtilityClass } from './PageHGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type PageHGroupOwnerState = {
  classes?: PageHGroupProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPageHGroupUtilityClass, classes);
};

const PageHGroupRoot = styled('div', {
  name: 'ESPageHGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  width: '100%',
  padding: '28px 0 24px',
}));

/**
 * This component represents a heading and related content.
 */
export const PageHGroup = (inProps: PageHGroupProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESPageHGroup',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </PageHGroupRoot>
  );
};
