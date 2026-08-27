import { CSSProperties } from 'react';

/** Forces a reflow so that a transition always starts from the beginning. */
export const reflow = (node: Element) => node.scrollTop;

interface GetTransitionPropsParams {
  easing: string | { enter?: string; exit?: string } | undefined;
  style: CSSProperties | undefined;
  timeout: 'auto' | number | { appear?: number; enter?: number; exit?: number } | undefined;
}

interface GetTransitionPropsOptions {
  mode: 'enter' | 'exit';
}

interface GetTransitionPropsResult {
  duration: string | number;
  easing: string | undefined;
  delay: string | undefined;
}

/** Resolves the duration, easing and delay of a single transition phase. */
export const getTransitionProps = (
  props: GetTransitionPropsParams,
  options: GetTransitionPropsOptions
): GetTransitionPropsResult => {
  const { timeout, easing, style = {} } = props;

  const getDuration = () => {
    if (style.transitionDuration !== undefined) {
      return style.transitionDuration;
    }

    if (typeof timeout === 'number') {
      return timeout;
    }

    if (timeout && typeof timeout === 'object') {
      return timeout[options.mode] || 0;
    }

    return 0;
  };

  return {
    duration: getDuration(),
    easing: style.transitionTimingFunction ?? (typeof easing === 'object' ? easing[options.mode] : easing),
    delay: style.transitionDelay,
  };
};
