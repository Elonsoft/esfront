'use client';

import { useRef } from 'react';

import { DateInputProps } from './DateInput.types';

import clsx from 'clsx';

import { useDateInputContext } from './DateInput.context';
import { DateInputToken } from './DateInputToken';
import { useDateInputFormat } from './useDateInputFormat';
import { useDateInputFormField } from './useDateInputFormField';
import { useDateInputKeyboard } from './useDateInputKeyboard';
import { useDateInputPaste } from './useDateInputPaste';
import { useDateInputSelection } from './useDateInputSelection';
import { useDateInputState } from './useDateInputState';
import { getDefaultFieldLabel, MAX_DATE, MIN_DATE } from './utils';

import { useDefaultProps } from '../../theming';

/**
 * The date input is used to type a date in, one field of it at a time.
 */
export const DateInput = (inProps: DateInputProps) => {
  const {
    className,
    style,

    id: idProp,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledbyProp,
    'aria-describedby': ariaDescribedby,

    name,
    value: valueProp,
    minDate = MIN_DATE,
    maxDate = MAX_DATE,
    format = 'YYYY.MM.dd HH:mm',
    increment = 1,
    incrementLeap = 5,

    disabled: disabledProp,
    readOnly = false,
    required: requiredProp,
    error: errorProp,
    autoFocus,

    getFieldLabel = getDefaultFieldLabel,

    onChange,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    onKeyDown: onKeyDownProp,
    onPaste: onPasteProp,
  } = useDefaultProps({
    props: inProps,
    name: 'ESDateInput',
  });

  const registry = useDateInputContext();
  const ref = useRef<HTMLDivElement | null>(null);

  const { id, ariaLabelledby, disabled, required, error, handleRef, notifyFocus, notifyBlur } = useDateInputFormField({
    ref,
    id: idProp,
    ariaLabel,
    ariaLabelledby: ariaLabelledbyProp,
    disabled: disabledProp,
    required: requiredProp,
    error: errorProp,
  });

  const { parts, sequence, formatters } = useDateInputFormat({ registry, format });

  const state = useDateInputState({ value: valueProp, minDate, maxDate, formatters, onChange });
  const selection = useDateInputSelection({ ref });

  const { onKeyDown } = useDateInputKeyboard({
    ref,
    registry,
    state,
    selection,
    increment,
    incrementLeap,
    disabled,
    readOnly,
    onKeyDown: onKeyDownProp,
  });

  const { onPaste } = useDateInputPaste({
    state,
    selection,
    sequence,
    minDate,
    maxDate,
    disabled,
    readOnly,
    onPaste: onPasteProp,
  });

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    onBlurProp?.(e);
    notifyBlur();

    state.commit();
    selection.clear();
  };

  const onFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    onFocusProp?.(e);
    notifyFocus();

    selection.selectAll();
  };

  const onMouseUp = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    // A click that lands on the root itself went past the end of the date, so it is taken as a click on the last part.
    const anchor = target === ref.current ? (target.lastChild as HTMLElement) : target;
    const element = selection.getAnchorElement(anchor);

    if (element) {
      selection.select(element);
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'none';
  };

  return (
    <>
      <div
        ref={handleRef}
        suppressContentEditableWarning
        aria-activedescendant={selection.activeId ?? undefined}
        aria-describedby={ariaDescribedby}
        aria-disabled={disabled || undefined}
        aria-invalid={error || undefined}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-multiline={false}
        aria-readonly={readOnly || undefined}
        aria-required={required || undefined}
        autoFocus={autoFocus}
        className={clsx('es-date-input', disabled && 'es-date-input--disabled', className)}
        contentEditable={!disabled && !readOnly}
        id={id}
        inputMode="numeric"
        role="textbox"
        style={style}
        tabIndex={disabled ? -1 : 0}
        onBlur={onBlur}
        onDragOver={onDragOver}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onMouseUp={onMouseUp}
        onPaste={onPaste}
      >
        {parts.map(({ token, formatter }, index) => {
          if (!formatter) {
            return (
              <span key={index} data-node>
                {token}
              </span>
            );
          }

          const tokenId = `${id}-${index}`;

          return (
            <DateInputToken
              key={index}
              context={state.context}
              formatter={formatter}
              id={tokenId}
              label={getFieldLabel(formatter.field)}
              selected={selection.activeId === tokenId}
              token={token}
              value={state.values[formatter.field]}
            />
          );
        })}
      </div>
      {!!name && !disabled && <input name={name} type="hidden" value={state.date ? state.date.toISOString() : ''} />}
    </>
  );
};
