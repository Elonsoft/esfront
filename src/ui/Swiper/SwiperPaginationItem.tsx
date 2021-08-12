import { styled } from '@material-ui/core/styles';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { swiperPaginationClasses, getSwiperPaginationUtilityClass } from './SwiperPagination.classes';

import { SwiperPaginationProps } from './SwiperPagination.types';
import { SwiperPaginationItemProps } from './SwiperPaginationItem.types';

type SwiperPaginationItemStyleProps = {
  classes?: SwiperPaginationProps['classes'];
  index: number;
  active: number;
  small: boolean;
};

const useUtilityClasses = (styleProps: SwiperPaginationItemStyleProps) => {
  const { classes, index, active, small } = styleProps;

  const slots = {
    item: ['item', index === active && 'itemActive'],
    bullet: ['bullet', index === active && 'bulletActive', small && 'bulletSmall'],
    input: ['input']
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
  width: 0
};

const SwiperPaginationItemRoot = styled('label', {
  name: 'ESSwiperPagination',
  slot: 'Item',
  overridesResolver: (props, styles) => {
    const {
      styleProps: { index, active }
    } = props;
    return [styles.item, index === active && styles.itemActive];
  }
})<{ styleProps: SwiperPaginationItemStyleProps }>(({ theme, styleProps }) => ({
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
    outline: 'none'
  },
  [`&:hover .${swiperPaginationClasses.bullet}`]: {
    backgroundColor: theme.palette.secondary.A600
  },
  [`&:active .${swiperPaginationClasses.bullet}`]: {
    backgroundColor: theme.palette.secondary.A800
  },

  ...(styleProps.index === styleProps.active && {
    [`&:hover .${swiperPaginationClasses.bullet}, &:active .${swiperPaginationClasses.bullet}`]: {
      backgroundColor: theme.palette.secondary[300]
    }
  })
}));

const SwiperPaginationItemBullet = styled('div', {
  name: 'ESSwiperPagination',
  slot: 'Bullet',
  overridesResolver: (props, styles) => {
    const {
      styleProps: { index, active, small }
    } = props;
    return [styles.bullet, index === active && styles.bulletActive, small && styles.bulletSmall];
  }
})<{ styleProps: SwiperPaginationItemStyleProps }>(({ theme, styleProps }) => ({
  backgroundColor: theme.palette.secondary.A400,
  borderRadius: '16px',
  height: 8,
  transitionDuration: `${theme.transitions.duration.shortest}ms`,
  transitionTimingFunction: 'linear',
  width: 8,

  ...(styleProps.index === styleProps.active && {
    backgroundColor: theme.palette.secondary[300]
  }),

  ...(styleProps.small && {
    height: 4,
    width: 4
  })
}));

const SwiperPaginationItemInput = styled('input', {
  name: 'ESSwiperPagination',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input
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
    boxShadow: `0 0 0 7px ${theme.palette.secondary.A500}`
  }
}));

export const SwiperPaginationItem: React.FC<SwiperPaginationItemProps> = ({
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
}) => {
  const small = (index === siblingFrom && siblingFrom > from) || (index === siblingTo && siblingTo < to);
  const styleProps = { ...props, index, active, small };
  const classes = useUtilityClasses(styleProps);

  return (
    <SwiperPaginationItemRoot
      key={index}
      className={classes.item}
      styleProps={styleProps}
      style={index < siblingFrom || index > siblingTo ? { ...PAGINATION_ITEM_HIDDEN, ...transition } : transition}
      aria-label={`${index}`}
    >
      <SwiperPaginationItemInput
        className={classes.input}
        type="radio"
        name={name}
        value={index}
        checked={index === active}
        onChange={onSlideChange}
      />
      <SwiperPaginationItemBullet
        className={classes.bullet}
        styleProps={styleProps}
        style={transition}
      ></SwiperPaginationItemBullet>
    </SwiperPaginationItemRoot>
  );
};
