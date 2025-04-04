import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PhoneFieldProps } from './PhoneField.types';

import clsx from 'clsx';
import { getPhoneFieldUtilityClass } from './PhoneField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
import { IconGlobalLineW500, IconMenuDownW300 } from '../../icons';
import { AutocompleteMenu } from '../AutocompleteMenu';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { svgIconClasses } from '../SvgIcon';
import { Tooltip } from '../Tooltip';

import { AsYouType, CountryCode, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js/core';

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
    overflow: 'hidden',
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
    outlineOffset: '-2px',

    [`&.${buttonBaseClasses.disabled}`]: {
      cursor: 'default',
    },

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

export const PhoneField = memo(function PhoneField(inProps: PhoneFieldProps) {
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
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    onBeforeInput: onBeforeInputProp,
    onInput: onInputProp,
    onKeyDown: onKeyDownProp,

    MenuProps,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPhoneField',
  });

  const metadata = usePhoneFieldContext();

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
    asYouType.getCountry() || country || metadata.country_calling_codes[asYouType.getCallingCode() || '']?.[0] || null;

  const onCheckCaretPosition = useEvent((e: React.SyntheticEvent<HTMLElement>) => {
    if (inputRef && inputRef.selectionStart === inputRef.selectionEnd) {
      if (inputRef.selectionStart !== null && inputRef.selectionStart < 2) {
        e.preventDefault();
        inputRef.setSelectionRange(2, 2);
      }
    }
  });

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
        if (selectionStart === selectionEnd) {
          newData = deleteContentBackward(data);
        } else {
          newData = deleteSelection(data);
        }

        break;
      }
      case 'insertFromPaste': {
        newData = insertFromPaste(data);

        break;
      }
      case 'insertText': {
        newData = insertText(data);

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
      !(e.ctrlKey || e.altKey)
    ) {
      e.preventDefault();
    }
  };

  const [focused, setFocused] = useState(false);

  const [anchorEl, onMenuClick, onMenuClose] = useMenu();
  const [visible, onEnter, onExited] = useMenuVisibility();
  const latestVisible = useLatest(visible);

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

      const newValue = `+${getCountryCallingCode(newCountry, metadata)}`;
      setValue(newValue);
      onChange?.({ target: { name, value: newValue } } as React.ChangeEvent<HTMLInputElement>);

      requestAnimationFrame(() => {
        if (inputRef) {
          inputRef.focus();
        }
      });
    }
  };

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  const formatted = format(
    value || (focused || visible ? `+${country ? getCountryCallingCode(country, metadata) : ''}` : '')
  ).text;

  return (
    <>
      <PhoneFieldRoot
        ref={ref}
        InputProps={{
          startAdornment: (
            <PhoneFieldStartAdornment className={classes.startAdornment} position="start">
              <Tooltip enterDelay={200} placement="top-start" title={countries.length > 1 ? labelMenu : ''}>
                <PhoneFieldMenuButton
                  className={classes.menuButton}
                  color="tertiary"
                  disabled={countries.length < 2}
                  variant="text"
                  onClick={onMenuClick}
                  onMouseDown={onMenuMouseDown}
                >
                  {getCountryFlag(countryCode)}
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
        name={name}
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
          <PhoneFieldItem className={classes.item}>
            <PhoneFieldItemPrimary className={classes.itemPrimary}>
              {getCountryFlag(option)}
              <PhoneFieldCountryDisplayName className={classes.countryDisplayName} component="div" variant="subtitle1">
                {getCountryDisplayName(option)}
              </PhoneFieldCountryDisplayName>
            </PhoneFieldItemPrimary>
            <PhoneFieldCountryCallingCode className={classes.countryCallingCode} color="monoA.A600" variant="caption">
              +{getCountryCallingCode(option, metadata)}
            </PhoneFieldCountryCallingCode>
          </PhoneFieldItem>
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
