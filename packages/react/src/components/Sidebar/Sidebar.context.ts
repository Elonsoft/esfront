import { createContext, useContext } from 'react';

export interface SidebarContextValue {
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** The color of the component. */
  color: 'default' | 'primary' | 'secondary';
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

/**
 * The hook that returns the sidebar context. Throws when used outside of `Sidebar`.
 */
export const useSidebarContext = () => {
  const value = useContext(SidebarContext);

  if (value === null) {
    throw new Error('No provider for SidebarContext');
  }

  return value;
};
