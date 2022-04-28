import { useCallback, useState } from 'react';

/**
 * @returns The update function.
 */
export const useForceUpdate = () => {
  const [, setState] = useState({});

  const update = useCallback(() => {
    setState({});
  }, []);

  return update;
};
