import { BreadcrumbProps, BreadcrumbTypeMap } from './Breadcrumb.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { IconBreadcrumbArrowRightLineW500 } from '../../../icons';
import { Button } from '../../Button';
import { TooltipEllipsis } from '../../TooltipEllipsis';

export const Breadcrumb: OverridableComponent<BreadcrumbTypeMap> = (inProps: BreadcrumbProps) => {
  const {
    children,
    itemContent,
    className,
    style,
    separator = <IconBreadcrumbArrowRightLineW500 container containerWidth="16px" />,
    disabled,
    position,
    shouldFirstShrink,

    ...props
  } = useDefaultProps({ props: inProps, name: 'ESBreadcrumb' });

  return (
    <li
      className={clsx(
        'es-breadcrumb',
        disabled && 'es-breadcrumb--disabled',
        shouldFirstShrink && 'es-breadcrumb--should-first-shrink',
        className
      )}
      itemProp={position ? 'itemListElement' : undefined}
      itemScope={position ? true : undefined}
      itemType={position ? 'https://schema.org/ListItem' : undefined}
      style={style}
    >
      <TooltipEllipsis
        disableInteractive
        title={<span className="caption">{children}</span>}
        {...(position ? {} : { disableHoverListener: true, disableFocusListener: true, disableTouchListener: true })}
        slotProps={{
          popper: {
            className: 'es-breadcrumb__tooltip',
          },
        }}
      >
        {({ ref, childrenRef }) => (
          <div ref={ref as never} style={{ minWidth: 0 }}>
            <Button
              className="es-breadcrumb__content"
              color="mono-a"
              disabled={disabled}
              itemProp={position ? 'item' : undefined}
              size="300"
              {...props}
            >
              {position ? (
                <span ref={childrenRef} content={itemContent} itemProp="name">
                  {children}
                </span>
              ) : (
                <>{children}</>
              )}
            </Button>
          </div>
        )}
      </TooltipEllipsis>

      {!!position && <meta content={position} itemProp="position" />}
      <div className="es-breadcrumb__separator">{separator}</div>
    </li>
  );
};
