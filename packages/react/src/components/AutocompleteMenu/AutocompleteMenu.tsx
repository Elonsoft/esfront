import {
  ForwardedRef,
  forwardRef,
  Fragment,
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
import { getAutocompleteMenuUtilityClass } from './AutocompleteMenu.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import MenuList from '@mui/material/MenuList';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import composeClasses from '@mui/utils/composeClasses';

import { useIntersectionObserver, useScrollLock } from '../../hooks';
import { IconCloseW350, IconMagnify2W400 } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { Checkbox } from '../Checkbox';
import { Divider } from '../Divider';
import { listItemClasses } from '../ListItem';
import { MenuGroup } from '../MenuGroup';
import { MenuItem } from '../MenuItem';
import { SpinnerRing } from '../Spinner';
import { svgIconClasses } from '../SvgIcon';
import { TooltipEllipsis, TooltipEllipsisProps } from '../TooltipEllipsis';

type AutocompleteMenuOwnerState = {
  classes?: AutocompleteMenuProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteMenuOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    paper: ['paper'],
    menuList: ['menuList'],
    menuGroup: ['menuGroup'],
    menuGroupDivider: ['menuGroupDivider'],
    menuItem: ['menuItem'],
    menuItemText: ['menuItemText'],
    sentinel: ['sentinel'],
    emptyState: ['emptyState'],
    search: ['search'],
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getAutocompleteMenuUtilityClass, classes);
};

const AutocompleteMenuRoot = styled(Popper, {
  name: 'ESAutocompleteMenu',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => ({
  zIndex: 1300,

  '& *': {
    outline: 'none',
  },

  '& > div': {
    transformOrigin: `50% 0 0`,
  },
}));

const AutocompleteMenuPaper = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'Paper',
  overridesResolver: (_props, styles) => styles.paper,
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.vars.palette.surface[400],
  boxShadow: theme.vars.palette.shadow.down[600],
  borderRadius: '6px',
  userSelect: 'none',
  overflow: 'hidden',
  pointerEvents: 'auto',
}));

const AutocompleteMenuMenuList = styled(MenuList, {
  name: 'ESAutocompleteMenuMenuList',
  slot: 'MenuList',
  overridesResolver: (_props, styles) => styles.menuList,
})(({ theme }) => ({
  ...theme.scrollbars.overlayMonoA,
  maxHeight: '228px',
}));

const AutocompleteMenuTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESAutocompleteMenu',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)({});

const AutocompleteMenuMenuItem = styled(MenuItem, {
  name: 'ESAutocompleteMenu',
  slot: 'MenuItem',
  overridesResolver: (_props, styles) => styles.menuItem,
})(() => ({}));

const AutocompleteMenuMenuItemText = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'MenuItemText',
  overridesResolver: (_props, styles) => styles.menuItemText,
})(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const AutocompleteMenuMenuGroup = styled(MenuGroup, {
  name: 'ESAutocompleteMenu',
  slot: 'MenuGroup',
  overridesResolver: (_props, styles) => styles.menuGroup,
})({});

const AutocompleteMenuMenuGroupDivider = styled(Divider, {
  name: 'ESAutocompleteMenu',
  slot: 'MenuGroupDivider',
  overridesResolver: (_props, styles) => styles.menuGroupDivider,
})({
  margin: '8px 0',
});

const AutocompleteMenuSentinel = styled(MenuItem, {
  name: 'ESAutocompleteMenu',
  slot: 'Sentinel',
  overridesResolver: (_props, styles) => styles.sentinel,
})(() => ({
  [`&.${listItemClasses.size200}`]: {
    padding: 0,
    minHeight: 0,
    height: 0,
  },
}));

const AutocompleteMenuCheckbox = styled(Checkbox, {
  name: 'ESAutocompleteMenu',
  slot: 'Checkbox',
  overridesResolver: (_props, styles) => styles.checkbox,
})(() => ({
  marginLeft: '-8px',
  marginRight: '4px',
  flexShrink: 0,
}));

const AutocompleteMenuEmptyState = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'EmptyState',
  overridesResolver: (_props, styles) => styles.emptyState,
})(({ theme }) => ({
  ...theme.typography.caption,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 16px',
  color: theme.vars.palette.monoA.A600,
}));

const AutocompleteMenuSearch = styled(TextField, {
  name: 'ESAutocompleteMenu',
  slot: 'Search',
  overridesResolver: (_props, styles) => styles.search,
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,

  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedEnd}`]: {
    paddingRight: '8px',
  },

  [`& .${inputLabelClasses.root}`]: {
    opacity: 0,
  },

  [`& .${inputAdornmentClasses.positionStart}`]: {
    color: theme.vars.palette.monoA.A500,
  },

  [`&:hover .${inputAdornmentClasses.positionStart} .${svgIconClasses.root}`]: {
    color: theme.vars.palette.monoA.A600,
  },

  [`& .${inputAdornmentClasses.positionEnd}`]: {
    marginLeft: '6px',

    [`& .${buttonClasses.root}`]: {
      height: '40px',
      flexShrink: 0,
      '--icon': theme.vars.palette.monoA.A400,

      [`& .${buttonBaseClasses.wrapper}`]: {
        padding: '0 7px',
      },

      [`&.${buttonClasses.variantText}`]: {
        '--hovered': 'inherit',
        '--pressed': 'inherit',
      },

      '&:hover': {
        '--icon': theme.vars.palette.monoA.A500,
      },

      '&:active': {
        '--icon': theme.vars.palette.monoA.A600,
      },
    },
  },

  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: 'none',

    [`&.${inputBaseClasses.adornedEnd}`]: {
      paddingRight: '4px',
    },
  },

  [`& .${outlinedInputClasses.input}`]: {
    ...theme.typography.body100,
  },
}));

export const AutocompleteMenu = forwardRef(function AutocompleteMenu(inProps, ref) {
  const {
    paperRef,

    className,
    classes: inClasses,
    sx,
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

    iconSearch = <IconMagnify2W400 />,
    iconSearchClear = <IconCloseW350 />,

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
      const element = menuListRef.current.querySelector(`.${listItemClasses.selected}`) as HTMLElement;

      if (element) {
        menuListRef.current.scrollTop =
          element.offsetTop + element.clientHeight / 2 - menuListRef.current.clientHeight / 2;
      }
    }
  }, [disableAutoScrollToSelected]);

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

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
      groupedOptions.push(
        <Fragment key={`${value}-${group}`}>
          {index > 0 && <AutocompleteMenuMenuGroupDivider className={classes.menuGroupDivider} color="monoA.A100" />}
          <AutocompleteMenuMenuGroup
            aria-disabled
            tabIndex={-1}
            {...MenuGroupProps}
            className={clsx(classes.menuGroup, MenuGroupProps?.className)}
          >
            {group}
          </AutocompleteMenuMenuGroup>
        </Fragment>
      );
    }

    const getMenuItem = ({
      ref,
      childrenRef,
    }: {
      ref?: MutableRefObject<HTMLElement | null>;
      childrenRef?: MutableRefObject<HTMLElement | null>;
    } = {}) => (
      <AutocompleteMenuMenuItem
        ref={ref && (ref as RefObject<HTMLLIElement>)}
        autoFocus={!disabled && tabIndex && !SearchProps && !disableAutoFocus}
        className={classes.menuItem}
        disabled={disabled}
        selected={selected}
        tabIndex={!disabled && tabIndex ? 0 : -1}
        onClick={disabled ? undefined : onMenuItemClick(option)}
      >
        {!!props.multiple && (
          <AutocompleteMenuCheckbox readOnly checked={selected} color="secondary" disabled={disabled} tabIndex={-1} />
        )}
        <AutocompleteMenuMenuItemText
          ref={childrenRef && (childrenRef as RefObject<HTMLDivElement>)}
          className={classes.menuItemText}
        >
          {label}
        </AutocompleteMenuMenuItemText>
      </AutocompleteMenuMenuItem>
    );

    if (disableTooltip) {
      groupedOptions.push(getMenuItem());
    } else {
      groupedOptions.push(
        <AutocompleteMenuTooltip
          key={value}
          disableInteractive
          title={label}
          {...TooltipProps}
          className={clsx(classes.tooltip, TooltipProps?.className)}
        >
          {getMenuItem}
        </AutocompleteMenuTooltip>
      );
    }

    if (!disabled) {
      tabIndex = false;
    }
  }

  return (
    <AutocompleteMenuRoot
      ref={ref}
      transition
      anchorEl={anchorEl}
      className={clsx(className, classes.root)}
      open={open}
      placement="bottom"
      sx={sx}
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
                  <AutocompleteMenuPaper
                    ref={paperRef}
                    className={classes.paper}
                    style={{ width, maxHeight: disableScrollLock ? undefined : 'calc(100dvh - 16px)' }}
                  >
                    {!!SearchProps && !inlineSearch && (
                      <AutocompleteMenuSearch
                        fullWidth
                        autoFocus={!disableAutoFocus}
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
                                aria-label={labelSearchClear}
                                color="monoA"
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
                      <AutocompleteMenuEmptyState className={classes.emptyState}>
                        <SpinnerRing color="monoA" size={16} /> {labelLoading}
                      </AutocompleteMenuEmptyState>
                    ) : options.length ? (
                      <AutocompleteMenuMenuList ref={menuListRef} className={classes.menuList}>
                        {groupedOptions}
                        {!!onLoadMore && (
                          <AutocompleteMenuSentinel
                            ref={setSentinelRef}
                            disabled
                            className={classes.sentinel}
                            tabIndex={-1}
                          />
                        )}
                      </AutocompleteMenuMenuList>
                    ) : (
                      <AutocompleteMenuEmptyState className={classes.emptyState}>
                        {SearchProps?.value ? labelNoMatches : labelNoOptions}
                      </AutocompleteMenuEmptyState>
                    )}
                    {footer}
                  </AutocompleteMenuPaper>
                </ClickAwayListener>
              </div>
            </TrapFocus>
          </div>
        </Grow>
      )}
    </AutocompleteMenuRoot>
  );
  // eslint-disable-next-line no-use-before-define
}) as <T>(props: AutocompleteMenuProps<T> & { ref?: ForwardedRef<HTMLDivElement> }) => JSX.Element;
