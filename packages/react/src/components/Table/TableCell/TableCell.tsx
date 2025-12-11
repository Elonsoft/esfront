import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useTableCellContext } from './TableCell.context';

import { useLatest } from '../../../hooks/useLatest';

const RESIZE_STEPS: Record<string, number | undefined> = {
  ArrowLeft: -16,
  ArrowRight: 16,
};

export const TableCell = memo(
  forwardRef<HTMLDivElement, TableCellProps>(function TableCell(inProps, inRef) {
    const context = useTableCellContext();

    const {
      children,
      className,
      style,
      variant = context.variant,
      rowDivider = context.rowDividers,
      colDivider = context.colDividers,
      padding = 'normal',
      align = 'flex-start',
      id,
      onResize,
      onResizeCommit,
      colSpan,
      minWidth,
      labelResize,
      pin,
      overlap,
    } = useDefaultProps({
      props: inProps,
      name: 'ESTableCell',
    });

    const ref = useRef<HTMLDivElement | null>(null);
    const rootRef = useForkRef(ref, inRef);

    const screenX = useRef<number | null>(null);

    const [isResizing, setResizing] = useState(false);

    const onResizeLatest = useLatest(onResize);
    const onResizeCommitLatest = useLatest(onResizeCommit);

    const onMouseMoveLatest = useLatest((event: MouseEvent) => {
      if (onResizeLatest.current && ref.current) {
        if (screenX.current !== null) {
          const width = Math.max(
            minWidth || 0,
            ref.current.getBoundingClientRect().width + (event.screenX - screenX.current)
          );
          onResizeLatest.current(width, ref.current);
        }

        screenX.current = event.screenX;
      }
    });

    const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
      screenX.current = event.screenX;
      setResizing(true);
    };

    const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      const step = RESIZE_STEPS[event.key];

      if (onResizeLatest.current && ref.current && step) {
        event.preventDefault();
        const width = Math.max(
          minWidth || 0,
          ref.current.getBoundingClientRect().width + (event.shiftKey ? step * 3 : step)
        );
        onResizeLatest.current(width, ref.current);
      }
    };

    const onKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && onResizeCommitLatest.current && ref.current) {
        onResizeCommitLatest.current(ref.current.getBoundingClientRect().width, ref.current);
      }
    };

    const onClick = (event: React.MouseEvent) => {
      if (overlap) {
        event.stopPropagation();
      }
    };

    useEffect(() => {
      if (isResizing) {
        const onMouseMove = (event: MouseEvent) => {
          onMouseMoveLatest.current(event);
        };

        const onMouseUp = () => {
          screenX.current = null;
          setResizing(false);

          if (onResizeCommitLatest.current && ref.current) {
            onResizeCommitLatest.current(ref.current.getBoundingClientRect().width, ref.current);
          }
        };

        const style = document.createElement('STYLE');
        style.textContent = `* { cursor: col-resize !important; } .es-table-cell__resize::after { display: none; }`;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.head.appendChild(style);

        return () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          document.head.removeChild(style);
        };
      }
    }, [isResizing]);

    return (
      <div
        ref={rootRef}
        className={clsx(
          'es-table-cell',
          `es-table-cell--variant--${variant}`,
          `es-table-cell--padding--${padding}`,
          pin && `es-table-cell--pin--${pin}`,
          overlap && 'es-table-cell--overlap',
          isResizing && 'es-table-cell--resizing',
          rowDivider && 'es-table-cell--row-divider',
          colDivider && 'es-table-cell--col-divider',
          variant === 'body' ? 'body100' : 'caption',
          className
        )}
        data-minwidth={minWidth}
        id={id}
        role={variant === 'head' ? 'columnheader' : 'cell'}
        style={{ '--es-table-cell-col-span': colSpan, ...style } as React.CSSProperties}
        onClick={onClick}
      >
        <div className="es-table-cell__wrapper">
          <div className="es-table-cell__container">
            <div className={clsx('es-table-cell__content', `es-table-cell__content--align--${align}`)}>{children}</div>
            {!!onResize && (
              <button
                aria-label={labelResize}
                className={clsx('es-table-cell__resize', isResizing && 'es-table-cell__resize--resizing')}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onMouseDown={onMouseDown}
              />
            )}
          </div>
        </div>
      </div>
    );
  })
);
