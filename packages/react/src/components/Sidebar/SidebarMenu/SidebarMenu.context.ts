import { createContext, useContext } from 'react';

export interface SidebarMenuContextValue {
  /** The array of opened menu items. */
  openedItems: string[];
  /** How the menu items should be opened. */
  behaviour?: 'click' | 'hover';
  /** Callback fired when the menu item is opened. */
  onOpen: (id: string) => void;
  /** Callback fired when the menu item is closed. */
  onClose: (id: string) => void;
}

export const SidebarMenuContext = createContext<SidebarMenuContextValue | null>(null);

export const useSidebarMenuContext = () => {
  const value = useContext(SidebarMenuContext);

  if (value === null) {
    throw new Error('No provider for SidebarMenuContext');
  }

  return value;
};
