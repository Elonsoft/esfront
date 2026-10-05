import { ReactElement, Ref } from 'react';

/**
 * Reads the ref of a react element.
 *
 * React 19 moved the ref from the element itself to its props.
 */
export const getReactElementRef = (element: ReactElement): Ref<unknown> | null => {
  return (element?.props as { ref?: Ref<unknown> })?.ref || null;
};
