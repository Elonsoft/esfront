import { PageHGroupHeadingProps } from './PageHGroupHeading.types';

import clsx from 'clsx';
import { getPageHGroupHeadingUtilityClass } from './PageHGroupHeading.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type PageHGroupHeadingOwnerState = {
  classes?: PageHGroupHeadingProps['classes'];
  maxLines: PageHGroupHeadingProps['maxLines'];
};

const useUtilityClasses = (ownerState: PageHGroupHeadingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: ['wrapper']
  };

  return composeClasses(slots, getPageHGroupHeadingUtilityClass, classes);
};

const PageHGroupHeadingRoot = styled('h1', {
  name: 'ESPageHGroupHeading',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.h2,
  alignSelf: 'center',
  padding: 0,
  margin: 0,
  color: theme.palette.monoA.A900,
  wordBreak: 'break-word',
  minWidth: 0
}));

const PageHGroupHeadingWrapper = styled('span', {
  name: 'ESPageHGroupHeading',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})<{ ownerState: PageHGroupHeadingOwnerState }>(({ ownerState }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: ownerState.maxLines,
  WebkitBoxOrient: 'vertical'
}));

export const PageHGroupHeading = (inProps: PageHGroupHeadingProps) => {
  const {
    className,
    children,
    sx,
    maxLines = 1,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPageHGroupHeading'
  });

  const ownerState = { ...props, maxLines };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupHeadingRoot className={clsx(classes.root, className)} sx={sx}>
      <PageHGroupHeadingWrapper className={classes.wrapper} ownerState={ownerState}>
        {children}
      </PageHGroupHeadingWrapper>
    </PageHGroupHeadingRoot>
  );
};
