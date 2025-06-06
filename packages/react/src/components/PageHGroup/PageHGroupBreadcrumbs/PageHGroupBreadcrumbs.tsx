import { PageHGroupBreadcrumbsProps } from './PageHGroupBreadcrumbs.types';

import clsx from 'clsx';
import { getPageHGroupBreadcrumbsUtilityClass } from './PageHGroupBreadcrumbs.classes';

import { styled } from '@mui/material-pigment-css';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

type PageHGroupBreadcrumbsOwnerState = {
  classes?: PageHGroupBreadcrumbsProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupBreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getPageHGroupBreadcrumbsUtilityClass, classes);
};

const PageHGroupBreadcrumbsRoot = styled('div', {
  name: 'ESPageHGroupBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  padding: '4px 0',
}));

export const PageHGroupBreadcrumbs = (inProps: PageHGroupBreadcrumbsProps) => {
  const { className, children, sx, ...props } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupBreadcrumbs',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupBreadcrumbsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </PageHGroupBreadcrumbsRoot>
  );
};
