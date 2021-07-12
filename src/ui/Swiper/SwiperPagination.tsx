import { useMemo } from 'react';

import clsx from 'clsx';
import { useStyles } from './SwiperPagination.styles';
import { SwiperPaginationProps } from './SwiperPagination.types';

import useThemeProps from '@material-ui/core/styles/useThemeProps';

const PAGINATION_ITEM_HIDDEN = {
  height: 0,
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  opacity: 0,
  padding: 0,
  width: 0
};

export const SwiperPagination: React.FC<SwiperPaginationProps> & { count: number } = (inProps) => {
  const {
    className,
    classes,
    direction,
    from,
    to,
    active,
    onChange,
    position = 'end',
    variant = 'small',
    siblingCount,
    transitionDuration
  } = useThemeProps({
    props: inProps,
    name: 'ESSwiperPagination'
  });
  const styles = useStyles({ classes });

  const name = useMemo(() => `pagination-${SwiperPagination.count++}`, []);
  const transition =
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

  return (
    <div className={clsx(styles.root, styles[direction], styles[position], styles[variant], className)}>
      {bullets.map((index) => (
        <label
          key={index}
          className={clsx(styles.item, { [styles.itemActive]: index === active })}
          style={index < siblingFrom || index > siblingTo ? { ...PAGINATION_ITEM_HIDDEN, ...transition } : transition}
          aria-label={`${index}`}
        >
          <input
            className={styles.input}
            type="radio"
            name={name}
            value={index}
            checked={index === active}
            onChange={onSlideChange}
          ></input>
          <div
            className={clsx(
              styles.bullet,
              { [styles.bulletActive]: index === active },
              {
                [styles.bulletSmall]:
                  (index === siblingFrom && siblingFrom > from) || (index === siblingTo && siblingTo < to)
              }
            )}
            style={transition}
          ></div>
        </label>
      ))}
    </div>
  );
};

SwiperPagination.count = 0;
