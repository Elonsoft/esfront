import { createContext, Dispatch, useContext } from 'react';

export interface SidenavContextValue {
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** If `true`, the component is shown. */
  hover: boolean;
  /** Set the hover state. */
  setHover: Dispatch<React.SetStateAction<boolean>>;
  /** The id of the selected `SidenavItem` element. */
  itemId: string | null;
  /** Set the id of the selected element. */
  setItemId: Dispatch<React.SetStateAction<string | null>>;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
}

export const SidenavContext = createContext<SidenavContextValue | null>(null);

export const useSidenavContext = () => {
  const value = useContext(SidenavContext);

  if (value === null) {
    throw new Error('No provider for SidenavContext');
  }

  return value;
};
