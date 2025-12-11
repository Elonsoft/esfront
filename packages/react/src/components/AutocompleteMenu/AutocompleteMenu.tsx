import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  MutableRefObject,
  ReactNode,
  RefObject,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AutocompleteMenuProps } from './AutocompleteMenu.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import InputAdornment from '@mui/material/InputAdornment';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import TrapFocus from '@mui/material/Unstable_TrapFocus';

import { useIntersectionObserver, useScrollLock } from '../../hooks';
import { IconCloseLineW350, IconMagnify2LineW400 } from '../../icons';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Divider } from '../Divider';
import { MenuGroup } from '../MenuGroup';
import { MenuItem } from '../MenuItem';
import { SpinnerRing } from '../Spinner';
import { TooltipEllipsis } from '../TooltipEllipsis';

export const AutocompleteMenu = forwardRef(function AutocompleteMenu(inProps, ref) {
  const {
    paperRef,

    className,
    style,
    width,
    offset = [0, 4],

    container = document.body,
    anchorEl,
    open,
    actions,

    options,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    groupBy,
    MenuGroupProps,

    loading,

    header,
    footer,

    inlineSearch,

    disableAutoFocus,
    disableAutoScrollToSelected,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disableRestoreFocus,
    disableScrollLock,
    disableTooltip,

    labelNoOptions,
    labelNoMatches,
    labelLoading,
    labelSearch,
    labelSearchClear,

    PopperProps,
    SearchProps,
    TooltipProps,

    transitionDuration,
    TransitionProps: inTransitionProps,

    onClose,
    onLoadMore,

    iconSearch = <IconMagnify2LineW400 />,
    iconSearchClear = <IconCloseLineW350 />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESAutocompleteMenu',
  });

  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const menuListRef = useRef<HTMLUListElement | null>(null);
  const [sentinelRef, setSentinelRef] = useState<HTMLElement | null>(null);

  const trapFocusEnabled = useRef(true);

  useImperativeHandle(
    actions,
    () => ({
      setTrapFocusEnabled: (enabled: boolean) => {
        trapFocusEnabled.current = enabled;
      },
    }),
    [trapFocusEnabled]
  );

  useScrollLock(!disableScrollLock && open, container);

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

  useIntersectionObserver({ current: sentinelRef }, (entries) => {
    if (onLoadMore && entries[0].isIntersecting) {
      onLoadMore();
    }
  });

  const onMenuItemClick = useCallback(
    (option: any) => () => {
      if (props.onChange) {
        if (props.multiple) {
          const index = props.value.findIndex((v) => getOptionValue(v) === getOptionValue(option));

          if (index === -1) {
            props.onChange(props.value.concat(option));
          } else {
            props.onChange(props.value.filter((_, i) => i !== index));
          }
        } else {
          props.onChange(option);
        }
      }
    },
    [props.multiple, props.value, props.onChange]
  );

  const onMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape' && open && !disableEscapeKeyDown) {
      e.stopPropagation();
      onClose?.(e, 'escapeKeyDown');
    }
  };

  const onEnter = useCallback(() => {
    if (menuListRef.current && !disableAutoScrollToSelected) {
      const element = menuListRef.current.querySelector('.es-list-item--selected') as HTMLElement;

      if (element) {
        menuListRef.current.scrollTop =
          element.offsetTop + element.clientHeight / 2 - menuListRef.current.clientHeight / 2;
      }
    }
  }, [disableAutoScrollToSelected]);

  const groupedOptions: ReactNode[] = [];
  let tabIndex = true;

  for (let index = 0; index < options.length; index++) {
    const option = options[index];

    const value = getOptionValue(option);
    const label = getOptionLabel(option);

    const selected = !!valueMap[value];
    const disabled = getOptionDisabled ? getOptionDisabled(option) : undefined;
    const group = groupBy?.(option);

    if (!!groupBy && (index === 0 || group !== groupBy(options[index - 1]))) {
      if (index > 0) {
        groupedOptions.push(
          <Divider key={`${value}-${group}-divider`} className="es-autocomplete-menu__menu-group-divider" />
        );
      }

      groupedOptions.push(
        <MenuGroup
          key={`${value}-${group}`}
          aria-disabled
          tabIndex={-1}
          {...MenuGroupProps}
          className={clsx('es-autocomplete-menu__menu-group', MenuGroupProps?.className)}
        >
          {group}
        </MenuGroup>
      );
    }

    const getMenuItem =
      (tabIndex: boolean) =>
      // eslint-disable-next-line react/display-name
      ({
        ref,
        childrenRef,
      }: {
        ref?: MutableRefObject<HTMLElement | null>;
        childrenRef?: MutableRefObject<HTMLElement | null>;
      } = {}) => (
        <MenuItem
          ref={ref && (ref as RefObject<HTMLLIElement>)}
          autoFocus={!disabled && tabIndex && !SearchProps && !disableAutoFocus}
          className="es-autocomplete-menu__menu-item"
          disabled={disabled}
          selected={selected}
          tabIndex={!disabled && tabIndex ? 0 : -1}
          onClick={disabled ? undefined : onMenuItemClick(option)}
        >
          {!!props.multiple && (
            <Checkbox
              readOnly
              checked={selected}
              className="es-autocomplete-menu__checkbox"
              color="secondary"
              disabled={disabled}
              tabIndex={-1}
            />
          )}
          <div
            ref={childrenRef && (childrenRef as RefObject<HTMLDivElement>)}
            className="es-autocomplete-menu__menu-item-text"
          >
            {label}
          </div>
        </MenuItem>
      );

    if (disableTooltip) {
      groupedOptions.push(getMenuItem(tabIndex)());
    } else {
      groupedOptions.push(
        <TooltipEllipsis
          key={value}
          disableInteractive
          title={label}
          {...TooltipProps}
          className={clsx('es-autocomplete-menu__tooltip', TooltipProps?.className)}
        >
          {getMenuItem(tabIndex)}
        </TooltipEllipsis>
      );
    }

    if (!disabled) {
      tabIndex = false;
    }
  }

  return (
    <Popper
      ref={ref}
      transition
      anchorEl={anchorEl}
      className={clsx(className, 'es-autocomplete-menu')}
      open={open}
      placement="bottom"
      style={style}
      {...PopperProps}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset,
          },
        },
        ...(disableScrollLock
          ? []
          : [
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true,
                  padding: { top: 8, bottom: 8 },
                },
              },
            ]),
        ...(PopperProps?.modifiers || []),
      ]}
      onKeyDown={(e) => {
        onMenuKeyDown(e);
        PopperProps?.onKeyDown?.(e);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          in={TransitionProps?.in}
          timeout={transitionDuration}
          {...inTransitionProps}
          onEnter={(...args) => {
            onEnter();
            TransitionProps?.onEnter?.();
            inTransitionProps?.onEnter?.(...args);
          }}
          onExited={(...args) => {
            TransitionProps?.onExited?.();
            inTransitionProps?.onExited?.(...args);
          }}
        >
          <div>
            <TrapFocus
              disableAutoFocus={disableAutoFocus}
              disableEnforceFocus={disableEnforceFocus}
              disableRestoreFocus={disableRestoreFocus}
              isEnabled={() => trapFocusEnabled.current}
              open={open}
            >
              <div tabIndex={-1}>
                <ClickAwayListener
                  mouseEvent="onMouseDown"
                  onClickAway={(e) => {
                    onClose?.(e, 'clickAway');
                  }}
                >
                  <div
                    ref={paperRef}
                    className="es-autocomplete-menu__paper"
                    style={{ width, maxHeight: disableScrollLock ? undefined : 'calc(100dvh - 16px)' }}
                  >
                    {!!SearchProps && !inlineSearch && (
                      <TextField
                        fullWidth
                        autoFocus={!disableAutoFocus}
                        className="es-autocomplete-menu__search"
                        inputRef={searchInputRef}
                        placeholder={labelSearch}
                        size="40"
                        {...SearchProps}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
                          endAdornment: !!SearchProps.value && (
                            <InputAdornment position="end">
                              <Button
                                aria-label={labelSearchClear}
                                color="mono-a"
                                size="300"
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
                          ...SearchProps.InputProps,
                        }}
                      />
                    )}
                    {header}
                    {loading ? (
                      <div className={clsx('es-autocomplete-menu__empty-state', 'caption')}>
                        <SpinnerRing color="mono-a" size={16} /> {labelLoading}
                      </div>
                    ) : options.length ? (
                      <MenuList ref={menuListRef} className="es-autocomplete-menu__menu-list">
                        {groupedOptions}
                        {!!onLoadMore && (
                          <MenuItem
                            ref={setSentinelRef}
                            disabled
                            className="es-autocomplete-menu__sentinel"
                            tabIndex={-1}
                          />
                        )}
                      </MenuList>
                    ) : (
                      <div className={clsx('es-autocomplete-menu__empty-state', 'caption')}>
                        {SearchProps?.value ? labelNoMatches : labelNoOptions}
                      </div>
                    )}
                    {footer}
                  </div>
                </ClickAwayListener>
              </div>
            </TrapFocus>
          </div>
        </Grow>
      )}
    </Popper>
  );
  // eslint-disable-next-line no-use-before-define
}) as <T>(props: AutocompleteMenuProps<T> & { ref?: ForwardedRef<HTMLDivElement> }) => JSX.Element;
