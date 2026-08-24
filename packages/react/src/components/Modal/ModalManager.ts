import { lockScroll } from '../../utils';

export interface ManagedModalProps {
  disableScrollLock?: boolean;
}

export interface ManagedModal {
  mount: Element;
  modalRef: Element;
}

interface ManagedContainer {
  container: HTMLElement;
  hiddenSiblings: Element[];
  modals: ManagedModal[];
  restore: null | (() => void);
}

/** Hides an element from assistive technologies. */
export const ariaHidden = (element: Element, hide: boolean): void => {
  if (hide) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
};

const isAriaHiddenForbiddenOnElement = (element: Element): boolean => {
  // The forbidden HTML tags are the ones from the ARIA specification that can be children of body and can't have the
  // aria-hidden attribute, cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = [
    'TEMPLATE',
    'SCRIPT',
    'STYLE',
    'LINK',
    'MAP',
    'META',
    'NOSCRIPT',
    'PICTURE',
    'COL',
    'COLGROUP',
    'PARAM',
    'SLOT',
    'SOURCE',
    'TRACK',
  ];

  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';

  return isForbiddenTagName || isInputHidden;
};

const ariaHiddenSiblings = (
  container: Element,
  mountElement: Element,
  currentElement: Element,
  elementsToExclude: readonly Element[],
  hide: boolean
): void => {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];

  [].forEach.call(container.children, (element: Element) => {
    if (!blacklist.includes(element) && !isAriaHiddenForbiddenOnElement(element)) {
      ariaHidden(element, hide);
    }
  });
};

const getHiddenSiblings = (container: Element) => {
  const hiddenSiblings: Element[] = [];

  [].forEach.call(container.children, (element: Element) => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });

  return hiddenSiblings;
};

/**
 * Proper state management for containers and the modals in those containers. Simplified, but inspired by
 * react-overlay's ModalManager class. Used by the Modal to ensure proper styling of containers.
 */
export class ModalManager {
  private containers: ManagedContainer[];

  private modals: ManagedModal[];

  constructor() {
    this.modals = [];
    this.containers = [];
  }

  add(modal: ManagedModal, container: HTMLElement): number {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);

    const containerIndex = this.containers.findIndex((item) => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings,
    });

    return modalIndex;
  }

  mount(modal: ManagedModal, props: ManagedModalProps): void {
    const containerIndex = this.containers.findIndex((item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore && !props.disableScrollLock) {
      containerInfo.restore = lockScroll(containerInfo.container);
    }
  }

  remove(modal: ManagedModal, ariaHiddenState = true): number {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = this.containers.findIndex((item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];

    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader. As soon as a modal is added its modalRef
      // is undefined, it can't set aria-hidden because the dom element doesn't exist either.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal: ManagedModal): boolean {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
