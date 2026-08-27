import { getScrollbarSize } from './getScrollbarSize';
import { ownerDocument } from './ownerDocument';
import { ownerWindow } from './ownerWindow';

const isOverflowing = (element: Element) => {
  const doc = ownerDocument(element);

  if (doc.body === element) {
    return ownerWindow(element).innerWidth > doc.documentElement.clientWidth;
  }

  return element.scrollHeight > element.clientHeight;
};

const getPaddingRight = (element: Element) => {
  return parseFloat(ownerWindow(element).getComputedStyle(element).paddingRight) || 0;
};

/**
 * Prevents the container from scrolling and compensates the width of the scrollbar that disappears.
 *
 * Elements marked with the `.es-fixed` class are compensated as well, which keeps position fixed
 * elements from shifting.
 *
 * @returns A function restoring the styles that have been changed.
 */
export const lockScroll = (container: HTMLElement): (() => void) => {
  const restoreStyle: Array<{ value: string; property: string; el: HTMLElement | SVGElement }> = [];

  if (isOverflowing(container)) {
    // Compute the size before applying overflow hidden to avoid any scroll jumps.
    const scrollbarSize = getScrollbarSize(ownerWindow(container));

    restoreStyle.push({
      value: container.style.paddingRight,
      property: 'padding-right',
      el: container,
    });

    // Use computed style, here to get the real padding to add our scrollbar width.
    container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

    const fixedElements = ownerDocument(container).querySelectorAll('.es-fixed');

    [].forEach.call(fixedElements, (element: HTMLElement | SVGElement) => {
      restoreStyle.push({
        value: element.style.paddingRight,
        property: 'padding-right',
        el: element,
      });

      element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
    });
  }

  let scrollContainer: HTMLElement;

  if (container.parentNode instanceof DocumentFragment) {
    scrollContainer = ownerDocument(container).body;
  } else {
    // Support html overflow-y: auto for scroll stability between pages
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
    const parent = container.parentElement;
    const containerWindow = ownerWindow(container);

    scrollContainer =
      parent?.nodeName === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll'
        ? parent
        : container;
  }

  // Block the scroll even if no scrollbar is visible to account for mobile keyboard screen size shrink.
  restoreStyle.push(
    {
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer,
    },
    {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer,
    },
    {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer,
    }
  );

  scrollContainer.style.overflow = 'hidden';

  return () => {
    restoreStyle.forEach(({ value, el, property }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
};
