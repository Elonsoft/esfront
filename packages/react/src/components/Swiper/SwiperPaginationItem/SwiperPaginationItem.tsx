import { SwiperPaginationItemProps } from './SwiperPaginationItem.types';

import clsx from 'clsx';

const PAGINATION_ITEM_HIDDEN = {
  height: 0,
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  opacity: 0,
  padding: 0,
  width: 0,
};

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
}: SwiperPaginationItemProps) => {
  const small = (index === siblingFrom && siblingFrom > from) || (index === siblingTo && siblingTo < to);

  return (
    <label
      key={index}
      aria-label={`${index}`}
      className={clsx('es-swiper-pagination-item', index === active && 'es-swiper-pagination-item--active')}
      style={index < siblingFrom || index > siblingTo ? { ...PAGINATION_ITEM_HIDDEN, ...transition } : transition}
    >
      <input
        checked={index === active}
        className="es-swiper-pagination-item__input"
        name={name}
        type="radio"
        value={index}
        onChange={onSlideChange}
      />
      <div
        className={clsx(
          'es-swiper-pagination-item__bullet',
          index === active && 'es-swiper-pagination-item__bullet--active',
          small && 'es-swiper-pagination-item__bullet--small'
        )}
        style={transition}
      />
    </label>
  );
};
