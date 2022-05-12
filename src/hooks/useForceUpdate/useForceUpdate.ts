import { useCallback, useState } from 'react';

/**
 * The hook that returns a function that forces component to re-render when called.
 * @returns The update function.
 */
export const useForceUpdate = () => {
  const [, setState] = useState({});

  const update = useCallback(() => {
    setState({});
  }, []);

  return update;
};
