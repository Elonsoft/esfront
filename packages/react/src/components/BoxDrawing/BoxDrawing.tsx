import { BoxDrawingProps } from './BoxDrawing.types';

import clsx from 'clsx';
import { getBoxDrawingUtilityClass } from './BoxDrawing.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { styled } from '@mui/material';

type BoxDrawingOwnerState = {
  classes?: BoxDrawingProps['classes'];
  bottomOffset?: BoxDrawingProps['bottomOffset'];
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
})<{ ownerState: BoxDrawingOwnerState }>(({ ownerState: { bottomOffset }, theme }) => ({
  position: 'absolute',
  borderLeft: `1px dashed ${theme.vars.palette.monoA.A400}`,
  borderBottom: `1px dashed ${theme.vars.palette.monoA.A400}`,
  borderRadius: '0px 0px 0px 4px',
  width: '7px',
  height: `calc(100% - ${bottomOffset ?? '0'}px)`,
  backgroundColor: 'transparent',
  left: '20px',
  top: 0
}));

export const BoxDrawing = (inProps: BoxDrawingProps) => {
  const {
    className,
    classes: inClasses,
    bottomOffset,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBoxDrawing'
  });

  const ownerState = {
    classes: inClasses,
    bottomOffset
  };

  const classes = useUtilityClasses(ownerState);

  return <BoxDrawingRoot className={clsx(classes.root, className)} ownerState={ownerState} {...props} />;
};
