import { createContext, useContext } from 'react';

export interface BottomSheetContextValue {
  isFullHeight: boolean;
}

export const BottomSheetContext = createContext<BottomSheetContextValue | null>(null);

/**
 * The hook that returns the bottom sheet context. Throws when used outside of `BottomSheet`.
 */
export const useBottomSheetContext = () => {
  const value = useContext(BottomSheetContext);

  if (value === null) {
    throw new Error('No provider for BottomSheetContext.');
  }

  return value;
};
