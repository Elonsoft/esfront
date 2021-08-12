import { useMemo } from 'react';

import clsx from 'clsx';
import { styled } from '@material-ui/core/styles';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { swiperPaginationClasses, getSwiperPaginationUtilityClass } from './SwiperPagination.classes';

import { SwiperPaginationProps } from './SwiperPagination.types';
import { SwiperPaginationItem } from './SwiperPaginationItem';

import useThemeProps from '@material-ui/core/styles/useThemeProps';

type SwiperPaginationStyleProps = {
  classes?: SwiperPaginationProps['classes'];
  direction: SwiperPaginationProps['direction'];
  position: SwiperPaginationProps['position'];
  variant: SwiperPaginationProps['variant'];
};

const useUtilityClasses = (styleProps: SwiperPaginationStyleProps) => {
  const { classes, direction, position, variant } = styleProps;

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
      styleProps: { direction, position, variant }
    } = props;
    return [styles.root, styles[direction], styles[position], styles[variant]];
  }
})<{ styleProps: SwiperPaginationStyleProps }>(({ styleProps }) => ({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  ...(styleProps.direction === 'horizontal' && {
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

  ...(styleProps.direction === 'vertical' && {
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

  ...(styleProps.position === 'start' && {
    order: -1
  }),

  ...(styleProps.variant === 'long' && {
    [`&.${swiperPaginationClasses.horizontal} .${swiperPaginationClasses.bulletActive}`]: {
      width: 16
    },
    [`&.${swiperPaginationClasses.vertical} .${swiperPaginationClasses.bulletActive}`]: {
      height: 16
    }
  }),

  ...(styleProps.variant === 'big' && {
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

  const styleProps = { ...props, direction, position, variant };
  const classes = useUtilityClasses(styleProps);

  return (
    <SwiperPaginationRoot className={clsx(classes.root, className)} styleProps={styleProps}>
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
