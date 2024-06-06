import { PageHGroupMainProps } from './PageHGroupMain.types';

import clsx from 'clsx';
import { getPageHGroupMainUtilityClass } from './PageHGroupMain.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type PageHGroupMainOwnerState = {
  classes?: PageHGroupMainProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupMainOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPageHGroupMainUtilityClass, classes);
};

const PageHGroupMainRoot = styled('div', {
  name: 'ESPageHGroupMain',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '4px 0 8px',
  gap: '24px',
}));

export const PageHGroupMain = (inProps: PageHGroupMainProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESPageHGroupMain',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupMainRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </PageHGroupMainRoot>
  );
};
