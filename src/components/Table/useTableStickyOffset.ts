import { MutableRefObject, useEffect } from 'react';

import { tableCellClasses } from './TableCell';
import { tableRowClasses } from './TableRow';

const getStickyOffset = (element: HTMLElement | null, pin: 'left' | 'right') => {
  let width = 0;
  if (element) {
    if (pin === 'left') {
      let sibling = element.previousElementSibling;
      while (sibling) {
        if (sibling.classList.contains(tableCellClasses.pinLeft)) {
          width += sibling.clientWidth;
        }
        sibling = sibling.previousElementSibling;
      }
    }
    if (pin === 'right') {
      let sibling = element.nextElementSibling;
      while (sibling) {
        if (sibling.classList.contains(tableCellClasses.pinRight)) {
          width += sibling.clientWidth;
        }
        sibling = sibling.nextElementSibling;
      }
    }
  }
  return `${width}px`;
};

/**
 * @internal
 * The hook that sets left and right offsets for sticky (pinned) cells.
 */
export const useTableStickyOffset = (ref: MutableRefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (ref.current) {
          ref.current.querySelectorAll(`.${tableCellClasses.pinLeft}`).forEach((cell) => {
            (cell as HTMLElement).style.left = getStickyOffset(cell as HTMLElement, 'left');
          });
          ref.current.querySelectorAll(`.${tableCellClasses.pinRight}`).forEach((cell) => {
            (cell as HTMLElement).style.right = getStickyOffset(cell as HTMLElement, 'right');
          });
        }
      });

      const observe = () => {
        if (ref.current) {
          ref.current
            .querySelectorAll(`.${tableCellClasses.pinLeft}, .${tableCellClasses.pinRight}`)
            .forEach((element) => {
              resizeObserver.observe(element);
            });
        }
      };

      const mutationObserver = new MutationObserver(() => {
        resizeObserver.disconnect();

        if (ref.current) {
          ref.current.querySelectorAll(`.${tableCellClasses.root}`).forEach((element) => {
            (element as HTMLElement).style.removeProperty('left');
            (element as HTMLElement).style.removeProperty('right');
          });
          observe();
        }
      });

      ref.current.querySelectorAll(`.${tableRowClasses.content}`).forEach((element) => {
        mutationObserver.observe(element, { childList: true });
      });
      ref.current.querySelectorAll(`.${tableCellClasses.root}`).forEach((element) => {
        // TODO: ResizeObserver reconnected on every class change. We want to reconnect only when ESTableCell-pinLeft or ESTableCell-pinRight classes are changing.
        mutationObserver.observe(element, { attributeFilter: ['class'] });
      });

      observe();

      return () => {
        resizeObserver.disconnect();
        mutationObserver.disconnect();
      };
    }
  }, []);
};
