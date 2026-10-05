'use client';

import { RefAttributes, useState } from 'react';

import { SidebarToggleProps } from './SidebarToggle.types';

import clsx from 'clsx';

import { IconChevronLeftLineW300 } from '../../../icons';
import { useDefaultProps } from '../../../theming';
import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';
import { useSidebarContext } from '../Sidebar.context';
import { SidebarDivider } from '../SidebarDivider';

/**
 * @see `Sidebar`
 */
export const SidebarToggle = ({ ref, ...inProps }: SidebarToggleProps & RefAttributes<HTMLDivElement>) => {
  const {
    className,
    style,
    open,
    icon = <IconChevronLeftLineW300 container containerSize="20px" />,
    labelOpen,
    labelHide,
    onClick,
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarToggle',
  });

  // The tooltip records which `open` state it was shown for, so toggling the sidebar collapses it
  // without a synchronous setState in an effect.
  const [tooltip, setTooltip] = useState({ isOpen: false, shownFor: open });

  const isTooltipOpen = tooltip.isOpen && tooltip.shownFor === open;

  const { color } = useSidebarContext();

  const onCloseTooltip = () => {
    setTooltip({ isOpen: false, shownFor: open });
  };

  const onClickToggle = () => {
    onCloseTooltip();
    onClick?.();
  };

  return (
    <div ref={ref} className={clsx('es-sidebar-toggle', className)} style={style}>
      <SidebarDivider />

      <Tooltip
        arrow
        disableInteractive
        TransitionProps={{ timeout: { enter: 225, exit: 0 } }}
        enterDelay={100}
        enterNextDelay={200}
        open={isTooltipOpen}
        placement="right"
        slotProps={{
          popper: {
            className: 'es-sidebar-toggle__tooltip',
          },
        }}
        title={<>{open ? labelHide : labelOpen}</>}
        onClose={onCloseTooltip}
        onOpen={() => setTooltip({ isOpen: true, shownFor: open })}
      >
        <Button
          aria-label={open ? labelHide : labelOpen}
          className={clsx(
            'es-sidebar-toggle__button',
            open && 'es-sidebar-toggle__button--open',
            `es-sidebar-toggle__button--color--${color}`
          )}
          color="mono-a"
          onClick={onClickToggle}
        >
          {icon}
        </Button>
      </Tooltip>
    </div>
  );
};
