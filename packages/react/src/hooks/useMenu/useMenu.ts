import { useCallback, useState } from 'react';

/** The hooks that returns the common state and callbacks for managing dropdown menus. */
export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onMenuClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const onMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return [anchorEl, onMenuClick, onMenuClose, setAnchorEl] as const;
};
