'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AutocompleteProps } from './Autocomplete.types';

import clsx from 'clsx';

import { useControlled, useEnhancedEffect, useForkRef, usePreviousValue } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { AutocompleteMenu, AutocompleteMenuImperativeActions } from '../AutocompleteMenu';
import { FormFieldAdornment, FormFieldField, useFormFieldContext } from '../FormField';

/** The autocomplete is used to choose an item from a collection of options. */
export const Autocomplete = <T,>(inProps: AutocompleteProps<T>) => {
  const {
    className,
    style,

    id,
    inputRef: inInputRef,
    label,
    name,
    placeholder,
    autoFocus,
    inputProps,
    'aria-describedby': ariaDescribedby,

    startAdornment,
    endAdornment,

    options,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    groupBy,
    MenuGroupProps,

    loading,
    inlineSearch,

    header,
    footer,

    MenuProps,
    SearchProps,

    open: inOpen,
    onOpen,
    onClose,
    onLoadMore,
    onBlur,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocomplete',
  });

  const formField = useFormFieldContext();

  const ref = useRef<HTMLDivElement | null>(null);

  const paperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);
  // The field focuses whatever sits in the context ref when its padding is clicked, so the control registers itself.
  const setControl = useCallback(
    (node: HTMLDivElement | null) => {
      formField.inputRef.current = node;
    },
    [formField.inputRef]
  );
  const inputNodeRef = useForkRef(inputRef, inInputRef, setControl);

  const actions = useRef<AutocompleteMenuImperativeActions>(null);

  const isInputFocusRequested = useRef(false);

  const [open, setOpen] = useControlled(false, inOpen);
  const [menuWidthState, setMenuWidthState] = useState(0);

  const previousFocused = usePreviousValue(formField.focused);

  const valueArray = useMemo(
    () => (props.multiple ? props.value : props.value ? [props.value] : []),
    [props.multiple, props.value]
  );

  const valueDisplay = useMemo(() => {
    if (props.getDisplayValue) {
      return props.multiple ? props.getDisplayValue(props.value) : props.getDisplayValue(props.value);
    }

    return valueArray.map((v) => getOptionLabel(v)).join(', ');
  }, [props.value, valueArray]);

  // The value lives in the menu rather than in a text input, so the filled state is reported by hand.
  useEffect(() => {
    if (valueArray.length) {
      formField.onFilled();
    } else {
      formField.onEmpty();
    }
  }, [valueArray, formField.onEmpty, formField.onFilled, formField.filled]);

  useEffect(() => {
    if (onBlur && !formField.focused && previousFocused) {
      if (isInputFocusRequested.current) {
        isInputFocusRequested.current = false;
      } else {
        onBlur({ target: { name } });
      }
    }
  }, [formField.focused, previousFocused]);

  useEnhancedEffect(() => {
    formField.setAdornedStart(!!startAdornment);
  }, [!!startAdornment]);

  const onMenuOpen = useCallback((disableAutoFocus?: boolean) => {
    if (ref.current) {
      setMenuWidthState(ref.current.clientWidth);
      setOpen(true);
      onOpen?.();

      if (!disableAutoFocus) {
        setTimeout(() => {
          if (paperRef.current) {
            const element = paperRef.current.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as HTMLElement | null;

            if (element) {
              element.focus();
            }
          }
        }, 0);
      }
    }
  }, []);

  const onMenuClose = useCallback(
    (event: unknown, reason: 'escapeKeyDown' | 'clickAway') => {
      if (reason === 'escapeKeyDown') {
        isInputFocusRequested.current = true;

        requestAnimationFrame(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        });
      }

      if (inlineSearch && reason === 'clickAway' && ref.current?.contains((event as any).target)) {
        return;
      }

      setOpen(false);
      onClose?.();
    },
    [inlineSearch]
  );

  // eslint-disable-next-line
  // @ts-ignore
  const onMenuChange = (value) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      (inlineSearch ? ['ArrowUp', 'ArrowDown', 'Enter'] : [' ', 'ArrowUp', 'ArrowDown', 'Enter']).indexOf(event.key) !==
      -1
    ) {
      event.preventDefault();
      onMenuOpen();
    }

    if (['Escape', 'Tab'].indexOf(event.key) !== -1 && open) {
      event.stopPropagation();
      setOpen(false);
      onClose?.();
    }
  };

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (formField.disabled || event.button !== 0) {
      return;
    }

    actions.current?.setTrapFocusEnabled?.(false);

    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }

      actions.current?.setTrapFocusEnabled?.(true);
    });

    onMenuOpen(!!inlineSearch);
  };

  // The notch stays open while the menu is shown, otherwise it would snap shut behind it.
  const shrink = formField.filled || formField.focused || !!open;

  const isSearching = !!inlineSearch && formField.focused;

  // The control replaces the input of the field, so it carries the classes that give it the type scale of its size.
  const controlClassName = clsx(
    'es-autocomplete__input',
    'es-form-field-input',
    `es-form-field-input--variant--${formField.variant}`,
    `es-form-field-input--size--${formField.size}`,
    formField.disabled && 'es-form-field-input--disabled',
    formField.size === '400' || formField.size === '500' ? 'body100' : 'subtitle1'
  );

  return (
    <>
      <FormFieldField
        ref={ref}
        className={clsx(className, 'es-autocomplete')}
        endAdornment={!!endAdornment && <FormFieldAdornment position="end">{endAdornment}</FormFieldAdornment>}
        label={label}
        shrink={shrink}
        startAdornment={!!startAdornment && <FormFieldAdornment position="start">{startAdornment}</FormFieldAdornment>}
        style={style}
        onMouseDown={onMouseDown}
      >
        {isSearching ? (
          <input
            ref={inputNodeRef as React.Ref<HTMLInputElement>}
            autoFocus
            aria-describedby={ariaDescribedby}
            autoComplete="off"
            className={controlClassName}
            disabled={formField.disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            required={formField.required}
            value={SearchProps?.value as string}
            onBlur={formField.onBlur}
            onChange={(e) => {
              SearchProps?.onChange?.(e);
              onMenuOpen(true);
            }}
            onFocus={formField.onFocus}
            onKeyDown={onKeyDown}
          />
        ) : (
          <div
            {...inputProps}
            ref={inputNodeRef}
            aria-describedby={ariaDescribedby}
            autoFocus={autoFocus}
            className={controlClassName}
            id={id}
            role="button"
            tabIndex={formField.disabled ? -1 : 0}
            onBlur={formField.onBlur}
            onFocus={formField.onFocus}
            onKeyDown={onKeyDown}
          >
            {valueDisplay ? (
              <div className="es-autocomplete__display-value">{valueDisplay}</div>
            ) : (
              (shrink || !label) && <div className="es-autocomplete__input-placeholder">{placeholder}</div>
            )}
          </div>
        )}
      </FormFieldField>
      <AutocompleteMenu
        {...({ value: props.value, multiple: props.multiple } as
          | {
              multiple?: false;
              value: T | null;
            }
          | {
              multiple: true;
              value: T[];
            })}
        disableRestoreFocus
        MenuGroupProps={MenuGroupProps}
        SearchProps={SearchProps}
        actions={actions}
        anchorEl={ref.current}
        className={clsx('es-autocomplete__menu', inlineSearch && 'es-autocomplete__menu--inline-search')}
        disableAutoFocus={!!inlineSearch}
        disableScrollLock={!!inlineSearch}
        footer={footer}
        getOptionDisabled={getOptionDisabled}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        groupBy={groupBy}
        header={header}
        inlineSearch={inlineSearch}
        loading={loading}
        open={!!open}
        options={options}
        paperRef={paperRef}
        width={menuWidthState}
        onChange={onMenuChange}
        onClose={onMenuClose}
        onLoadMore={onLoadMore}
        {...MenuProps}
      />
    </>
  );
};
