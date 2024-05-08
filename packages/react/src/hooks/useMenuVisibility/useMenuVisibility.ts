import { useCallback, useState } from 'react';

/** The hooks that returns the common state and callbacks for tracking visibility state of dropdown menus. */
export const useMenuVisibility = () => {
  const [visible, setVisible] = useState(false);

  const onEnter = useCallback(() => {
    setVisible(true);
  }, []);

  const onExited = useCallback(() => {
    setVisible(false);
  }, []);

  return [visible, onEnter, onExited] as const;
};
