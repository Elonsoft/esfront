import { ElementType } from 'react';

/** Determines if a given element is a DOM element name, i.e. not a React component. */
export const isHostComponent = (element: ElementType): boolean => {
  return typeof element === 'string';
};
