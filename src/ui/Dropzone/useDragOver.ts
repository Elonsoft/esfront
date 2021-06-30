import { useState } from 'react';

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
