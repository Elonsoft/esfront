import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PhoneFieldProps } from './PhoneField.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { usePhoneFieldContext } from './PhoneField.context';
import {
  adjustSelection,
  deleteContentBackward,
  deleteSelection,
  insertFromPaste,
  insertText,
  PhoneFieldPatch,
} from './PhoneField.functions';

import { useControlled, useEvent, useLatest, useMenu, useMenuVisibility } from '../../hooks';
import { IconGlobalLineW500, IconMenuDownFillW300 } from '../../icons';
import { AutocompleteMenu } from '../AutocompleteMenu';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

import { AsYouType, CountryCode, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js/core';

const regionNames = new Intl.DisplayNames([], { type: 'region' });

const getDefaultCountryFlag = () => {
  return <IconGlobalLineW500 />;
};

const getDefaultCountryDisplayName = (code: CountryCode) => {
  return regionNames.of(code);
};

export const PhoneField = memo(function PhoneField(inProps: PhoneFieldProps) {
  const {
    className,

    countries,
    defaultCountry,
    whitelist: whitelistProp,

    getCountryFlag = getDefaultCountryFlag,
    getCountryDisplayName = getDefaultCountryDisplayName,

    labelMenu,

    iconMenuArrow = <IconMenuDownFillW300 container containerSize="16px" />,

    name,
    value: inValue,

    InputProps,
    onChange,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onBeforeInput: onBeforeInputProp,
    onInput: onInputProp,
    onKeyDown: onKeyDownProp,

    MenuProps,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESPhoneField',
  });

  const metadata = usePhoneFieldContext();
  const whitelist = whitelistProp ?? countries.length === 1;

  const [country, setCountry] = useState<CountryCode | null>(
    countries.length === 1 ? countries[0] : defaultCountry || null
  );

  const [value, setValue] = useControlled(
    '+' + (country ? getCountryCallingCode(country, metadata) : ''),
    inValue as string
  );

  const [search, setSearch] = useState('');

  const ref = useRef<HTMLDivElement | null>(null);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  const codes = useMemo(() => {
    return countries.map((country) => getCountryCallingCode(country, metadata));
  }, [countries]);

  const maxCodeLength = useMemo(() => {
    return Math.max(...codes.map((code) => code.length));
  }, [codes]);

  const codesRegExp = useMemo(() => {
    return RegExp(`^\\+(${codes.join('|')})`);
  }, [codes]);

  const codesPartialRegExp = useMemo(() => {
    if (codes.length === 1) {
      return RegExp(`^\\+${codes[0]}`);
    }

    return RegExp(
      `^\\+(${codes
        .map((code) =>
          code
            .split('')
            .map((digit) => `(?:${digit}|$)`)
            .join('')
        )
        .join('|')})`
    );
  }, [codes]);

  const countriesData = useMemo(() => {
    return countries
      .map((country) => ({
        country,
        displayName: getCountryDisplayName(country),
        callingCode: getCountryCallingCode(country, metadata),
      }))
      .sort((a, b) => {
        return (a.displayName || '').toLowerCase().localeCompare((b.displayName || '').toLowerCase());
      });
  }, [countries]);

  const countriesOptions = useMemo(() => {
    const s = search.toLowerCase();

    return countriesData
      .filter((e) => {
        return e.displayName?.toLowerCase().includes(s) || `+${e.callingCode}`.includes(s);
      })
      .map((e) => e.country);
  }, [countriesData, search]);

  const asYouType = useMemo(() => {
    const asYouType = new AsYouType(undefined, metadata);
    return asYouType;
  }, []);

  const format = useCallback(
    (value: string) => {
      asYouType.reset();
      const text = asYouType.input(value);
      const template = asYouType.getTemplate();

      return { text, template };
    },
    [asYouType]
  );

  if (value) {
    format(value);
  }

  const countryCode =
    country || asYouType.getCountry() || metadata.country_calling_codes[asYouType.getCallingCode() || '']?.[0] || null;

  const onBeforeInput = useEvent((event: InputEvent) => {
    onBeforeInputProp?.(event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();

    if (!inputRef) {
      return;
    }

    const { selectionStart, selectionEnd, value } = inputRef;

    if (selectionStart === null || selectionEnd === null) {
      return;
    }

    const data = {
      selectionStart,
      selectionEnd,
      countryCode,
      value,
      data: event.data,
      metadata,
    };

    let newData: PhoneFieldPatch | null = null;

    // https://w3c.github.io/input-events/
    switch (event.inputType) {
      case 'deleteContentBackward':
      case 'deleteByCut': {
        const start =
          countryCode && whitelist && countries.length === 1
            ? getCountryCallingCode(countryCode, metadata).length
            : null;

        if (selectionStart === selectionEnd) {
          newData = deleteContentBackward(data, start);
        } else {
          newData = deleteSelection(data, start);
        }

        break;
      }
      case 'insertFromPaste': {
        newData = insertFromPaste(data);

        if (whitelist && !codesPartialRegExp.test(newData.value)) {
          const phone = newData.value.replace(/ /g, '');

          if (!codesPartialRegExp.test(phone)) {
            return;
          }
        }

        break;
      }
      case 'insertText': {
        newData = insertText(data);

        if (whitelist && !codesPartialRegExp.test(newData.value)) {
          return;
        }

        break;
      }
    }

    if (newData) {
      let phone = newData.value.replace(/ /g, '');

      try {
        const phoneNumber = parsePhoneNumber(phone, { extract: false }, metadata);

        if (phoneNumber.isValid()) {
          phone = phoneNumber.number;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        /* empty */
      }

      if (phone.length < maxCodeLength + 1 && !codesRegExp.test(phone)) {
        setCountry(null);
      }

      if (newData.value !== data.value) {
        const formatted = format(phone).text;
        newData = adjustSelection(newData, formatted);
      }

      const { selectionStart: newSelectionStart, selectionEnd: newSelectionEnd } = newData;

      setValue(phone);
      onChange?.({ target: { name, value: phone } } as React.ChangeEvent<HTMLInputElement>);

      requestAnimationFrame(() => {
        inputRef.setSelectionRange(newSelectionStart, newSelectionEnd);
      });
    }
  });

  // Event handler for the browser autocomplete.
  const onInput = useEvent((event: Event) => {
    onInputProp?.(event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();

    const target = event.target as HTMLInputElement | null;

    if (target) {
      let value = target.value.replace(/[^0-9]/g, '');

      if (value) {
        if (!value.startsWith('+')) {
          value = `+${value}`;
        }

        try {
          const phoneNumber = parsePhoneNumber(value, { extract: false }, metadata);

          if (phoneNumber.isValid()) {
            value = phoneNumber.number;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          /* empty */
        }

        setValue(value);
        onChange?.({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  });

  useEffect(() => {
    if (inputRef) {
      inputRef.addEventListener('beforeinput', onBeforeInput);
      inputRef.addEventListener('input', onInput);

      return () => {
        inputRef.removeEventListener('beforeinput', onBeforeInput);
        inputRef.removeEventListener('input', onInput);
      };
    }
  }, [inputRef]);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDownProp?.(e);

    if (e.defaultPrevented) {
      return;
    }

    if (
      !(
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'Delete' ||
        e.key === 'Backspace' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight' ||
        e.key === 'Tab' ||
        e.key === 'Enter' ||
        e.key === ' '
      ) &&
      !(e.ctrlKey || e.altKey || e.metaKey)
    ) {
      e.preventDefault();
    }
  };

  const [focused, setFocused] = useState(false);

  const [anchorEl, onMenuClick, onMenuClose] = useMenu();
  const [visible, onEnter, onExited] = useMenuVisibility();
  const latestVisible = useLatest(visible);

  const formatted = format(
    value || (focused || visible ? `+${country ? getCountryCallingCode(country, metadata) : ''}` : '')
  ).text;

  const onCheckCaretPosition = useEvent((e: React.SyntheticEvent<HTMLElement>) => {
    if (inputRef && inputRef.selectionStart === inputRef.selectionEnd) {
      let min = 1;

      if (countries.length === 1) {
        min = codes[0].length + 1;

        if (formatted[min] === ' ') {
          min += 1;
        }
      }

      if (inputRef.selectionStart !== null && inputRef.selectionStart < min) {
        e.preventDefault();
        inputRef.setSelectionRange(min, min);
      }
    }
  });

  const onFocus = useEvent((event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocusProp?.(event);
  });

  const onBlur = useEvent((event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    setTimeout(() => {
      if (!latestVisible.current) {
        onBlurProp?.(event);
      }
    }, 1);
  });

  useEffect(() => {
    // Clear input with only plus sign in it.
    if (!(focused || visible) && value === '+') {
      setValue('');
      onChange?.({ target: { name, value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [focused, visible]);

  const onMenuMouseDown = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
  }, []);

  const onMenuChange = (newCountry: CountryCode | null) => {
    if (newCountry) {
      onMenuClose();
      setCountry(newCountry);

      let nationalNumber = '';

      try {
        const phoneNumber = parsePhoneNumber(value || '', { extract: false }, metadata);
        nationalNumber = phoneNumber.nationalNumber;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        /* empty */
      }

      const newValue = `+${getCountryCallingCode(newCountry, metadata)}${nationalNumber}`;
      setValue(newValue);
      onChange?.({ target: { name, value: newValue } } as React.ChangeEvent<HTMLInputElement>);

      requestAnimationFrame(() => {
        if (inputRef) {
          inputRef.focus();
        }
      });
    }
  };

  return (
    <>
      <TextField
        ref={ref}
        className={clsx('es-phone-field', className)}
        inputRef={setInputRef}
        name={name}
        slotProps={{
          inputLabel: {
            shrink: focused || !!formatted,
          },
          input: {
            startAdornment: (
              <InputAdornment className="es-phone-field__start-adornment" position="start">
                <Tooltip enterDelay={200} placement="top-start" title={countries.length > 1 ? labelMenu : ''}>
                  <Button
                    className={clsx('es-phone-field__menu-button', !!anchorEl && 'es-phone-field__menu-button--open')}
                    color="tertiary"
                    disabled={countries.length < 2}
                    variant="text"
                    onClick={onMenuClick}
                    onMouseDown={onMenuMouseDown}
                  >
                    {getCountryFlag(countryCode)}
                    {countries.length > 1 && iconMenuArrow}
                  </Button>
                </Tooltip>
              </InputAdornment>
            ),
            ...InputProps,
          },
        }}
        type="tel"
        value={formatted}
        {...props}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onInputKeyDown}
        onMouseUp={(e) => {
          onCheckCaretPosition(e);
          props.onMouseUp?.(e);
        }}
      />
      <AutocompleteMenu
        {...MenuProps}
        PopperProps={{
          placement: 'bottom',
          ...MenuProps?.PopperProps,
        }}
        SearchProps={{ value: search, onChange: (e) => setSearch(e.target.value) }}
        TransitionProps={{
          onEnter,
          onExited: () => {
            setSearch('');
            onExited();

            setTimeout(() => {
              if (inputRef !== document.activeElement) {
                onBlurProp?.({} as never);
              }
            }, 1);
          },
        }}
        anchorEl={ref.current}
        getOptionLabel={(option) => (
          <div className="es-phone-field__item">
            <div className="es-phone-field__item-primary">
              {getCountryFlag(option)}
              <div className="es-phone-field__country-display-name subtitle1">{getCountryDisplayName(option)}</div>
            </div>
            <div className="es-phone-field__country-calling-code caption">
              +{getCountryCallingCode(option, metadata)}
            </div>
          </div>
        )}
        getOptionValue={(option) => option}
        groupBy={(option) => {
          return (getCountryDisplayName(option) || '')[0];
        }}
        open={!!anchorEl}
        options={countriesOptions}
        value={countryCode}
        width={ref.current?.clientWidth}
        onChange={onMenuChange}
        onClose={onMenuClose}
      />
    </>
  );
});
