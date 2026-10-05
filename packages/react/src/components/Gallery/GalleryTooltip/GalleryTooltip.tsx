import { RefAttributes } from 'react';

import clsx from 'clsx';

import { Tooltip, TooltipProps } from '../../Tooltip';

/**
 * @see `Gallery`
 */
export const GalleryTooltip = ({ ref, ...props }: TooltipProps & RefAttributes<unknown>) => {
  return (
    <Tooltip
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        popper: {
          ...props.slotProps?.popper,
          className: clsx('es-gallery-tooltip', props.slotProps?.popper?.className),
        },
      }}
    />
  );
};
