import { useEffect, useState } from 'react';

import { SidebarToggleProps } from './SidebarToggle.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { IconChevronLeftLineW300 } from '../../../icons';
import { Button } from '../../Button';
import { Tooltip } from '../../Tooltip';
import { useSidebarContext } from '../Sidebar.context';
import { SidebarDivider } from '../SidebarDivider';

export const SidebarToggle = (inProps: SidebarToggleProps) => {
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

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const { color } = useSidebarContext();

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onCloseTooltip = () => {
    setTooltipOpen(false);
  };

  const onClickToggle = () => {
    onCloseTooltip();
    onClick?.();
  };

  return (
    <div className={clsx('es-sidebar-toggle', className)} style={style}>
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
        onOpen={() => setTooltipOpen(true)}
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
