import { PageHGroupHeadingProps } from './PageHGroupHeading.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { TooltipEllipsis } from '../../../components/TooltipEllipsis';

export const PageHGroupHeading = (inProps: PageHGroupHeadingProps) => {
  const {
    className,
    style,
    children,
    maxLines = 1,
    endAdornment,
    TooltipProps,
  } = useDefaultProps({
    props: inProps,
    name: 'ESPageHGroupHeading',
  });

  return (
    <div className={clsx(className, 'es-page-h-group-heading', 'h2')}>
      <TooltipEllipsis
        arrow
        disableInteractive
        placement="top"
        title={children || false}
        {...TooltipProps}
        slotProps={{
          ...TooltipProps?.slotProps,
          popper: {
            ...TooltipProps?.slotProps?.popper,
            className: clsx('es-page-h-group-heading__tooltip', TooltipProps?.slotProps?.popper?.className),
          },
        }}
      >
        {({ ref }) => (
          <h1
            ref={ref as React.RefObject<HTMLHeadingElement>}
            className="es-page-h-group-heading__title"
            style={{ '--es-page-h-group-heading-max-lines': maxLines, ...style } as React.CSSProperties}
          >
            {children}
          </h1>
        )}
      </TooltipEllipsis>
      {!!endAdornment && <div className="es-page-h-group-heading__end-adornment">{endAdornment}</div>}
    </div>
  );
};
