import { useCallback, useState } from 'react';

/**
 * The hook that allows to watch over the drag over state.
 * @returns Event handlers for the target element and `isDragOver` state.
 */
export const useDragOver = () => {
  const [count, setCount] = useState(0);

  const onDragEnter = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const onDragLeave = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const onDrop = useCallback(() => {
    setCount(0);
  }, []);

  return { onDragEnter, onDragLeave, onDrop, isDragOver: count > 0 };
};
