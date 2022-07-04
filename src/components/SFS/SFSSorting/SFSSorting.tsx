import React, { useRef, useState } from 'react';

import {
  SFSSortingDirection,
  SFSSortingOptionMap,
  SFSSortingProps,
  SFSSortingValue,
  SFSSortingValues
} from './SFSSorting.types';

import clsx from 'clsx';
import { getSFSSortingUtilityClass, sfsSortingClasses } from './SFSSorting.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { IconSortDirectionDown } from './icons/IconSortDirectionDown';
import { IconSortDirectionUp } from './icons/IconSortDirectionUp';

import { Link } from '../../../components/Link';
import { IconSortSmallCustom } from '../../../icons';
import { IconArrowDownRounded, IconArrowUpRounded } from '../../../icons';
import { Kbd } from '../../Kbd';
import { Switch } from '../../Switch';
import { SFSButton } from '../SFSButton';

type SFSSortingOwnerState = {
  classes?: SFSSortingProps['classes'];
  isSorting?: boolean;
  isEmpty?: boolean;
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    openMenuButton: ['openMenuButton'],
    openMenuButtonBadge: ['openMenuButtonBadge'],
    sortingMenuRoot: ['sortingMenuRoot'],
    sortingMenuItem: ['sortingMenuItem'],
    menuHeader: ['menuHeader'],
    menuFooter: ['menuFooter'],
    changeSortDirectionButton: ['changeSortDirectionButton'],
    resetSortButton: ['resetSortButton'],
    sortingOptionBadge: ['sortingOptionBadge']
  };

  return composeClasses(slots, getSFSSortingUtilityClass, classes);
};

const SFSSortingRoot = styled('div', {
  name: 'ESSFSSorting',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({}));

const SFSSortingOpenMenuButton = styled(SFSButton, {
  name: 'ESSFSSorting',
  slot: 'OpenMenuButton',
  overridesResolver: (_, styles) => styles.openMenuButton
})<{ ownerState: SFSSortingOwnerState }>(({ ownerState, theme }) => ({
  gap: '4px',
  [`&:hover .${sfsSortingClasses.openMenuButtonBadge}, & .${sfsSortingClasses.openMenuButtonBadge}`]: {
    '&.MuiTypography-root, & .MuiSvgIcon-root': {
      color: `${theme.palette.black.A800}`
    }
  },
  [theme.breakpoints.up('tabletXS')]: {
    '& > .MuiSvgIcon-root': {
      display: ownerState.isEmpty && 'none'
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& > .MuiTypography-root:first-of-type': {
      display: 'none'
    }
  }
}));

const SFSSortingOpenMenuButtonBadge = styled(Typography, {
  name: 'ESSFSSorting',
  slot: 'OpenMenuButtonBadge',
  overridesResolver: (_, styles) => styles.openMenuButtonBadge
})(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary[300]
})) as typeof Typography;

const SFSSortingMenu = styled(Popover, {
  name: 'ESSFSSorting',
  slot: 'SortingMenuRoot',
  overridesResolver: (_, styles) => styles.sortingMenuRoot
})(({ theme }) => ({
  '& .MuiPopover-paper': {
    marginTop: '4px',
    paddingBottom: '6px',
    backgroundColor: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600],
    userSelect: 'none',
    ...theme.scrollbars.overlay,

    '& .MuiList-root': {
      width: '320px',
      maxWidth: '100%',
      padding: '0 16px'
    }
  }
}));

const SFSSortingMenuHeader = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuHeader',
  overridesResolver: (_, styles) => styles.menuHeader
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 16px 6px 16px'
}));

const SFSSortingMenuItem = styled(MenuItem, {
  name: 'ESSFSSorting',
  slot: 'SortingMenuItem',
  overridesResolver: (_, styles) => styles.sortingMenuItem
})(({ theme }) => ({
  '&.MuiMenuItem-root.MuiButtonBase-root:not(.Mui-disabled)': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 16px',
    margin: '0 -16px',
    minHeight: '32px',
    height: '32px',
    ...theme.mixins.listItem({
      background: '',
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A75,
      active: theme.palette.monoA.A150
    })
  },
  '&.MuiMenuItem-root.Mui-disabled': {
    color: 'inherit',
    padding: '0 0 6px 0',
    display: 'block',
    minHeight: 0,
    height: 'auto',
    opacity: 1,
    '& .MuiDivider-root': {
      margin: '8px -16px'
    }
  }
}));

const SFSSortingChangeSortDirectionButton = styled(Button, {
  name: 'ESSFSSorting',
  slot: 'ChangeSortDirectionButton',
  overridesResolver: (_, styles) => styles.changeSortDirectionButton
})(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'unset',
    position: 'relative',
    zIndex: 10,
    borderRadius: 0,
    gap: '6px',
    padding: 0,
    color: theme.palette.monoA.A600,
    '&.Mui-focusVisible': {
      '& .MuiTypography-root': {
        color: theme.palette.monoA.A900
      },
      [`& .${sfsSortingClasses.sortingOptionBadge}`]: {
        backgroundColor: theme.palette.secondary.A550
      }
    },
    '&:hover': {
      '& .MuiTouchRipple-root': {
        backgroundColor: 'transparent'
      },
      [`& .${sfsSortingClasses.sortingOptionBadge}`]: {
        backgroundColor: theme.palette.secondary.A550
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.palette.monoA.A900
      }
    },
    '&:active': {
      [`& .${sfsSortingClasses.sortingOptionBadge}`]: {
        backgroundColor: theme.palette.secondary.A400
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.palette.monoA.A600
      }
    }
  }
}));

const SFSSortingMenuFooter = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuFooter',
  overridesResolver: (_, styles) => styles.menuFooter
})(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.monoA.A100}`,
  marginTop: '8px',
  padding: '6px 3px 0 12px',
  display: 'flex',
  alignItems: 'center',

  '& .ESKbd-root:first-of-type': {
    marginRight: '3px'
  },

  '& .ESKbd-root:last-of-type': {
    marginLeft: '3px',
    marginRight: '8px'
  },

  '& .ESSwitch-root': {
    marginLeft: 'auto'
  }
}));

const SFSSortingOptionBadge = styled('div', {
  name: 'ESSFSSorting',
  slot: 'SortingOptionBadge',
  overridesResolver: (_, styles) => styles.sortingOptionBadge
})(({ theme }) => ({
  display: 'flex',
  borderRadius: '4px',
  padding: '3px 2px',
  backgroundColor: theme.palette.secondary.A400,
  boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A25}`
}));

/**
 * Represents the sorting component.
 */
export const SFSSorting = (inProps: SFSSortingProps) => {
  const {
    className,
    sx,
    options,
    multiple,
    values: currentValues,
    onChange,
    labelAsc,
    labelDesc,
    labelResetButton,
    labelButton,
    labelSortOrder,
    labelSortTooltip,
    labelMultisortTitle,
    labelMultisortLMB,
    labelMultisortMobileOn,
    labelMultisortMobileOff,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSorting'
  });
  const values = multiple ? currentValues : currentValues ? [currentValues] : [];

  const ownerState = { ...props, isEmpty: !!values[0] };
  const classes = useUtilityClasses(ownerState);

  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const [isMulti, setIsMulti] = useState(false);

  const SFSSortingMenuListRef = useRef<HTMLUListElement | null>(null);

  const sortMap: Record<string, SFSSortingOptionMap> = {};
  const valuesMap: Record<string, { i: number; direction: SFSSortingDirection }> = {};
  values.forEach((value, i) => {
    valuesMap[value.value] = {
      direction: value.direction,
      i
    };
  });
  options.forEach((option) => {
    sortMap[option.value] = {
      ...option,
      ...valuesMap[option.value]
    };
  });

  const onSortChange = (values: SFSSortingValues) => {
    multiple ? onChange(values) : onChange(values[0] ? { ...values[0] } : null);
  };

  const setFocusOnLastPressedElement = (label: string, e?: React.KeyboardEvent<HTMLLIElement>) => {
    if (!e?.code) return;
    setTimeout(() => {
      let elem = SFSSortingMenuListRef.current?.firstChild as HTMLLIElement;
      do {
        if ((elem.firstChild as HTMLLIElement).innerText === label) {
          elem.focus();
          break;
        }
      } while ((elem = elem.nextElementSibling as HTMLLIElement));
    });
  };

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  const onChangeSortMode = () => {
    onSortChange(!isMulti || values.length === 1 ? [...values] : []);
    setIsMulti(!isMulti);
  };

  const onResetSort = () => {
    setIsMulti(false);
    onSortChange([]);
  };

  const onHadleSort = (value: string) => (e?: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
    const isMultiSort = multiple && (isMulti || e?.metaKey || e?.ctrlKey);

    isMultiSort ? toggleMultiSort(value) : onSortChange(values[sortMap[value].i] ? [] : [{ value, direction: 'asc' }]);
    setFocusOnLastPressedElement(sortMap[value].label, e as React.KeyboardEvent<HTMLLIElement>);
  };

  const toggleMultiSort = (value: string) => {
    const newValues: SFSSortingValues = values[sortMap[value].i]
      ? values.filter(({ value: v }) => v !== value || !isMulti)
      : [...values, { value, direction: 'asc' }];

    setIsMulti(!!newValues.length);
    onSortChange(newValues);
  };

  const onChangeSortDirection = (value: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newValues = [...values];
    newValues[sortMap[value].i].direction = newValues[sortMap[value].i].direction === 'asc' ? 'desc' : 'asc';
    onSortChange(newValues);
  };

  const nextItem = (elem: HTMLLIElement): HTMLLIElement | undefined => {
    if (elem.nextElementSibling && (elem.nextElementSibling as HTMLLIElement).getAttribute('aria-disabled')) {
      return (elem.nextElementSibling as HTMLLIElement).nextElementSibling as HTMLLIElement;
    }

    if (elem.nextElementSibling) {
      return elem.nextElementSibling as HTMLLIElement;
    }
  };

  const onKeyDownControl = (e: React.KeyboardEvent<HTMLLIElement | HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).type === 'button') {
      switch (e.code) {
        case 'ArrowLeft':
          ((e.target as HTMLLIElement).parentNode as HTMLLIElement).focus();
          break;
        case 'ArrowUp':
          const prevElement = ((e.target as HTMLButtonElement).parentElement as HTMLLIElement).previousElementSibling;
          if (prevElement) {
            e.stopPropagation();
            (prevElement as HTMLLIElement).focus();
          }
          break;
        case 'ArrowDown':
          const nextElement = nextItem((e.target as HTMLButtonElement).parentElement as HTMLLIElement);
          if (nextElement) {
            e.stopPropagation();
            nextElement.focus();
          }
          break;
      }
    } else {
      if (e.code === 'ArrowRight' && (e.target as any).childNodes[1]) {
        ((e.target as HTMLLIElement).childNodes[1] as HTMLButtonElement).focus();
      }
    }
  };

  const onStopRipple = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const renderItem = (item: SFSSortingValue, i: number, isCalcTabIndex = false) => (
    <SFSSortingMenuItem
      tabIndex={isCalcTabIndex ? (i === 0 ? 0 : -1) : -1}
      key={item.value}
      className={classes.sortingMenuItem}
      disableTouchRipple={isMulti}
      onClick={onHadleSort(item.value)}
      onKeyDown={onKeyDownControl}
      selected={!!item.direction}
    >
      <Typography variant="body100" color="monoA.A900">
        {sortMap[item.value].label}
      </Typography>
      {!!item.direction && (
        <SFSSortingChangeSortDirectionButton
          tabIndex={-1}
          className={classes.changeSortDirectionButton}
          disableRipple
          color="monoA"
          size="32"
          onMouseDown={onStopRipple}
          onTouchStart={onStopRipple}
          onClick={onChangeSortDirection(item.value)}
        >
          <Typography variant="caption" color="monoA.A600">
            {item.direction === 'asc' ? labelAsc : labelDesc}
          </Typography>
          <SFSSortingOptionBadge className={classes.sortingOptionBadge}>
            {item.direction === 'asc' ? <IconSortDirectionUp /> : <IconSortDirectionDown />}
            {isMulti && (
              <Typography component="div" variant="mini100Bold" color="monoA.A600">
                {i + 1}
              </Typography>
            )}
          </SFSSortingOptionBadge>
        </SFSSortingChangeSortDirectionButton>
      )}
    </SFSSortingMenuItem>
  );

  return (
    <SFSSortingRoot sx={sx} className={clsx(classes.root, className)}>
      <SFSSortingOpenMenuButton ownerState={ownerState} onClick={onMenuOpen} className={classes.openMenuButton}>
        <Typography component="div" color="monoA.A550" variant="body100">
          {values.length === 1 ? sortMap[values[0].value].label : labelButton}
        </Typography>
        <IconSortSmallCustom />
        {values.length === 1 && (
          <SFSSortingOpenMenuButtonBadge className={classes.openMenuButtonBadge} component="div">
            {values[0].direction === 'asc' ? <IconArrowUpRounded /> : <IconArrowDownRounded />}
          </SFSSortingOpenMenuButtonBadge>
        )}
        {values.length > 1 && (
          <SFSSortingOpenMenuButtonBadge component="div" variant="mini200" className={classes.openMenuButtonBadge}>
            {values.length}
          </SFSSortingOpenMenuButtonBadge>
        )}
      </SFSSortingOpenMenuButton>
      <SFSSortingMenu
        className={classes.sortingMenuRoot}
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={onMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        TransitionProps={{
          onExited: () => isMulti && values.length === 1 && setIsMulti(false)
        }}
      >
        <SFSSortingMenuHeader className={classes.menuHeader}>
          <Typography color="monoA.A600" variant="caption">
            {isMulti && !!values.length ? labelSortOrder : labelSortTooltip}
          </Typography>
          {!!values.length && (
            <Link
              component="button"
              autoFocus
              underline="hover"
              variant="caption"
              color="monoA.A500"
              className={classes.resetSortButton}
              onClick={onResetSort}
            >
              {labelResetButton}
            </Link>
          )}
        </SFSSortingMenuHeader>
        <MenuList autoFocusItem={!values.length} ref={SFSSortingMenuListRef}>
          {isMulti && values.map((item, i) => renderItem(sortMap[item.value], i, true))}
          {isMulti && !!values.length && values.length !== options.length && (
            <SFSSortingMenuItem key="middleSortingDivider" disabled>
              <Divider />
              <Typography marginTop="14px" component="div" color="monoA.A600" variant="caption">
                {labelSortTooltip}
              </Typography>
            </SFSSortingMenuItem>
          )}
          {isMulti && options.filter((v) => !sortMap[v.value].direction).map((o, i) => renderItem(sortMap[o.value], i))}
          {!isMulti && options.map((option, i) => renderItem(sortMap[option.value], i, true))}
        </MenuList>
        {multiple && (
          <SFSSortingMenuFooter className={classes.menuFooter}>
            {useMediaQuery('(hover: none) and (pointer: coarse)') ? (
              <Typography color="monoA.A600" variant="caption">
                {isMulti ? labelMultisortMobileOn : labelMultisortMobileOff}
              </Typography>
            ) : (
              <>
                <Kbd variant="outlined">Ctrl</Kbd>
                <Typography component="span" variant="caption" color="monoA.A900">
                  +
                </Typography>
                <Kbd variant="outlined">{labelMultisortLMB}</Kbd>
                <Typography color="monoA.A600" variant="caption">
                  {labelMultisortTitle}
                </Typography>
              </>
            )}
            <Switch checked={isMulti} type="button" onChange={onChangeSortMode} size="small" />
          </SFSSortingMenuFooter>
        )}
      </SFSSortingMenu>
    </SFSSortingRoot>
  );
};
