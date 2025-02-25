import { SwiperPaginationProps } from '../SwiperPagination/SwiperPagination.types';
import { SwiperPaginationItemProps } from './SwiperPaginationItem.types';

import { getSwiperPaginationUtilityClass, swiperPaginationClasses } from '../SwiperPagination/SwiperPagination.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';

type SwiperPaginationItemOwnerState = {
  classes?: SwiperPaginationProps['classes'];
  small: boolean;
  active: boolean;
};

const useUtilityClasses = (ownerState: SwiperPaginationItemOwnerState) => {
  const { classes, active, small } = ownerState;

  const slots = {
    item: ['item', active && 'itemActive'],
    bullet: ['bullet', active && 'bulletActive', small && 'bulletSmall'],
    input: ['input'],
  };

  return composeClasses(slots, getSwiperPaginationUtilityClass, classes);
};

const PAGINATION_ITEM_HIDDEN = {
  height: 0,
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  opacity: 0,
  padding: 0,
  width: 0,
};

const SwiperPaginationItemRoot = styled('label', {
  name: 'ESSwiperPagination',
  slot: 'Item',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { active },
    } = props;
    return [styles.item, active && styles.itemActive];
  },
})<{ ownerState: SwiperPaginationItemOwnerState }>(({ theme }) => ({
  alignItems: 'center',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  margin: 2,
  minHeight: 16,
  minWidth: 16,
  padding: 4,
  position: 'relative',
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: 'linear',
  '&:focus': {
    outline: 'none',
  },
  [`&:hover .${swiperPaginationClasses.bullet}`]: {
    backgroundColor: theme.vars.palette.secondary.A600,
  },
  [`&:active .${swiperPaginationClasses.bullet}`]: {
    backgroundColor: theme.vars.palette.secondary.A800,
  },

  variants: [
    {
      props: {
        active: true,
      },
      style: {
        [`&:hover .${swiperPaginationClasses.bullet}, &:active .${swiperPaginationClasses.bullet}`]: {
          backgroundColor: theme.vars.palette.secondary[300],
        },
      },
    },
  ],
}));

const SwiperPaginationItemBullet = styled('div', {
  name: 'ESSwiperPagination',
  slot: 'Bullet',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { active, small },
    } = props;
    return [styles.bullet, active && styles.bulletActive, small && styles.bulletSmall];
  },
})<{ ownerState: SwiperPaginationItemOwnerState }>(({ theme }) => ({
  backgroundColor: theme.vars.palette.secondary.A400,
  borderRadius: '16px',
  height: 8,
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: 'linear',
  width: 8,

  variants: [
    {
      props: {
        active: true,
      },
      style: {
        backgroundColor: theme.vars.palette.secondary[300],
      },
    },
    {
      props: {
        small: true,
      },
      style: {
        height: 4,
        width: 4,
      },
    },
  ],
}));

const SwiperPaginationItemInput = styled('input', {
  name: 'ESSwiperPagination',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input,
})(({ theme }) => ({
  appearance: 'none',
  cursor: 'pointer',
  height: 0,
  left: 0,
  opacity: 0,
  position: 'absolute',
  top: 0,
  width: 0,

  [`&:focus-visible + .${swiperPaginationClasses.bulletActive}`]: {
    boxShadow: `0px 0px 0px 2px ${theme.vars.palette.monoA[500]}`,
  },
}));

export const SwiperPaginationItem = ({
  index,
  active,
  from,
  to,
  siblingFrom,
  siblingTo,
  name,
  transition,
  onSlideChange,
  ...props
}: SwiperPaginationItemProps) => {
  const small = (index === siblingFrom && siblingFrom > from) || (index === siblingTo && siblingTo < to);
  const ownerState = { ...props, active: index === active, small };
  const classes = useUtilityClasses(ownerState);

  return (
    <SwiperPaginationItemRoot
      key={index}
      aria-label={`${index}`}
      className={classes.item}
      ownerState={ownerState}
      style={index < siblingFrom || index > siblingTo ? { ...PAGINATION_ITEM_HIDDEN, ...transition } : transition}
    >
      <SwiperPaginationItemInput
        checked={index === active}
        className={classes.input}
        name={name}
        type="radio"
        value={index}
        onChange={onSlideChange}
      />
      <SwiperPaginationItemBullet className={classes.bullet} ownerState={ownerState} style={transition} />
    </SwiperPaginationItemRoot>
  );
};
