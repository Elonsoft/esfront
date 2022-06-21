import { useMemo, useState } from 'react';

import { SidebarMenuProps } from './SidebarMenu.types';

import clsx from 'clsx';
import { getSidebarMenuUtilityClass } from './SidebarMenu.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { SidebarMenuContext } from './SidebarMenu.context';

type SidebarMenuOwnerState = {
  classes?: SidebarMenuProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarMenuOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSidebarMenuUtilityClass, classes);
};

const SidebarMenuRoot = styled('div', {
  name: 'ESSidebarMenu',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: '0',
  gap: '2px',
  textAlign: 'center',
  overflowX: 'hidden',
  padding: '8px 0'
}));

export const SidebarMenu = (inProps: SidebarMenuProps) => {
  const {
    className,
    children,
    behaviour = 'click',
    exclusive = false,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarMenu'
  });

  const [openedItems, setItems] = useState<string[]>([]);

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

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarMenuContext.Provider value={value}>
      <SidebarMenuRoot className={clsx(className, classes.root)} sx={sx} {...props}>
        {children}
      </SidebarMenuRoot>
    </SidebarMenuContext.Provider>
  );
};
