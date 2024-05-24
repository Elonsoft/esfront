import { BoxDrawingItemProps } from './BoxDrawingItem.types';

import clsx from 'clsx';
import { getBoxDrawingItemUtilityClass } from './BoxDrawingItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { styled } from '@mui/material';

type BoxDrawingItemOwnerState = {
  classes?: BoxDrawingItemProps['classes'];
  isLast?: BoxDrawingItemProps['isLast'];
};

const useUtilityClasses = (ownerState: BoxDrawingItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getBoxDrawingItemUtilityClass, classes);
};

const BoxDrawingItemRoot = styled('div', {
  name: 'ESBoxDrawingItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { clickable }
    } = props;

    return [styles.root, clickable && styles.clickable];
  }
})<{ ownerState: BoxDrawingItemOwnerState }>(({ ownerState: { isLast }, theme }) => ({
  position: 'absolute',

  top: 'calc(50% - 1.5px)',
  left: '27.5px',
  width: '3px',
  height: '3px',
  borderRadius: '50%',
  background: theme.vars.palette.monoA.A400,

  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    borderBottom: `1px dashed ${theme.vars.palette.monoA.A400}`,
    width: '7px',
    backgroundColor: 'transparent',
    left: '-7.5px',
    top: 'calc(50% - 0.5px)'
  },

  ...(isLast && {
    '&::after': {
      display: 'none'
    }
  })
}));

export const BoxDrawingItem = (inProps: BoxDrawingItemProps) => {
  const {
    className,
    classes: inClasses,
    isLast,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBoxDrawingItem'
  });

  const ownerState = {
    classes: inClasses,
    isLast
  };

  const classes = useUtilityClasses(ownerState);

  return <BoxDrawingItemRoot className={clsx(classes.root, className)} ownerState={ownerState} {...props} />;
};
