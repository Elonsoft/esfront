import React, { useCallback, useMemo, useRef, useState } from 'react';

import { PhoneFieldProps } from './PhoneField.types';

import clsx from 'clsx';
import { getPhoneFieldUtilityClass } from './PhoneField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

import parse, {
  edit,
  eraseSelection,
  format,
  getCaretPosition,
  getSelection,
  isReadOnly,
  onChange as onFormatChange,
  setCaretPosition,
} from './format';

import { useControlled } from '../../hooks/useControlled';
import { IconGlobalLineW500, IconMenuDownW300 } from '../../icons';
import { AutocompleteMenu } from '../AutocompleteMenu';
import { Button, buttonClasses } from '../Button';
import * as Flags from '../Flags/icons';
import { svgIconClasses } from '../SvgIcon';

import {
  AsYouType,
  CountryCode,
  getCountryCallingCode,
  parsePhoneNumberCharacter,
  validatePhoneNumberLength,
} from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.min.json';

type PhoneFieldOwnerState = {
  classes?: PhoneFieldProps['classes'];
};

const useUtilityClasses = (ownerState: PhoneFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    startAdornment: ['startAdornment'],
    menuButton: ['menuButton'],
    item: ['item'],
    itemPrimary: ['itemPrimary'],
    countryDisplayName: ['countryDisplayName'],
    countryCallingCode: ['countryCallingCode'],
  };

  return composeClasses(slots, getPhoneFieldUtilityClass, classes);
};

const PhoneFieldRoot = styled(TextField, {
  name: 'ESPhoneField',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => ({
  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedStart}`]: {
    paddingLeft: 0,
  },
}));

const PhoneFieldStartAdornment = styled(InputAdornment, {
  name: 'ESPhoneField',
  slot: 'StartAdornment',
  overridesResolver: (_props, styles) => styles.startAdornment,
})(() => ({
  [`&.${inputAdornmentClasses.positionStart} `]: {
    marginRight: '4px',
  },
}));

const PhoneFieldMenuButton = styled(Button, {
  name: 'ESPhoneField',
  slot: 'MenuButton',
  overridesResolver: (_props, styles) => styles.menuButton,
})(({ theme }) => ({
  [`&.${buttonClasses.root}.${buttonClasses.variantText}`]: {
    borderRadius: 0,
    paddingLeft: '12px',
    paddingRight: '2px',
    height: '100%',

    '& > *:first-child': {
      marginRight: '2px',
    },

    [`& .${svgIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A500,
    },
  },
}));

const PhoneFieldItem = styled('div', {
  name: 'ESPhoneField',
  slot: 'Item',
  overridesResolver: (_props, styles) => styles.item,
})(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
}));

const PhoneFieldItemPrimary = styled('div', {
  name: 'ESPhoneField',
  slot: 'ItemPrimary',
  overridesResolver: (_props, styles) => styles.itemPrimary,
})(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '12px',
  minWidth: 0,
}));

const PhoneFieldCountryDisplayName = styled(Typography, {
  name: 'ESPhoneField',
  slot: 'CountryDisplayName',
  overridesResolver: (_props, styles) => styles.countryDisplayName,
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}) as typeof Typography;

const PhoneFieldCountryCallingCode = styled(Typography, {
  name: 'ESPhoneField',
  slot: 'CountryCallingCode',
  overridesResolver: (_props, styles) => styles.countryCallingCode,
})({}) as typeof Typography;

const regionNames = new (Intl as any).DisplayNames([], { type: 'region' });

function parseChar(character, prevParsedCharacters, context) {
  if (context && context.ignoreRest) {
    return;
  }

  const emitEvent = (eventName) => {
    if (context) {
      switch (eventName) {
        case 'end':
          context.ignoreRest = true;
          break;
      }
    }
  };

  return parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent);
}

export const PhoneField = (inProps: PhoneFieldProps) => {
  const {
    classes: inClasses,
    className,

    countries,
    defaultCountry,

    // eslint-disable-next-line no-use-before-define
    getCountryFlag = (code: CountryCode) => getFlag(code),
    getCountryDisplayName = (code: CountryCode) => regionNames.of(code),

    labelMenu,

    iconMenu = <IconGlobalLineW500 />,
    iconMenuArrow = <IconMenuDownW300 container containerSize="16px" />,

    name,
    value: inValue,

    InputProps,
    onChange,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPhoneField',
  });

  const getFlag = (country: CountryCode | null) => {
    const FlagComponent = country ? Flags[`Flag${capitalize(country.toLowerCase())}` as keyof typeof Flags] : null;
    return FlagComponent ? <FlagComponent /> : iconMenu;
  };

  const [country, setCountry] = useState<CountryCode | null>(
    countries.length === 1 ? countries[0] : defaultCountry || null
  );

  const [value, setValue] = useControlled('+' + (country ? getCountryCallingCode(country) : ''), inValue as string);

  const [search, setSearch] = useState('');

  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const codesRegExp = useMemo(() => {
    const codes = countries.map((country) => getCountryCallingCode(country));

    return RegExp(
      `^\\+(${codes
        .map(
          (code) =>
            `${code
              .split('')
              .map((digit) => `(${digit}|$)`)
              .join('')}`
        )
        .join('|')})`
    );
  }, [countries]);

  const countriesData = useMemo(() => {
    return countries.map((country) => ({
      country,
      displayName: getCountryDisplayName(country),
      callingCode: getCountryCallingCode(country),
    }));
  }, [countries]);

  const countriesOptions = useMemo(() => {
    return countriesData
      .filter((e) => {
        return e.displayName.toLowerCase().includes(search) || e.callingCode.includes(search);
      })
      .map((e) => e.country);
  }, [countriesData, search]);

  const asYouType = useMemo(() => {
    const asYouType = new AsYouType();
    return asYouType;
  }, []);

  const _format = useCallback(
    (value: string) => {
      asYouType.reset();
      const text = asYouType.input(value);
      const template = asYouType.getTemplate();
      return { text, template };
    },
    [asYouType]
  );

  const formatInputText = (input, _parse, operation) => {
    // Get the `value` and `caret` position.
    let { value, caret } = parse(input.value, getCaretPosition(input), _parse);

    // If a user performed an operation ("Backspace", "Delete") then apply that operation and get the new `value` and `caret` position.
    if (operation) {
      const newValueAndCaret = edit(value, caret, operation);

      value = newValueAndCaret.value;
      caret = newValueAndCaret.caret;
    }

    const formatted = format(value, caret, _format);
    let text = formatted.text;
    caret = formatted.caret;

    if (country && getCountryCallingCode(country) !== asYouType.getCallingCode()) {
      if (countries.length === 1) {
        value = '+' + getCountryCallingCode(country);
        text = value;
        caret = text.length;
      } else {
        setCountry(null);
      }
    }

    if (value === '') {
      value = '+';
      text = value;
      caret = text.length;
    }

    input.value = text;
    setCaretPosition(input, caret);

    setValue(value);
    onChange?.({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
  };

  const onCheckCaretPosition = (e: React.SyntheticEvent<HTMLElement>) => {
    // requestAnimationFrame(() => {
    if (inputRef.current && inputRef.current.selectionStart === inputRef.current.selectionEnd) {
      if (inputRef.current.selectionStart !== null && inputRef.current.selectionStart < 2) {
        e.preventDefault();
        inputRef.current.setSelectionRange(2, 2);
      }
    }
    // });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lengthResult = validatePhoneNumberLength(value);

    if (lengthResult === 'TOO_LONG' || lengthResult === 'INVALID_LENGTH') {
      return;
    }

    if (value.length > 1 && !codesRegExp.test(value)) {
      return;
    }

    return formatInputText(inputRef.current, parseChar, undefined);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown?.(e);
    // onCheckCaretPosition(e);

    if (
      !(
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'Delete' ||
        e.key === 'Backspace' ||
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight'
      ) &&
      !(e.ctrlKey || e.altKey)
    ) {
      e.preventDefault();
    }

    if (e.defaultPrevented) {
      return;
    }

    const input = e.target as HTMLInputElement;

    if (input.hasAttribute('readonly')) {
      return;
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();

      const selection = getSelection(input);

      if (selection) {
        eraseSelection(input, selection);
        return formatInputText(input, parseChar, undefined);
      }

      // Else, perform the (character erasing) operation manually.
      return formatInputText(input, parseChar, e.key);
    }
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onMenuClick = () => {
    if (ref.current) {
      setAnchorEl(ref.current);
    }
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onMenuChange = (country: CountryCode | null) => {
    if (country) {
      onMenuClose();
      setCountry(country);

      const value = `+${getCountryCallingCode(country)}`;
      setValue(value);
      onChange?.({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);

      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }
  };

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  const formatted = _format(value || '+').text;

  return (
    <>
      <PhoneFieldRoot
        ref={ref}
        InputProps={{
          startAdornment: (
            <PhoneFieldStartAdornment className={classes.startAdornment} position="start">
              <Tooltip arrow enterDelay={200} placement="top-start" title={countries.length > 1 ? labelMenu || '' : ''}>
                <PhoneFieldMenuButton
                  className={classes.menuButton}
                  color="tertiary"
                  disabled={countries.length < 2}
                  variant="text"
                  onClick={onMenuClick}
                >
                  {getCountryFlag(
                    asYouType.country ||
                      country ||
                      metadata.country_calling_codes[asYouType.getCallingCode() || '']?.[0] ||
                      null
                  )}
                  {countries.length > 1 && iconMenuArrow}
                </PhoneFieldMenuButton>
              </Tooltip>
            </PhoneFieldStartAdornment>
          ),
          ...InputProps,
        }}
        className={clsx(classes.root, className)}
        classes={inClasses}
        inputRef={inputRef}
        type="tel"
        value={formatted}
        {...props}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        onMouseUp={(e) => {
          onCheckCaretPosition(e);
          props.onMouseUp?.(e);
        }}
      />
      <AutocompleteMenu
        PopperProps={{
          placement: 'top',
        }}
        SearchProps={{ value: search, onChange: (e) => setSearch(e.target.value) }}
        TransitionProps={{
          onExited: () => {
            setSearch('');
          },
        }}
        anchorEl={ref.current}
        getOptionLabel={(option) => (
          <PhoneFieldItem className={classes.item}>
            <PhoneFieldItemPrimary className={classes.itemPrimary}>
              {getCountryFlag(option)}
              <PhoneFieldCountryDisplayName className={classes.countryDisplayName} component="div" variant="subtitle1">
                {getCountryDisplayName(option)}
              </PhoneFieldCountryDisplayName>
            </PhoneFieldItemPrimary>
            <PhoneFieldCountryCallingCode className={classes.countryCallingCode} color="monoA.A600" variant="caption">
              +{getCountryCallingCode(option)}
            </PhoneFieldCountryCallingCode>
          </PhoneFieldItem>
        )}
        getOptionValue={(option) => option}
        open={!!anchorEl}
        options={countriesOptions}
        value={country || asYouType.country || null}
        width={ref.current?.clientWidth}
        onChange={onMenuChange}
        onClose={onMenuClose}
      />
    </>
  );
};
