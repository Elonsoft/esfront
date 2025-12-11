import { Children, cloneElement, CSSProperties, Fragment, isValidElement, useRef, useState } from 'react';

import { BreadcrumbsProps } from './Breadcrumbs.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Menu from '@mui/material/Menu';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { Breadcrumb } from './Breadcrumb/Breadcrumb';

import { useResizeObserver } from '../../hooks';
import { IconDotsHorizontal2LineW300 } from '../../icons';
import { MenuItem } from '../MenuItem';
import { TooltipEllipsis } from '../TooltipEllipsis';

/**
 * Breadcrumbs consist of a list of links that help a user visualize a page's location
 * within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".
 */
export const Breadcrumbs = (inProps: BreadcrumbsProps) => {
  const {
    children,
    className,
    style,
    iconButtonMore = <IconDotsHorizontal2LineW300 />,
    labelButtonMore,
  } = useDefaultProps({ props: inProps, name: 'ESBreadcrumbs' });

  const [lastIndex, setLastIndex] = useState(Children.count(children) - 1);

  useEnhancedEffect(() => {
    setLastIndex(0);
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const ref = useRef<HTMLOListElement | null>(null);

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  useResizeObserver(ref, () => {
    if (typeof window !== 'undefined' && ref.current) {
      let width = 0;
      const nodes = ref.current.querySelectorAll('.es-breadcrumb:not(.es-breadcrumbs__button-more)');
      const button = ref.current.querySelector('.es-breadcrumbs__button-more');

      nodes.forEach((item) => {
        (item as HTMLElement).style.display = 'flex';
        width += (item as HTMLElement).offsetWidth;
      });

      if (width > ref.current.offsetWidth) {
        width += (button as HTMLElement).offsetWidth;
      }

      let i = 1;

      while (width > ref.current.offsetWidth && i < nodes.length - 1) {
        width -= (nodes[i] as HTMLElement).offsetWidth;
        i++;
      }

      for (let j = 1; j < i; j++) {
        (nodes[j] as HTMLElement).style.display = 'none';
      }

      onCloseMenu();
      setLastIndex(i);
    }
  });

  return (
    <nav className={clsx('es-breadcrumbs', className)} style={style}>
      <ol
        ref={ref}
        itemScope
        className={clsx('es-breadcrumbs__list', open && 'es-breadcrumbs__list--open')}
        itemType="https://schema.org/BreadcrumbList"
      >
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }

          const item = cloneElement(child, {
            position: (idx + 1).toString(),
            shouldFirstShrink: lastIndex >= Children.count(children) - 1,
            style: { display: idx > 0 && idx < lastIndex ? 'none' : 'flex' },
          } as { position: string; shouldFirstShrink: boolean; style: CSSProperties });

          return (
            <Fragment key={idx}>
              {item}

              {idx === 0 && (
                <Breadcrumb
                  aria-label={labelButtonMore}
                  className="es-breadcrumbs__button-more"
                  style={{ display: lastIndex > 1 ? 'flex' : 'none' }}
                  onClick={onOpenMenu}
                >
                  {iconButtonMore}
                </Breadcrumb>
              )}
            </Fragment>
          );
        })}
      </ol>

      <Menu anchorEl={anchorEl} className="es-breadcrumbs__menu" open={open} onClose={onCloseMenu}>
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }

          const { children, ...rest } = child.props;

          if (idx >= 1 && idx < lastIndex) {
            return (
              <TooltipEllipsis
                arrow
                disableInteractive
                slotProps={{ popper: { className: 'es-breadcrumbs__tooltip' } }}
                title={<span className="caption">{children}</span>}
              >
                {({ ref, childrenRef }) => (
                  <MenuItem ref={ref} className={clsx('es-breadcrumbs__menu-item')} size="100" {...rest}>
                    <span ref={childrenRef} style={{ textWrap: 'nowrap' }}>
                      {children}
                    </span>
                  </MenuItem>
                )}
              </TooltipEllipsis>
            );
          }

          return null;
        })}
      </Menu>
    </nav>
  );
};
