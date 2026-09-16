import { TourSelector } from '../Tour.types';

import { resolveSelector } from './resolveSelector';

/**
 * Resolves with the element matching `selector`, waiting for it to be added to the document if it is not there yet.
 *
 * Rejects with an `AbortError` when `signal` is aborted, and with an `Error` when `timeout` elapses first.
 */
export const waitForTarget = (
  document: Document,
  selector: TourSelector,
  timeout: number,
  signal: AbortSignal
): Promise<Element> => {
  return new Promise<Element>((resolve, reject) => {
    const initial = resolveSelector(document, selector);

    if (initial) {
      resolve(initial);
      return;
    }

    const abortError = () => new DOMException('The tour was closed while waiting for an element.', 'AbortError');

    if (signal.aborted) {
      reject(abortError());
      return;
    }

    let timer = 0;
    let observer: MutationObserver | null = null;
    let isSettled = false;

    const settle = () => {
      isSettled = true;
      observer?.disconnect();
      document.defaultView?.clearTimeout(timer);
    };

    signal.addEventListener(
      'abort',
      () => {
        if (!isSettled) {
          settle();
          reject(abortError());
        }
      },
      { once: true }
    );

    observer = new MutationObserver(() => {
      const element = resolveSelector(document, selector);

      if (element) {
        settle();
        resolve(element);
      }
    });

    // Attributes are observed as well: the element may already be mounted and only become matchable once a class or a
    // data attribute lands on it.
    observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });

    timer =
      document.defaultView?.setTimeout(() => {
        settle();

        reject(
          new Error(
            `ESTour: no element matched ${
              typeof selector === 'function' ? 'the selector function' : `\`${selector}\``
            } within ${timeout}ms.`
          )
        );
      }, timeout) ?? 0;
  });
};
