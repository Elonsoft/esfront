import { useMemo, useState } from 'react';

import { SidebarMenuProps } from './SidebarMenu.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { SidebarMenuContext } from './SidebarMenu.context';

export const SidebarMenu = (inProps: SidebarMenuProps) => {
  const {
    className,
    style,
    children,
    behaviour = 'click',
    exclusive = false,
    defaultOpenIds = [],
  } = useDefaultProps({
    props: inProps,
    name: 'ESSidebarMenu',
  });

  const [openedItems, setItems] = useState<string[]>(defaultOpenIds);

  const onOpen = (id: string) => {
    if (exclusive) {
      setItems([id]);
    } else {
      setItems((prev) => [...prev, id]);
    }
  };

  const onClose = (id: string) => {
    setItems((prev) => prev.filter((item) => item !== id));
  };

  const value = useMemo(() => {
    return { openedItems, behaviour, onOpen, onClose };
  }, [openedItems, exclusive, behaviour, onOpen, onClose]);

  return (
    <SidebarMenuContext.Provider value={value}>
      <div className={clsx(className, 'es-sidebar-menu')} style={style}>
        {children}
      </div>
    </SidebarMenuContext.Provider>
  );
};
