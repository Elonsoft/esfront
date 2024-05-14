import { BoxDrawingItemProps, BoxDrawingItemTypeMap } from './BoxDrawingItem.types';

import clsx from 'clsx';
import { boxDrawingItemClasses, getBoxDrawingItemUtilityClass } from './BoxDrawingItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type BoxDrawingItemOwnerState = {
  classes?: BoxDrawingItemProps['classes'];
  clickable?: BoxDrawingItemProps['clickable'];
};

const useUtilityClasses = (ownerState: BoxDrawingItemOwnerState) => {
  const { classes, clickable } = ownerState;

  const slots = {
    root: ['root', clickable && 'clickable'],
    point: ['point']
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
})(({ theme }) => ({
  position: 'relative',

  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    borderLeft: `1px dashed ${theme.vars.palette.monoA.A400}`,
    borderBottom: `1px dashed ${theme.vars.palette.monoA.A400}`,
    width: '7px',
    height: 'calc(50% + 0.5px)',

    backgroundColor: 'transparent',
    left: 0,
    top: 0
  },

  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    borderLeft: `1px dashed ${theme.vars.palette.monoA.A400}`,
    width: '7px',
    height: 'calc(50% - 0.5px)',

    backgroundColor: 'transparent',
    left: 0,
    top: 'calc(50% + 0.5px)'
  },

  '&:last-of-type': {
    '&::before': { borderRadius: '0px 0px 0px 4px' },
    '&::after': { display: 'none' }
  },

  [`&.${boxDrawingItemClasses.clickable}`]: {
    cursor: 'pointer'
  }
}));

const BoxDrawingItemPoint = styled('div', {
  name: 'ESBoxDrawingItem',
  slot: 'Point',
  overridesResolver: (props, styles) => {
    return [styles.point];
  }
})(({ theme }) => ({
  position: 'absolute',
  top: 'calc(50% - 1.5px)',
  left: '7.5px',
  width: '3px',
  height: '3px',
  borderRadius: '50%',

  background: theme.vars.palette.monoA.A400
}));

export const BoxDrawingItem: OverridableComponent<BoxDrawingItemTypeMap> = (inProps: BoxDrawingItemProps) => {
  const {
    children,
    className,
    classes: inClasses,
    clickable: inClickable,
    onClick,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBoxDrawingItem'
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;

  const ownerState = {
    classes: inClasses,
    clickable
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <BoxDrawingItemRoot className={clsx(classes.root, className)} onClick={onClick} {...props}>
      <BoxDrawingItemPoint className={classes.point} />
      {children}
    </BoxDrawingItemRoot>
  );
};
