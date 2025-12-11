import { BadgePlacementControlProps } from './BadgePlacementControl.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

const calculateTransform = (
  placement: NonNullable<BadgePlacementControlProps['placement']>,
  offset: NonNullable<BadgePlacementControlProps['offset']>
) => {
  const [offsetX, offsetY] = offset;

  switch (placement) {
    case 'top-right':
      return `translate(calc(35% + ${offsetX}px), calc(-35% + ${offsetY}px))`;
    case 'top-left':
      return `translate(calc(-35% + ${offsetX}px), calc(-35% + ${offsetY}px))`;
    case 'bottom-right':
      return `translate(calc(35% + ${offsetX}px), calc(35% + ${offsetY}px))`;
    case 'bottom-left':
      return `translate(calc(-35% + ${offsetX}px), calc(35% + ${offsetY}px))`;
    default:
      return 'translate(35%, -35%)';
  }
};

export const BadgePlacementControl = (inProps: BadgePlacementControlProps) => {
  const {
    badge,
    children,

    className,
    style,

    overlap = 'rectangular',
    placement = 'top-right',
    offset = [0, 0],
  } = useDefaultProps({
    props: inProps,
    name: 'ESBadgePlacementControl',
  });
  const transform = calculateTransform(placement, offset);

  return (
    <div
      className={clsx(
        className,
        'es-badge-placement-control',
        `es-badge-placement-control--overlap--${overlap}`,
        `es-badge-placement-control--placement--${placement}`
      )}
      style={style}
    >
      <div className="es-badge-placement-control__wrapper" style={{ transform }}>
        {badge}
      </div>
      {children}
    </div>
  );
};
