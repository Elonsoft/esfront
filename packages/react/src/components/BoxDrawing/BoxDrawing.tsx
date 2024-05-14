import { BoxDrawingProps } from './BoxDrawing.types';

import clsx from 'clsx';
import { getBoxDrawingUtilityClass } from './BoxDrawing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { styled } from '@mui/material';

type BoxDrawingOwnerState = {
  classes?: BoxDrawingProps['classes'];
};

const useUtilityClasses = (ownerState: BoxDrawingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    container: ['container']
  };

  return composeClasses(slots, getBoxDrawingUtilityClass, classes);
};

const BoxDrawingRoot = styled('div', {
  name: 'ESBoxDrawing',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

const BoxDrawingContainer = styled('div', {
  name: 'ESBoxDrawing',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    return [styles.container];
  }
})(() => ({
  paddingLeft: '8px',
  display: 'flex',
  flexDirection: 'column'
}));

export const BoxDrawing = (inProps: BoxDrawingProps) => {
  const {
    children,
    className,
    classes: inClasses,
    header,
    collapsed,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBoxDrawing'
  });

  const ownerState = {
    classes: inClasses
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <BoxDrawingRoot className={clsx(classes.root, className)} {...props}>
      {header}
      {!collapsed && <BoxDrawingContainer className={classes.container}>{children}</BoxDrawingContainer>}
    </BoxDrawingRoot>
  );
};
