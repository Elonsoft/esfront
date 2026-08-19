import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import { useForkRef } from '@mui/material/utils';

import { useTableCellContext } from './TableCell.context';

import { useLatest } from '../../../hooks/useLatest';
import { IconCheckLineW400, IconCloseLineW350, IconPencilFillW300 } from '../../../icons';
import { Button } from '../../Button';

const RESIZE_STEPS: Record<string, number | undefined> = {
  ArrowLeft: -16,
  ArrowRight: 16,
};

const onPreventDefault = (e: React.MouseEvent) => {
  e.preventDefault();
};

const onStopPropagation = (e: React.MouseEvent) => {
  e.stopPropagation();
};

/**
 * @see `Table`
 */
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
      pin,
      error,
      overlap,
      editable,
      onEdit,
      onEditAccept: onEditAcceptProp,
      onEditCancel: onEditCancelProp,
      inputComponent: InputComponent = 'input',
      inputProps,
      inputRef: inputRefProp,
      iconEdit = <IconPencilFillW300 />,
      iconEditAccept = <IconCheckLineW400 container containerSize="20px" />,
      iconEditCancel = <IconCloseLineW350 container containerSize="20px" />,
      labelResize,
      labelEditAccept,
      labelEditCancel,
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

    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const inputRefHandle = useForkRef(inputRef, inputRefProp);

    const onEditAccept = () => {
      if (onEditAcceptProp && inputRef.current) {
        onEditAcceptProp(inputRef.current);
      }

      setEditing(false);
    };

    const onEditCancel = () => {
      if (onEditCancelProp && inputRef.current) {
        onEditCancelProp(inputRef.current);
      }

      setEditing(false);
    };

    const onClick = (event: React.MouseEvent | React.FocusEvent) => {
      if (overlap || editable) {
        event.stopPropagation();
      }

      if (editable) {
        if (!editing) {
          setEditing(true);
          onEdit?.();
        }

        requestAnimationFrame(() => {
          if (inputRef.current) {
            inputRef.current.focus?.();
          }
        });
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
          error && 'es-table-cell--error',
          overlap && 'es-table-cell--overlap',
          editable && 'es-table-cell--editable',
          editing && 'es-table-cell--editing',
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
        onBlur={(e) => {
          if (!ref.current?.contains(e.relatedTarget)) {
            if (error) {
              onEditCancel();
            } else {
              onEditAccept();
            }
          }
        }}
        onClick={onClick}
      >
        {editable && (
          <a className="es-table-cell__edit-enter-link" tabIndex={editing ? -1 : 0} onFocus={onClick}>
            <span />
          </a>
        )}

        <div
          className="es-table-cell__wrapper"
          onMouseDown={(e) => {
            if (editing && e.target !== inputRef.current) {
              e.preventDefault();
            }
          }}
        >
          <div className="es-table-cell__container">
            <div className={clsx('es-table-cell__content', `es-table-cell__content--align--${align}`)}>
              {editing ? (
                <InputComponent
                  {...inputProps}
                  ref={inputRefHandle}
                  className={clsx(
                    'es-table-cell__input',
                    `es-table-cell__input--align--${align}`,
                    inputProps?.className
                  )}
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    inputProps?.onKeyDown?.(e);

                    if (e.defaultPrevented) {
                      return;
                    }

                    if (e.key === 'Enter' && !error) {
                      onEditAccept();
                    }

                    if (e.key === 'Escape') {
                      onEditCancel();
                    }
                  }}
                />
              ) : (
                children
              )}
            </div>
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

        {editable && !editing && (
          <div className={clsx('es-table-cell__edit-icon', `es-table-cell__edit-icon--align--${align}`)}>
            {iconEdit}
          </div>
        )}

        {editing && (
          <div className="es-table-cell__buttons" onClick={onStopPropagation} onMouseDown={onPreventDefault}>
            <Button
              aria-label={labelEditAccept}
              color="success"
              disabled={error}
              size="300"
              variant="text"
              onClick={onEditAccept}
            >
              {iconEditAccept}
            </Button>
            <Button aria-label={labelEditCancel} color="tertiary" size="300" variant="text" onClick={onEditCancel}>
              {iconEditCancel}
            </Button>
          </div>
        )}
      </div>
    );
  })
);
