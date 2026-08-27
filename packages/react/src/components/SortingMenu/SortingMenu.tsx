import React, { memo, useRef, useState } from 'react';

import { SortingMenuDirection, SortingMenuOptionMap, SortingMenuProps, SortingMenuValue } from './SortingMenu.types';

import { useOverlayScrollbars } from 'overlayscrollbars-react';

import clsx from 'clsx';

import { useMediaQuery } from '../../hooks';
import { IconSortAscendingLineW200, IconSortDescendingLineW200 } from '../../icons';
import { useDefaultProps } from '../../theming';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { InformationIcon } from '../InformationIcon';
import { Kbd } from '../Kbd';
import { Link } from '../Link';
import { ListItemText } from '../ListItem';
import { MenuList } from '../Menu';
import { MenuItem } from '../MenuItem';
import { OVERLAY_SCROLLBARS_OPTIONS } from '../OverlayScrollbars';
import { Popover } from '../Popover';
import { Switch } from '../Switch';
import { Tooltip } from '../Tooltip';

const isMacintosh = () => {
  return navigator.userAgent.indexOf('Macintosh') > 0;
};

const getNextItem = (elem: HTMLLIElement): HTMLLIElement | undefined => {
  if (elem.nextElementSibling && (elem.nextElementSibling as HTMLLIElement).getAttribute('aria-disabled') === 'true') {
    return (elem.nextElementSibling as HTMLLIElement).nextElementSibling as HTMLLIElement;
  }

  if (elem.nextElementSibling) {
    return elem.nextElementSibling as HTMLLIElement;
  }
};

/**
 * The SortingMenu allow users to sort list of items by one or multiple properties.
 */
export const SortingMenu = memo(function SortingMenu(inProps: SortingMenuProps) {
  const {
    PopoverProps,

    options = [],

    labelAsc,
    labelDesc,
    labelResetButton,
    labelSortOrder,
    labelSortTooltip,
    labelMultisortTitle,
    labelMultisortTooltip,
    labelMultisortTooltipMacintosh,
    labelMultisortLMB,
    labelMultisortMobileOn,
    labelMultisortMobileOff,

    iconItemAsc = <IconSortAscendingLineW200 container containerHeight="12px" containerWidth="8px" />,
    iconItemDesc = <IconSortDescendingLineW200 container containerHeight="12px" containerWidth="8px" />,

    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESSortingMenu',
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const isTouchScreen = useMediaQuery('(hover: none) and (pointer: coarse)');
  const [isMultiple, setMultiple] = useState(props.multiple && values.length > 1);

  const paperRef = useRef<HTMLDivElement | null>(null);
  const menuListRef = useRef<HTMLUListElement | null>(null);

  const [initialize, instance] = useOverlayScrollbars({ options: OVERLAY_SCROLLBARS_OPTIONS, defer: true });

  const sortMap: Record<string, SortingMenuOptionMap> = {};
  const valuesMap: Record<string, { i: number; direction: SortingMenuDirection }> = {};

  values.forEach((value, i) => {
    valuesMap[value.value] = {
      direction: value.direction,
      i,
    };
  });

  options.forEach((option) => {
    sortMap[option.value] = {
      ...option,
      ...valuesMap[option.value],
    };
  });

  const setFocusOnLastPressedElement = (label: string, e?: React.KeyboardEvent<HTMLLIElement>) => {
    if (!e?.code) {
      return;
    }

    setTimeout(() => {
      let elem = menuListRef?.current?.firstChild as HTMLLIElement;

      do {
        if ((elem.firstChild as HTMLLIElement).innerText === label) {
          elem.focus();
          break;
        }
      } while ((elem = elem.nextElementSibling as HTMLLIElement));
    });
  };

  const onSortChange = (values: SortingMenuValue[]) => {
    if (props.multiple) {
      props.onChange(values);
    } else {
      props.onChange(values[0] ? { ...values[0] } : null);
    }
  };

  const onChangeSortMode = () => {
    onSortChange(!isMultiple || values.length === 1 ? [...values] : []);
    setMultiple(!isMultiple);
  };

  const onResetSort = () => {
    setMultiple(false);
    onSortChange([]);
  };

  const toggleMultiSort = (value: string) => {
    const newValues: SortingMenuValue[] = values[sortMap[value].i]
      ? values.filter(({ value: v }) => v !== value || !isMultiple)
      : [...values, { value, direction: 'asc' }];

    setMultiple(!!newValues.length);
    onSortChange(newValues);
  };

  const onHandleSort =
    (value: string) => (e?: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
      const isMultipleSort = props.multiple && (isMultiple || e?.metaKey || e?.ctrlKey);

      if (isMultipleSort) {
        toggleMultiSort(value);
      } else {
        onSortChange(values[sortMap[value].i] ? [] : [{ value, direction: 'asc' }]);
      }

      setFocusOnLastPressedElement(sortMap[value].label, e as React.KeyboardEvent<HTMLLIElement>);
    };

  const onChangeSortDirection = (value: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const newValues = [...values];
    newValues[sortMap[value].i].direction = newValues[sortMap[value].i].direction === 'asc' ? 'desc' : 'asc';
    onSortChange(newValues);
  };

  const onKeyDownControl = (e: React.KeyboardEvent<HTMLLIElement | HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).type === 'button') {
      switch (e.code) {
        case 'ArrowLeft':
          ((e.target as HTMLLIElement).parentNode?.parentNode as HTMLLIElement).focus();
          break;
        case 'ArrowUp':
          const prevElement = ((e.target as HTMLButtonElement).parentElement?.parentElement as HTMLLIElement)
            .previousElementSibling;

          if (prevElement) {
            e.stopPropagation();
            (prevElement as HTMLLIElement).focus();
          }

          break;
        case 'ArrowDown':
          const nextElement = getNextItem(
            (e.target as HTMLButtonElement).parentElement?.parentElement as HTMLLIElement
          );

          if (nextElement) {
            e.stopPropagation();
            nextElement.focus();
          }

          break;
      }
    } else if (e.code === 'ArrowRight' && (e.target as any).childNodes[0].childNodes[1]) {
      ((e.target as HTMLLIElement).childNodes[0].childNodes[1] as HTMLButtonElement).focus();
    }
  };

  const onStopRipple = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const renderItem = (item: SortingMenuValue, i: number, isCalcTabIndex = false) => {
    return (
      <MenuItem
        key={item.value}
        className="es-sorting-menu__menu-item"
        selected={!!item.direction}
        size="100"
        tabIndex={isCalcTabIndex ? (i === 0 ? 0 : -1) : -1}
        onClick={onHandleSort(item.value)}
        onKeyDown={onKeyDownControl}
      >
        <ListItemText>{sortMap && sortMap[item.value].label}</ListItemText>
        {!!item.direction && (
          <Button
            disableTouchRipple
            className="es-sorting-menu__direction-button"
            color="tertiary"
            size="400"
            tabIndex={-1}
            onClick={onChangeSortDirection(item.value)}
            onMouseDown={onStopRipple}
            onPointerDown={onStopRipple}
            onTouchStart={onStopRipple}
          >
            <span className="es-sorting-menu__caption caption">
              {item.direction === 'asc'
                ? sortMap[item.value].labelAsc || labelAsc
                : sortMap[item.value].labelDesc || labelDesc}
            </span>
            <div className="es-sorting-menu__direction-button-badge">
              {item.direction === 'asc' ? iconItemAsc : iconItemDesc}
              {isMultiple && <span className="mini100-w50">{i + 1}</span>}
            </div>
          </Button>
        )}
      </MenuItem>
    );
  };

  return (
    <Popover
      {...PopoverProps}
      TransitionProps={{
        ...PopoverProps.TransitionProps,
        onEnter: (...args) => {
          setTimeout(() => {
            if (initialize && paperRef.current) {
              initialize(paperRef.current);
            }
          });

          PopoverProps.TransitionProps?.onEnter?.(...args);
        },
        onExited: (...args) => {
          instance()?.destroy();

          if (isMultiple && values.length === 1) {
            setMultiple(false);
          }

          PopoverProps.TransitionProps?.onExited?.(...args);
        },
      }}
      className={clsx('es-sorting-menu', PopoverProps.className)}
      slotProps={{
        ...PopoverProps.slotProps,
        paper: {
          ...PopoverProps.slotProps?.paper,
          ref: paperRef,
          className: clsx(
            'es-overlay-scrollbars es-overlay-scrollbars--color--mono-a',
            PopoverProps.slotProps?.paper?.className
          ),
        },
      }}
    >
      <div className="es-sorting-menu__header">
        <span className="es-sorting-menu__caption caption">
          {isMultiple && !!values.length ? labelSortOrder : labelSortTooltip}
        </span>
        {!!values.length && (
          <Link
            autoFocus
            className="es-sorting-menu__reset-button"
            component="button"
            underline="hover"
            variant="caption"
            onClick={onResetSort}
          >
            {labelResetButton}
          </Link>
        )}
      </div>
      <MenuList ref={menuListRef} autoFocusItem={!values.length}>
        {isMultiple && values.map((item, i) => renderItem(sortMap[item.value], i, true))}
        {isMultiple && !!values.length && values.length !== options.length && (
          <MenuItem key="middleSortingDivider" disabled className="es-sorting-menu__menu-item">
            <Divider />
            <div className="es-sorting-menu__caption es-sorting-menu__sort-tooltip caption">{labelSortTooltip}</div>
          </MenuItem>
        )}
        {isMultiple &&
          options.filter((v) => !sortMap[v.value].direction).map((o, i) => renderItem(sortMap[o.value], i))}
        {!isMultiple && options.map((option, i) => renderItem(sortMap[option.value], i, true))}
      </MenuList>
      {props.multiple && (
        <div className="es-sorting-menu__footer">
          {isTouchScreen ? (
            <span className="es-sorting-menu__caption caption">
              {isMultiple ? labelMultisortMobileOn : labelMultisortMobileOff}
            </span>
          ) : (
            <>
              <Kbd variant="outlined">{isMacintosh() ? '⌘' : 'Ctrl'}</Kbd>
              <span className="es-sorting-menu__plus-sign caption">+</span>
              <Kbd variant="outlined">{labelMultisortLMB}</Kbd>
              <span className="es-sorting-menu__caption caption">{labelMultisortTitle}</span>
              <Tooltip
                className="es-sorting-menu__information-icon"
                title={isMacintosh() ? labelMultisortTooltipMacintosh : labelMultisortTooltip}
              >
                <InformationIcon variant="question" />
              </Tooltip>
            </>
          )}
          <Switch checked={isMultiple} size="small" type="button" onChange={onChangeSortMode} />
        </div>
      )}
    </Popover>
  );
});
