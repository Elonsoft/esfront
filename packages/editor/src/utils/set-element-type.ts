import { Editor, Element, Location } from 'slate';

/**
 * Changes the `type` of the elements at the given location.
 *
 * The type is a plain string, because the library does not know which element types an
 * application declares. An application that augments slate's `Element` narrows `type` to its
 * own union, which a `string` is not assignable to, hence the cast.
 */
export const setElementType = (editor: Editor, type: string, options?: { at?: Location }) => {
  editor.setNodes<Element>({ type } as unknown as Partial<Element>, options);
};
