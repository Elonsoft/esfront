import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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

import {
  adjustSelection,
  deleteContentBackward,
  deleteSelection,
  insertText,
  PhoneFieldPatch,
} from './PhoneField.functions';

import { useEvent } from '../../hooks';
import { useControlled } from '../../hooks/useControlled';
import { IconGlobalLineW500, IconMenuDownW300 } from '../../icons';
import { AutocompleteMenu } from '../AutocompleteMenu';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { svgIconClasses } from '../SvgIcon';

import { AsYouType, CountryCode, getCountryCallingCode, validatePhoneNumberLength } from 'libphonenumber-js';
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
    height: '100%',

    [`& .${buttonBaseClasses.wrapper}`]: {
      paddingLeft: '12px',
      paddingRight: '2px',

      '& > *:first-child': {
        marginRight: '2px',
      },
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
  width: '100%',
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
  whiteSpace: 'nowrap',
}) as typeof Typography;

const PhoneFieldCountryCallingCode = styled(Typography, {
  name: 'ESPhoneField',
  slot: 'CountryCallingCode',
  overridesResolver: (_props, styles) => styles.countryCallingCode,
})({
  marginLeft: 'auto',
}) as typeof Typography;

const regionNames = new Intl.DisplayNames([], { type: 'region' });

const getDefaultCountryFlag = () => {
  return <IconGlobalLineW500 />;
};

const getDefaultCountryDisplayName = (code: CountryCode) => {
  return regionNames.of(code);
};

export const PhoneField = (inProps: PhoneFieldProps) => {
  const {
    classes: inClasses,
    className,

    countries,
    defaultCountry,

    getCountryFlag = getDefaultCountryFlag,
    getCountryDisplayName = getDefaultCountryDisplayName,

    labelMenu,

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

  const [country, setCountry] = useState<CountryCode | null>(
    countries.length === 1 ? countries[0] : defaultCountry || null
  );

  const [value, setValue] = useControlled('+' + (country ? getCountryCallingCode(country) : ''), inValue as string);

  const [search, setSearch] = useState('');

  const ref = useRef<HTMLDivElement | null>(null);
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

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
    const s = search.toLowerCase();

    return countriesData
      .filter((e) => {
        return e.displayName.toLowerCase().includes(s) || e.callingCode.includes(s);
      })
      .map((e) => e.country);
  }, [countriesData, search]);

  const asYouType = useMemo(() => {
    const asYouType = new AsYouType();
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

  const onCheckCaretPosition = useEvent((e: React.SyntheticEvent<HTMLElement>) => {
    if (inputRef && inputRef.selectionStart === inputRef.selectionEnd) {
      if (inputRef.selectionStart !== null && inputRef.selectionStart < 2) {
        e.preventDefault();
        inputRef.setSelectionRange(2, 2);
      }
    }
  });

  const onBeforeInput = useEvent((event: InputEvent) => {
    event.preventDefault();

    if (!inputRef) {
      return;
    }

    const { selectionStart, selectionEnd, value } = inputRef;

    if (!selectionStart || !selectionEnd) {
      return;
    }

    const data = {
      selectionStart,
      selectionEnd,
      value,
      data: event.data,
    };

    let newData: PhoneFieldPatch | null = null;

    // https://w3c.github.io/input-events/
    switch (event.inputType) {
      case 'deleteContentBackward':
      // case 'deleteContentForward':
      case 'deleteByCut': {
        if (selectionStart === selectionEnd) {
          newData = deleteContentBackward(data);
        } else {
          newData = deleteSelection(data);
        }

        break;
      }
      case 'insertFromPaste':
      case 'insertText': {
        newData = insertText(data);

        break;
      }
    }

    if (newData) {
      const phone = newData.value.replace(/ /g, '');
      const lengthResult = validatePhoneNumberLength(phone);

      if (lengthResult === 'TOO_LONG' || lengthResult === 'INVALID_LENGTH') {
        inputRef.setSelectionRange(selectionStart + 1, selectionStart + 1);
        return;
      }

      if (phone.length > 1 && !codesRegExp.test(phone)) {
        inputRef.setSelectionRange(selectionStart + 1, selectionStart + 1);
        return;
      }

      const formatted = format(phone).text;

      const { selectionStart: newSelectionStart, selectionEnd: newSelectionEnd } = adjustSelection(newData, formatted);

      setValue(phone);
      onChange?.({ target: { name, value: phone } } as React.ChangeEvent<HTMLInputElement>);

      inputRef.setSelectionRange(newSelectionStart, newSelectionEnd);
    }
  });

  useEffect(() => {
    if (inputRef) {
      inputRef.addEventListener('beforeinput', onBeforeInput);

      return () => {
        inputRef.removeEventListener('beforeinput', onBeforeInput);
      };
    }
  }, [inputRef]);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown?.(e);

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
        if (inputRef) {
          inputRef.focus();
        }
      });
    }
  };

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  const formatted = format(value || '+').text;

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
        inputRef={setInputRef}
        type="tel"
        value={formatted}
        {...props}
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
