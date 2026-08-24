import { ReactElement, Ref, version } from 'react';

/**
 * Reads the ref of a react element.
 *
 * React 19 moved the ref from the element itself to its props, so both places have to be supported while the library
 * allows react 18.
 */
export const getReactElementRef = (element: ReactElement): Ref<unknown> | null => {
  if (parseInt(version, 10) >= 19) {
    return (element?.props as { ref?: Ref<unknown> })?.ref || null;
  }

  return (element as unknown as { ref?: Ref<unknown> })?.ref || null;
};
