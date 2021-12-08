import { useMemo } from 'react';

import { SwiperPaginationProps } from './SwiperPagination.types';

import clsx from 'clsx';
import { getSwiperPaginationUtilityClass, swiperPaginationClasses } from './SwiperPagination.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { SwiperPaginationItem } from './SwiperPaginationItem';

type SwiperPaginationOwnerState = {
  classes?: SwiperPaginationProps['classes'];
  direction: SwiperPaginationProps['direction'];
  position: SwiperPaginationProps['position'];
  variant: SwiperPaginationProps['variant'];
};

const useUtilityClasses = (ownerState: SwiperPaginationOwnerState) => {
  const { classes, direction, position, variant } = ownerState;

  const slots = {
    root: ['root', direction, position, variant]
  };

  return composeClasses(slots, getSwiperPaginationUtilityClass, classes);
};

const SwiperPaginationRoot = styled('div', {
  name: 'ESSwiperPagination',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { direction, position, variant }
    } = props;
    return [styles.root, styles[direction], styles[position], styles[variant]];
  }
})<{ ownerState: SwiperPaginationOwnerState }>(({ ownerState }) => ({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  ...(ownerState.direction === 'horizontal' && {
    flexDirection: 'row',
    width: '100%',
    [`&.${swiperPaginationClasses.start}`]: {
      marginBottom: 14,
      marginTop: -2
    },
    [`&.${swiperPaginationClasses.end}`]: {
      marginBottom: -2,
      marginTop: 14
    }
  }),

  ...(ownerState.direction === 'vertical' && {
    flexDirection: 'column',
    height: '100%',
    [`&.${swiperPaginationClasses.start}`]: {
      marginLeft: -2,
      marginRight: 14
    },
    [`&.${swiperPaginationClasses.end}`]: {
      marginLeft: 14,
      marginRight: -2
    }
  }),

  ...(ownerState.position === 'start' && {
    order: -1
  }),

  ...(ownerState.variant === 'long' && {
    [`&.${swiperPaginationClasses.horizontal} .${swiperPaginationClasses.bulletActive}`]: {
      width: 16
    },
    [`&.${swiperPaginationClasses.vertical} .${swiperPaginationClasses.bulletActive}`]: {
      height: 16
    }
  }),

  ...(ownerState.variant === 'big' && {
    [`& .${swiperPaginationClasses.itemActive}`]: {
      padding: 2
    },
    [`& .${swiperPaginationClasses.bulletActive}`]: {
      height: 12,
      width: 12
    }
  })
}));

export const SwiperPagination: React.FC<SwiperPaginationProps> & { count: number } = (inProps) => {
  const {
    className,
    direction,
    from,
    to,
    active,
    onChange,
    position = 'end',
    variant = 'small',
    siblingCount,
    transitionDuration,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSwiperPagination'
  });

  const name = useMemo(() => `pagination-${SwiperPagination.count++}`, []);
  const transition: { transitionDuration?: string } =
    !!transitionDuration || transitionDuration === 0 ? { transitionDuration: `${transitionDuration}ms` } : {};

  const bullets = useMemo(() => {
    const result: Array<number> = [];
    for (let i = from; i <= to; i++) {
      result.push(i);
    }
    return result;
  }, [from, to]);

  const { siblingFrom, siblingTo } = useMemo(() => {
    const siblingFrom = siblingCount
      ? Math.max(from, active - siblingCount - Math.max(0, active + siblingCount - to))
      : from;
    const siblingTo = siblingCount
      ? Math.min(to, active + siblingCount + Math.max(0, from - (active - siblingCount)))
      : to;
    return { siblingFrom, siblingTo };
  }, [from, to, active, siblingCount]);

  const onSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(+event.target.value);
    }
  };

  if (to <= from) {
    return null;
  }

  const ownerState = { ...props, direction, position, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <SwiperPaginationRoot className={clsx(classes.root, className)} ownerState={ownerState}>
      {bullets.map((index) => (
        <SwiperPaginationItem
          key={index}
          index={index}
          active={active}
          from={from}
          to={to}
          siblingFrom={siblingFrom}
          siblingTo={siblingTo}
          name={name}
          transition={transition}
          onSlideChange={onSlideChange}
        />
      ))}
    </SwiperPaginationRoot>
  );
};

SwiperPagination.count = 0;
