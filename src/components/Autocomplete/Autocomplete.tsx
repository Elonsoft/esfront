import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AutocompleteProps } from './Autocomplete.types';

import clsx from 'clsx';
import { autocompleteClasses, getAutocompleteUtilityClass } from './Autocomplete.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';
import { ClickAwayListener } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';
import { touchRippleClasses } from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import { useFormControl } from '@mui/material/FormControl';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import OutlinedInput, { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Popover, { popoverClasses } from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import { useForkRef } from '@mui/material/utils';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useControlled, useIntersectionObserver, usePreviousValue } from '../../hooks';
import { IconCloseW350, IconMagnify2W400 } from '../../icons';
import { SpinnerRing } from '../Spinner';
import { svgIconClasses } from '../SvgIcon';

type AutocompleteOwnerState = {
  classes?: AutocompleteProps<unknown>['classes'];
  inlineSearch?: boolean;
};

const useUtilityClasses = (ownerState: AutocompleteOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    input: ['input'],
    popover: ['popover'],
    menuList: ['menuList'],
    menuGroup: ['menuGroup'],
    menuItem: ['menuItem'],
    menuItemText: ['menuItemText'],
    sentinel: ['sentinel'],
    emptyState: ['emptyState'],
    search: ['search'],
    displayValue: ['displayValue'],
    inputPlaceholder: ['inputPlaceholder']
  };

  return composeClasses(slots, getAutocompleteUtilityClass, classes);
};

const AutocompleteRoot = styled(OutlinedInput, {
  name: 'ESAutocomplete',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(() => ({
  cursor: 'pointer',

  [`& .${autocompleteClasses.input}`]: {
    width: '100%',
    outline: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center'
  }
}));

const AutocompletePopover = styled(Popover, {
  name: 'ESAutocomplete',
  slot: 'Popover',
  overridesResolver: (_props, styles) => styles.popover
})<{ ownerState: AutocompleteOwnerState }>(({ ownerState, theme }) => ({
  pointerEvents: ownerState.inlineSearch ? 'none' : 'auto',

  [`& .${popoverClasses.paper}`]: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'none',
    backgroundColor: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600],
    borderRadius: '6px',
    userSelect: 'none',
    overflow: 'hidden',
    margin: '4px 0',
    pointerEvents: 'auto'
  }
}));

const AutocompleteMenuList = styled(MenuList, {
  name: 'ESAutocompleteMenuList',
  slot: 'MenuList',
  overridesResolver: (_props, styles) => styles.menuList
})(({ theme }) => ({
  ...theme.scrollbars.overlay,
  maxHeight: '228px'
}));

const AutocompleteMenuGroup = styled('div', {
  name: 'ESAutocomplete',
  slot: 'MenuGroup',
  overridesResolver: (_props, styles) => styles.group
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  padding: '8px 16px 4px',

  '&:not(:first-child)': {
    borderTop: `1px solid ${theme.palette.monoA.A100}`,
    paddingTop: '16px',
    marginTop: '8px'
  }
}));

const AutocompleteMenuItem = styled(MenuItem, {
  name: 'ESAutocomplete',
  slot: 'MenuItem',
  overridesResolver: (_props, styles) => styles.menuItem
})(() => ({
  padding: '2px 16px'
}));

const AutocompleteMenuItemText = styled('div', {
  name: 'ESAutocomplete',
  slot: 'MenuItemText',
  overridesResolver: (_props, styles) => styles.menuItemText
})(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const AutocompleteSentinel = styled(MenuItem, {
  name: 'ESAutocomplete',
  slot: 'Sentinel',
  overridesResolver: (_props, styles) => styles.sentinel
})(() => ({
  padding: 0,
  minHeight: 0
}));

const AutocompleteCheckbox = styled(Checkbox, {
  name: 'ESAutocomplete',
  slot: 'Checkbox',
  overridesResolver: (_props, styles) => styles.checkbox
})(() => ({
  marginLeft: '-9px',
  marginRight: '3px'
}));

const AutocompleteEmptyState = styled('div', {
  name: 'ESAutocomplete',
  slot: 'EmptyState',
  overridesResolver: (_props, styles) => styles.emptyState
})(({ theme }) => ({
  ...theme.typography.caption,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 16px',
  color: theme.palette.monoA.A600
}));

const AutocompleteSearch = styled(TextField, {
  name: 'ESAutocomplete',
  slot: 'Search',
  overridesResolver: (_props, styles) => styles.search
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.monoA.A100}`,

  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedEnd}`]: {
    paddingRight: '8px'
  },

  [`& .${inputLabelClasses.root}`]: {
    opacity: 0
  },

  [`& .${inputAdornmentClasses.positionStart}`]: {
    color: theme.palette.monoA.A500
  },

  [`&:hover .${inputAdornmentClasses.positionStart} .${svgIconClasses.root}`]: {
    color: theme.palette.monoA.A600
  },

  [`& .${inputAdornmentClasses.positionEnd}`]: {
    marginLeft: '6px',

    [`& .${buttonClasses.root}`]: {
      height: '40px',
      padding: '0 7px',
      flexShrink: 0,

      '&:hover ': {
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.monoA.A500
        },

        [`& .${touchRippleClasses.root}`]: {
          backgroundColor: 'inherit'
        }
      },

      [`& .${svgIconClasses.root}`]: {
        color: theme.palette.monoA.A400
      },

      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.monoA.A200
      },

      [`&:active .${svgIconClasses.root}`]: {
        color: theme.palette.monoA.A600
      }
    }
  },

  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: 'none',

    [`&.${inputBaseClasses.adornedEnd}`]: {
      paddingRight: '4px'
    }
  },

  [`& .${outlinedInputClasses.input}`]: {
    ...theme.typography.body100
  }
}));

const AutocompleteInputDisplayValue = styled('div', {
  name: 'ESAutocomplete',
  slot: 'DisplayValue',
  overridesResolver: (_props, styles) => styles.displayValue
})(() => ({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const AutocompleteInputPlaceholder = styled('div', {
  name: 'ESAutocomplete',
  slot: 'InputPlaceholder',
  overridesResolver: (_props, styles) => styles.inputPlaceholder
})(({ theme }) => ({
  color: theme.palette.monoA.A400,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

/** The autocomplete is used to choose an item from a collection of options. */
export const Autocomplete = <T,>(inProps: AutocompleteProps<T>) => {
  const {
    className,
    classes: inClasses,
    sx,

    id,
    inputRef: inInputRef,
    label,
    name,
    placeholder,
    'aria-describedby': ariaDescribedby,

    startAdornment,
    endAdornment,

    options,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    groupBy,

    loading,
    inlineSearch,

    header,
    footer,

    labelNoOptions,
    labelNoMatches,
    labelLoading,
    labelSearch,
    labelSearchClear,

    PopoverProps,
    SearchProps,

    open: inOpen,
    onOpen,
    onClose,
    onLoadMore,
    onBlur,

    iconSearch = <IconMagnify2W400 />,
    iconSearchClear = <IconCloseW350 />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocomplete'
  });

  const formControl = useFormControl();

  if (!formControl) {
    throw new Error('No provider for FormControlContext.');
  }

  const ref = useRef<HTMLDivElement | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [sentinelRef, setSentinelRef] = useState<HTMLElement | null>(null);

  const inputRef = useRef<HTMLDivElement | null>(null);
  const inputNodeRef = useForkRef(inputRef, inInputRef);
  const isInputFocusRequested = useRef(false);

  const [open, setOpen] = useControlled(false, inOpen);
  const [menuWidthState, setMenuWidthState] = useState(0);

  const previousFocused = usePreviousValue(formControl.focused);

  const valueArray = useMemo(
    () => (props.multiple ? props.value : props.value ? [props.value] : []),
    [props.multiple, props.value]
  );

  const valueMap = useMemo(() => {
    return valueArray.reduce<Record<string | number, boolean>>((acc, v) => {
      acc[getOptionValue(v)] = true;
      return acc;
    }, {});
  }, [valueArray]);

  const valueDisplay = useMemo(() => {
    if (props.getDisplayValue) {
      return props.multiple ? props.getDisplayValue(props.value) : props.getDisplayValue(props.value);
    }
    return valueArray.map((v) => getOptionLabel(v)).join(', ');
  }, [props.value, valueArray]);

  useEnhancedEffect(() => {
    if (valueArray.length) {
      formControl.onFilled();
    } else {
      formControl.onEmpty();
    }
  }, [valueArray, formControl.onEmpty, formControl.onFilled, formControl.filled]);

  useEffect(() => {
    if (onBlur && !formControl.focused && previousFocused) {
      if (isInputFocusRequested.current) {
        isInputFocusRequested.current = false;
      } else {
        onBlur({ target: { name } });
      }
    }
  }, [formControl.focused, previousFocused]);

  useEnhancedEffect(() => {
    // FIXME: Wrong typing in MUI.
    (formControl as any).setAdornedStart(!!startAdornment);
  }, [!!startAdornment]);

  useIntersectionObserver({ current: sentinelRef }, (entries) => {
    if (onLoadMore && entries[0].isIntersecting) {
      onLoadMore();
    }
  });

  const onMenuOpen = useCallback((disableAutoFocus?: boolean) => {
    if (ref.current) {
      setMenuWidthState(ref.current.clientWidth);
      setOpen(true);
      onOpen && onOpen();

      if (!disableAutoFocus) {
        setTimeout(() => {
          if (searchInputRef.current) {
            searchInputRef.current.focus();
          } else if (paperRef.current) {
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

  const onMenuClose = useCallback((event: unknown, reason: 'backdropClick' | 'escapeKeyDown' | 'clickAway') => {
    if (reason === 'escapeKeyDown') {
      isInputFocusRequested.current = true;

      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }

    if (reason === 'clickAway' && ref.current?.contains((event as any).target)) {
      return;
    }

    setOpen(false);
    onClose && onClose();
  }, []);

  const onMenuItemClick = useCallback(
    (option: T) => () => {
      if (props.onChange) {
        if (props.multiple) {
          const index = props.value.findIndex((v) => getOptionValue(v) === getOptionValue(option));
          if (index === -1) {
            props.onChange(props.value.concat(option));
          } else {
            props.value.splice(index, 1);
            props.onChange(props.value.slice());
          }
        } else {
          props.onChange(option);
        }
      }
    },
    [props.multiple, props.value, props.onChange]
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      (inlineSearch ? ['ArrowUp', 'ArrowDown', 'Enter'] : [' ', 'ArrowUp', 'ArrowDown', 'Enter']).indexOf(event.key) !==
      -1
    ) {
      event.preventDefault();
      onMenuOpen();
    }

    if (['Escape', 'Tab'].indexOf(event.key) !== -1) {
      setOpen(false);
      onClose && onClose();
    }
  };

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (formControl.disabled || event.button !== 0) {
      return;
    }

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });

    onMenuOpen(!!inlineSearch);
  };

  const notched = formControl.filled || formControl.focused || !!startAdornment || !!open;

  const ownerState = { classes: inClasses, inlineSearch };
  const classes = useUtilityClasses(ownerState);

  const groupedOptions: ReactNode[] = [];

  for (let index = 0; index < options.length; index++) {
    const option = options[index];

    const value = getOptionValue(option);
    const label = getOptionLabel(option);

    const selected = !!valueMap[value];
    const disabled = getOptionDisabled ? getOptionDisabled(option) : undefined;
    const group = groupBy?.(option);

    if (!!groupBy && (index === 0 || group !== groupBy(options[index - 1]))) {
      groupedOptions.push(
        <AutocompleteMenuGroup
          key={`${value}-${group}`}
          aria-disabled={true}
          className={classes.menuGroup}
          tabIndex={-1}
        >
          {group}
        </AutocompleteMenuGroup>
      );
    }

    groupedOptions.push(
      <AutocompleteMenuItem
        key={value}
        autoFocus={index === 0 && !SearchProps}
        className={classes.menuItem}
        disabled={disabled}
        selected={selected}
        tabIndex={index === 0 ? 0 : -1}
        onClick={onMenuItemClick(option)}
      >
        {!!props.multiple && <AutocompleteCheckbox readOnly checked={selected} color="secondary" tabIndex={-1} />}
        <AutocompleteMenuItemText className={classes.menuItemText}>{label}</AutocompleteMenuItemText>
      </AutocompleteMenuItem>
    );
  }
  return (
    <>
      <AutocompleteRoot
        ref={ref}
        autoComplete={inlineSearch ? 'off' : undefined}
        autoFocus={inlineSearch ? formControl.focused : false}
        className={clsx(className, classes.root)}
        disabled={formControl.disabled}
        endAdornment={endAdornment}
        error={formControl.error}
        fullWidth={props.fullWidth}
        id={id}
        inputComponent={inlineSearch && formControl.focused ? 'input' : ('div' as never)}
        inputProps={{
          children:
            inlineSearch && formControl.focused ? null : valueDisplay ? (
              <AutocompleteInputDisplayValue className={classes.displayValue}>
                {valueDisplay}
              </AutocompleteInputDisplayValue>
            ) : (
              (notched || !label) && (
                <AutocompleteInputPlaceholder className={classes.inputPlaceholder}>
                  {placeholder}
                </AutocompleteInputPlaceholder>
              )
            ),
          className: classes.input,
          role: inlineSearch ? 'input' : 'button',
          tabIndex: formControl.disabled ? -1 : 0,
          onBlur: () => {
            formControl.onBlur();
          },
          onFocus: formControl.onFocus,
          onKeyDown,
          ['aria-describedby']: ariaDescribedby,
          ...props.inputProps
        }}
        inputRef={inputNodeRef}
        label={label}
        name={name}
        notched={notched}
        placeholder={inlineSearch ? placeholder : undefined}
        required={formControl.required}
        startAdornment={startAdornment}
        sx={sx}
        value={inlineSearch && formControl.focused ? SearchProps?.value : null}
        onChange={
          inlineSearch && formControl.focused
            ? (e) => {
                SearchProps?.onChange?.(e);
                onMenuOpen(true);
              }
            : undefined
        }
        onMouseDown={onMouseDown}
      >
        {inlineSearch ? null : valueDisplay}
      </AutocompleteRoot>
      <ClickAwayListener
        onClickAway={(e) => onMenuClose(e, 'clickAway')}
        {...(!inlineSearch && { mouseEvent: false, touchEvent: false })}
      >
        <AutocompletePopover
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          className={classes.popover}
          open={!!open}
          ownerState={ownerState}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          onClose={onMenuClose}
          {...PopoverProps}
          disableRestoreFocus
          PaperProps={{
            ...PopoverProps?.PaperProps,
            ref: paperRef,
            style: { width: menuWidthState, ...PopoverProps?.PaperProps?.style }
          }}
          disableAutoFocus={!!inlineSearch}
        >
          {!!SearchProps && !inlineSearch && (
            <AutocompleteSearch
              autoFocus
              fullWidth
              className={classes.search}
              inputRef={searchInputRef}
              placeholder={labelSearch}
              size="40"
              {...SearchProps}
              InputProps={{
                startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
                endAdornment: !!SearchProps.value && (
                  <InputAdornment position="end">
                    <Button
                      disableFocusRipple
                      disableRipple
                      aria-label={labelSearchClear}
                      color="monoA"
                      size="24"
                      onClick={() => {
                        if (SearchProps.onChange) {
                          SearchProps.onChange({ target: { value: '' } } as never);
                          if (searchInputRef.current) {
                            searchInputRef.current.focus();
                          }
                        }
                      }}
                    >
                      {iconSearchClear}
                    </Button>
                  </InputAdornment>
                ),
                ...SearchProps.InputProps
              }}
            />
          )}
          {header}
          {loading ? (
            <AutocompleteEmptyState className={classes.emptyState}>
              <SpinnerRing color="monoA" size={16} /> {labelLoading}
            </AutocompleteEmptyState>
          ) : options.length ? (
            <AutocompleteMenuList className={classes.menuList}>
              {groupedOptions}
              {!!onLoadMore && (
                <AutocompleteSentinel ref={setSentinelRef} disabled className={classes.sentinel} tabIndex={-1} />
              )}
            </AutocompleteMenuList>
          ) : (
            <AutocompleteEmptyState className={classes.emptyState}>
              {!!SearchProps?.value ? labelNoMatches : labelNoOptions}
            </AutocompleteEmptyState>
          )}
          {footer}
        </AutocompletePopover>
      </ClickAwayListener>
    </>
  );
};
