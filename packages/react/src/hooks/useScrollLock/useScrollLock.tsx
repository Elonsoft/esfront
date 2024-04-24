import {
  unstable_getScrollbarSize as getScrollbarSize,
  unstable_ownerDocument as ownerDocument,
  unstable_ownerWindow as ownerWindow,
  unstable_useEnhancedEffect as useEnhancedEffect
} from '@mui/utils';

const isOverflowing = (element: Element) => {
  const doc = ownerDocument(element);

  if (doc.body === element) {
    return ownerWindow(element).innerWidth > doc.documentElement.clientWidth;
  }

  return element.scrollHeight > element.clientHeight;
};

const getPaddingRight = (element: Element) => {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
};

export const useScrollLock = (lock: boolean, container: HTMLElement) => {
  useEnhancedEffect(() => {
    if (lock) {
      const restoreStyle: Array<{ value: string; property: string; el: HTMLElement | SVGElement }> = [];

      if (isOverflowing(container)) {
        const scrollbarSize = getScrollbarSize(ownerDocument(container));

        restoreStyle.push({
          value: container.style.paddingRight,
          property: 'padding-right',
          el: container
        });

        // Use computed style, here to get the real padding to add our scrollbar width.
        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

        // .mui-fixed is a global helper.
        const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');

        [].forEach.call(fixedElements, (element: HTMLElement | SVGElement) => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: 'padding-right',
            el: element
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

      // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screen size shrink.
      restoreStyle.push(
        {
          value: scrollContainer.style.overflow,
          property: 'overflow',
          el: scrollContainer
        },
        {
          value: scrollContainer.style.overflowX,
          property: 'overflow-x',
          el: scrollContainer
        },
        {
          value: scrollContainer.style.overflowY,
          property: 'overflow-y',
          el: scrollContainer
        }
      );

      scrollContainer.style.overflow = 'hidden';

      const restore = () => {
        restoreStyle.forEach(({ value, el, property }) => {
          if (value) {
            el.style.setProperty(property, value);
          } else {
            el.style.removeProperty(property);
          }
        });
      };

      return restore;
    }
  }, [lock]);
};
