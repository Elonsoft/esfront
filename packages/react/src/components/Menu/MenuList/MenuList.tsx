import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  useImperativeHandle,
  useRef,
} from 'react';

import { MenuListProps } from './MenuList.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useEnhancedEffect, useForkRef } from '../../../hooks';
import { getActiveElement, getScrollbarSize, ownerDocument, ownerWindow } from '../../../utils';

interface TextCriteria {
  keys: string[];
  repeating: boolean;
  previousKeyMatched: boolean;
  lastTime: number | null;
}

type TraversalFunction = (list: Element, item: Element | null, disableListWrap: boolean) => Element | null;

const nextItem: TraversalFunction = (list, item, disableListWrap) => {
  if (list === item) {
    return list.firstElementChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstElementChild;
};

const previousItem: TraversalFunction = (list, item, disableListWrap) => {
  if (list === item) {
    return disableListWrap ? list.firstElementChild : list.lastElementChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastElementChild;
};

const textCriteriaMatches = (nextFocus: Element, textCriteria?: TextCriteria) => {
  if (textCriteria === undefined) {
    return true;
  }

  let text = (nextFocus as HTMLElement).innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText.
    text = nextFocus.textContent || '';
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.startsWith(textCriteria.keys.join(''));
};

const moveFocus = (
  list: Element,
  currentFocus: Element | null,
  disableListWrap: boolean,
  disabledItemsFocusable: boolean,
  traversalFunction: TraversalFunction,
  textCriteria?: TextCriteria
) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent an infinite loop.
    if (nextFocus === list.firstElementChild) {
      if (wrappedOnce) {
        return false;
      }

      wrappedOnce = true;
    }

    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : (nextFocus as HTMLElement & { disabled?: boolean }).disabled ||
        nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      (nextFocus as HTMLElement).focus();
      return true;
    }
  }

  return false;
};

/**
 * The MenuList is a permanently displayed menu. It is exposed to help customizing the Menu — when used on its own the
 * focus has to be moved into the component manually. Once the focus is inside, it is fully keyboard accessible.
 */
export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(function MenuList(inProps, ref) {
  const {
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    disablePadding = false,
    onKeyDown,
    variant = 'selectedMenu',
    ...props
  } = useDefaultProps({
    props: inProps,
    name: 'ESMenuList',
  });

  const listRef = useRef<HTMLUListElement | null>(null);
  const textCriteriaRef = useRef<TextCriteria>({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null,
  });

  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current?.focus();
    }
  }, [autoFocus]);

  useImperativeHandle(
    actions,
    () => ({
      adjustStyleForScrollbar: (containerElement, { direction }) => {
        const list = listRef.current;

        if (!list) {
          return null;
        }

        // Let's ignore that piece of logic if users are already overriding the width of the menu.
        const noExplicitWidth = !list.style.width;

        if (containerElement.clientHeight < list.clientHeight && noExplicitWidth) {
          const scrollbarSize = `${getScrollbarSize(ownerWindow(containerElement))}px`;

          list.style[direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          list.style.width = `calc(100% + ${scrollbarSize})`;
        }

        return list;
      },
    }),
    []
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const list = listRef.current;
    const key = event.key;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;

    if (!list || isModifierKeyPressed) {
      onKeyDown?.(event);
      return;
    }

    const currentFocus = getActiveElement(ownerDocument(list));

    if (key === 'ArrowDown') {
      // Prevent the scroll of the page.
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset.
        if (criteria.lastTime !== null && currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);

      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (
        criteria.previousKeyMatched &&
        (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))
      ) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    onKeyDown?.(event);
  };

  const handleRef = useForkRef(listRef, ref);

  /**
   * The index of the item that should receive focus. In a `variant="selectedMenu"` it is the first `selected` item,
   * otherwise it is the very first item.
   */
  let activeItemIndex = -1;

  // Since we inject focus related props into children we have to do a lookahead to check if there is a `selected` item.
  // We're looking for the last `selected` item and use the first valid item as a fallback.
  Children.forEach(children, (child, index) => {
    const count = Children.count(children);

    if (!isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;

        if (activeItemIndex >= count) {
          // There are no focusable items within the list.
          activeItemIndex = -1;
        }
      }

      return;
    }

    const childProps = child.props as { disabled?: boolean; selected?: boolean; muiSkipListHighlight?: boolean };
    const childType = child.type as { muiSkipListHighlight?: boolean };

    if (!childProps.disabled) {
      if (variant === 'selectedMenu' && childProps.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }

    if (
      activeItemIndex === index &&
      (childProps.disabled || childProps.muiSkipListHighlight || childType.muiSkipListHighlight)
    ) {
      activeItemIndex += 1;

      if (activeItemIndex >= count) {
        // There are no focusable items within the list.
        activeItemIndex = -1;
      }
    }
  });

  const items = Children.map(children, (child, index) => {
    if (index === activeItemIndex && isValidElement(child)) {
      const newChildProps: { autoFocus?: boolean; tabIndex?: number } = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if ((child.props as { tabIndex?: number }).tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return cloneElement(child as ReactElement<typeof newChildProps>, newChildProps);
    }

    return child;
  });

  return (
    <ul
      role="menu"
      {...props}
      ref={handleRef}
      className={clsx(className, 'es-menu-list', disablePadding && 'es-menu-list--disable-padding')}
      tabIndex={autoFocus ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {items}
    </ul>
  );
});
