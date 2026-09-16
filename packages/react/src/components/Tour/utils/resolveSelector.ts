import { TourSelector } from '../Tour.types';

export const resolveSelector = (document: Document, selector: TourSelector): Element | null => {
  return typeof selector === 'function' ? selector() : document.querySelector(selector);
};
