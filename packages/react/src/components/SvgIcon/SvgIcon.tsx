import { SvgIconProps } from './SvgIcon.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

/**
 * Wrapper component for the svg icons.
 */
export const SvgIcon = (inProps: SvgIconProps) => {
  const {
    children,
    className,
    style,
    size,
    width,
    height,
    container,
    containerSize,
    containerWidth,
    containerHeight,
    title,
    ContainerProps,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESSvgIcon' });

  const svg = (
    <svg
      className={clsx('es-svg-icon__svg', !container && ['es-svg-icon', className])}
      focusable="false"
      {...props}
      style={{ width: width || size, height: height || size, ...(container ? null : style) }}
    >
      {children}
      {title ? <title>{title}</title> : null}
    </svg>
  );

  if (container) {
    return (
      <div
        className={clsx('es-svg-icon', className)}
        {...ContainerProps}
        style={{
          width: containerWidth || containerSize || width || size,
          height: containerHeight || containerSize || height || size,
          ...style,
          ...ContainerProps?.style,
        }}
      >
        {svg}
      </div>
    );
  }

  return svg;
};
