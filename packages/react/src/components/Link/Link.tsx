import { LinkProps, LinkTypeMap } from './Link.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/**
 * The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
 */
export const Link: OverridableComponent<LinkTypeMap> = (inProps: LinkProps) => {
  const {
    component: Component = 'a',
    children,
    className,
    style,
    startIcon,
    endIcon,
    variant = 'inherit',
    color = 'var(--es-common-link)',
    underline = 'always',
    showVisited,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESLink',
  });

  return (
    <Component
      className={clsx(
        'es-link',
        `es-link--underline--${underline}`,
        variant === 'inherit' ? 'es-link--variant-inherit' : variant,
        !!showVisited && 'es-link--show-visited',
        className
      )}
      style={
        {
          '--es-link-color': color,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {!!startIcon && <span className="es-link__icon es-link__icon--start">{startIcon}</span>}
      <span className="es-link__children">{children}</span>
      {!!endIcon && <span className="es-link__icon es-link__icon--end">{endIcon}</span>}
    </Component>
  );
};
