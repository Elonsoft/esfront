import { useCallback, useEffect, useRef, useState } from 'react';

import { SidenavItemProps, SidenavItemTypeMap } from './SidenavItem.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { ListItem, ListItemIcon } from '../../ListItem';
import { useSidebarContext } from '../../Sidebar/Sidebar.context';
import { Tooltip } from '../../Tooltip';
import { useSidenavContext } from '../Sidenav.context';

export const SidenavItem: OverridableComponent<SidenavItemTypeMap> = (inProps: SidenavItemProps) => {
  const {
    className,
    id = null,
    icon,
    text,
    selected,
    onClick,
    onTouchStart,
    onKeyDown,
    onFocus,
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidenavItem',
  });

  const { open, hover, itemId, setHover, setItemId, disableItemHover } = useSidenavContext();
  const { color } = useSidebarContext();

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const ref = useRef<HTMLLIElement | null>(null);
  const shouldSkipClick = useRef(false);

  const onItemTouchStart = (event: React.TouchEvent<HTMLLIElement>) => {
    onTouchStart?.(event);

    if (id && !open && (!hover || id !== itemId)) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (id) {
      setItemId(id);

      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }

    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const onItemFocus = (event: React.FocusEvent<HTMLLIElement>) => {
    onFocus?.(event);

    if (id) {
      setItemId(id);

      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyDown?.(event);

    if (ref.current && event.key === 'ArrowRight') {
      const sidenav = ref.current.closest('.es-sidenav') as HTMLElement;
      const sidebar = sidenav.querySelector('.es-sidenav__drawer') as HTMLElement;
      const element = sidebar.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement | null;

      if (element) {
        element.focus();
      }
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipOpen = () => {
    if (text && (!id || (id !== itemId && open && disableItemHover))) {
      setTooltipOpen(true);
    }
  };

  useEffect(() => {
    if (isTooltipOpen && id && id === itemId) {
      setTooltipOpen(false);
    }
  }, [isTooltipOpen, id, itemId]);

  return (
    <Tooltip
      disableInteractive
      arrow={!!text}
      distance={-5}
      enterNextDelay={200}
      leaveDelay={120}
      open={isTooltipOpen}
      placement="right"
      slotProps={{
        popper: {
          className: 'es-sidenav-item__tooltip',
        },
      }}
      title={<>{text}</>}
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <div className="es-sidenav-item__wrapper" data-id={id}>
        <ListItem
          ref={ref}
          button
          className={clsx('es-sidenav-item', `es-sidenav-item--color--${color}`, className)}
          data-id={id}
          selected={selected}
          onClick={onItemClick}
          onFocus={onItemFocus}
          onKeyDown={onItemKeyDown}
          onTouchStart={onItemTouchStart}
          {...props}
        >
          <ListItemIcon>{icon}</ListItemIcon>
        </ListItem>
      </div>
    </Tooltip>
  );
};
