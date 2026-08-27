import { HTMLAttributes } from 'react';
import { TransitionActions, TransitionProps as BaseTransitionProps } from 'react-transition-group/Transition';

export type TransitionHandlerKeys = 'onEnter' | 'onEntering' | 'onEntered' | 'onExit' | 'onExiting' | 'onExited';

export type TransitionHandlerProps = Pick<BaseTransitionProps, TransitionHandlerKeys>;

export interface TransitionEasingProps {
  /**
   * The transition timing function.
   * You may specify a single easing or an object containing enter and exit values.
   */
  easing: string | { enter?: string; exit?: string };
}

export type TransitionKeys =
  | 'in'
  | 'mountOnEnter'
  | 'unmountOnExit'
  | 'timeout'
  | 'easing'
  | 'addEndListener'
  | TransitionHandlerKeys;

/**
 * The props shared by every transition component.
 */
export interface TransitionProps
  extends TransitionActions,
    Partial<Pick<BaseTransitionProps & TransitionEasingProps, TransitionKeys>>,
    HTMLAttributes<HTMLElement> {}

/** The timeout of a transition. */
export type TransitionTimeout = TransitionProps['timeout'];
