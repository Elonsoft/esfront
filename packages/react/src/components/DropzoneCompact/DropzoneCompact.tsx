import { forwardRef } from 'react';

import { DropzoneCompactProps } from './DropzoneCompact.types';

import clsx from 'clsx';
import { dropzoneCompactClasses, getDropzoneCompactUtilityClass } from './DropzoneCompact.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { useDragOver } from '../../hooks/useDragOver';

type DropzoneCompactOwnerState = {
  classes?: DropzoneCompactProps['classes'];
  isDragOver: boolean;
};

const useUtilityClasses = (ownerState: DropzoneCompactOwnerState) => {
  const { classes, isDragOver } = ownerState;

  const slots = {
    root: ['root', isDragOver && 'dragOver'],
  };

  return composeClasses(slots, getDropzoneCompactUtilityClass, classes);
};

const DropzoneCompactRoot = styled(Typography, {
  name: 'ESDropzoneCompact',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isDragOver },
    } = props;
    return [styles.root, isDragOver && styles.dragOver];
  },
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.vars.palette.monoA.A25,
  borderRadius: '4px',
  color: theme.vars.palette.monoA.A550,
  display: 'flex',
  justifyContent: 'center',
  outline: `1px dashed ${theme.vars.palette.monoA.A300}`,
  outlineOffset: '-1px',
  padding: '12px',
  transitionDuration: `${theme.transitions.duration.short}ms`,
  transitionProperty: 'background-color',
  transitionTimingFunction: theme.transitions.easing.easeInOut,

  [`&.${dropzoneCompactClasses.dragOver}`]: {
    backgroundColor: theme.vars.palette.monoA.A50,
  },
})) as typeof Typography;

/**
 * This component allows to create droppable area when using dnd.
 */
export const DropzoneCompact = forwardRef<HTMLDivElement, DropzoneCompactProps>(function DropzoneCompact(inProps, ref) {
  const {
    className,
    sx,
    children,
    onDragEnter: onDragEnterProp,
    onDragLeave: onDragLeaveProp,
    onDragOver: onDragOverProp,
    onDrop: onDropProp,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDropzoneCompact',
  });

  const { isDragOver, onDragEnter, onDragLeave, onDrop } = useDragOver();

  const ownerState = { ...props, isDragOver };
  const classes = useUtilityClasses(ownerState);

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
    <DropzoneCompactRoot
      ref={ref}
      className={clsx(classes.root, className)}
      component="div"
      sx={sx}
      variant="caption"
      onDragEnter={onDropzoneDragEnter}
      onDragLeave={onDropzoneDragLeave}
      onDragOver={onDropzoneDragOver}
      onDrop={onDropzoneDrop}
    >
      {children}
    </DropzoneCompactRoot>
  );
});
