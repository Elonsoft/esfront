import { useState } from 'react';

/**
 * The hook that allows to watch over the drag over state.
 * @returns Event handlers for the target element and `isDragOver` state.
 */
export const useDragOver = () => {
  const [count, setCount] = useState(0);

  const onDragEnter = () => {
    setCount((c) => c + 1);
  };

  const onDragLeave = () => {
    setCount((c) => c - 1);
  };

  const onDrop = () => {
    setCount(0);
  };

  return { onDragEnter, onDragLeave, onDrop, isDragOver: count > 0 };
};
