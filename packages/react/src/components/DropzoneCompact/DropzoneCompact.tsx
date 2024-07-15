import { forwardRef } from 'react';

import { DropzoneCompactProps } from './DropzoneCompact.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useDragOver } from '../../hooks/useDragOver';

/**
 * This component allows to create droppable area when using dnd.
 */
export const DropzoneCompact = forwardRef<HTMLDivElement, DropzoneCompactProps>(function DropzoneCompact(inProps, ref) {
  const {
    className,
    style,
    children,
    onDragEnter: onDragEnterProp,
    onDragLeave: onDragLeaveProp,
    onDragOver: onDragOverProp,
    onDrop: onDropProp,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDropzoneCompact',
  });

  const { isDragOver, onDragEnter, onDragLeave, onDrop } = useDragOver();

  const onDropzoneDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    onDragEnter();
    onDragEnterProp?.(event);
  };

  const onDropzoneDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    onDragLeave();
    onDragLeaveProp?.(event);
  };

  const onDropzoneDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDragOverProp?.(event);
  };

  const onDropzoneDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDrop();
    onDropProp?.(event);
  };

  return (
    <div
      ref={ref}
      className={clsx(className, 'es-dropzone-compact', isDragOver && 'es-dropzone-compact--drag-over', 'caption')}
      style={style}
      onDragEnter={onDropzoneDragEnter}
      onDragLeave={onDropzoneDragLeave}
      onDragOver={onDropzoneDragOver}
      onDrop={onDropzoneDrop}
    >
      {children}
    </div>
  );
});
