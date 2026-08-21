import { RefObject } from 'react';

export type ESEnterCallback = (node: HTMLElement, isAppearing: boolean) => void;

export type ESExitCallback = (node: HTMLElement) => void;

/**
 * Adapts the public transition callbacks, which receive the animated node, to the signature `react-transition-group`
 * uses when a `nodeRef` is provided.
 */
export const createTransitionCallbacks = (nodeRef: RefObject<HTMLElement | null>) => ({
  enter: (callback?: ESEnterCallback) => (isAppearing: boolean) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, isAppearing);
    }
  },
  exit: (callback?: ESExitCallback) => () => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current);
    }
  },
});
