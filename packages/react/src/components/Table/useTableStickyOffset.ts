import { MutableRefObject, useEffect } from 'react';

const getStickyOffset = (element: HTMLElement | null, pin: 'left' | 'right') => {
  let width = 0;

  if (element) {
    if (pin === 'left') {
      let sibling = element.previousElementSibling;

      while (sibling) {
        if (sibling.classList.contains('es-table-cell--pin--left')) {
          width += sibling.clientWidth;
        }

        sibling = sibling.previousElementSibling;
      }
    }

    if (pin === 'right') {
      let sibling = element.nextElementSibling;

      while (sibling) {
        if (sibling.classList.contains('es-table-cell--pin--right')) {
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
          ref.current.querySelectorAll('.es-table-cell--pin--left').forEach((cell) => {
            (cell as HTMLElement).style.left = getStickyOffset(cell as HTMLElement, 'left');
          });

          ref.current.querySelectorAll('.es-table-cell--pin--right').forEach((cell) => {
            (cell as HTMLElement).style.right = getStickyOffset(cell as HTMLElement, 'right');
          });
        }
      });

      const observe = () => {
        if (ref.current) {
          ref.current.querySelectorAll('.es-table-cell--pin--left, .es-table-cell--pin--right').forEach((element) => {
            resizeObserver.observe(element);
          });
        }
      };

      const mutationObserver = new MutationObserver(() => {
        resizeObserver.disconnect();

        if (ref.current) {
          ref.current.querySelectorAll('.es-table-cell').forEach((element) => {
            (element as HTMLElement).style.removeProperty('left');
            (element as HTMLElement).style.removeProperty('right');
          });

          observe();
        }
      });

      ref.current.querySelectorAll('.es-table-row__content').forEach((element) => {
        mutationObserver.observe(element, { childList: true });
      });

      ref.current.querySelectorAll('.es-table-cell').forEach((element) => {
        // TODO: ResizeObserver reconnected on every class change. We want to reconnect only when .es-table-cell--pin--left or .es-table-cell--pin--right classes are changing.
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
