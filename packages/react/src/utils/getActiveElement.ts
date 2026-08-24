/**
 * Returns the actually focused element, traversing through shadow roots if necessary.
 *
 * When an element inside a shadow root has focus, `document.activeElement` returns the shadow host element.
 */
export const getActiveElement = (doc: Document | ShadowRoot): Element | null => {
  let element = doc.activeElement;

  while (element?.shadowRoot?.activeElement) {
    element = element.shadowRoot.activeElement;
  }

  return element;
};
