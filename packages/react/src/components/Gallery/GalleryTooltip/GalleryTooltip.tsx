import clsx from 'clsx';

import { Tooltip, TooltipProps } from '../../Tooltip';

/**
 * @see `Gallery`
 */
export const GalleryTooltip = (props: TooltipProps) => {
  return (
    <Tooltip
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
