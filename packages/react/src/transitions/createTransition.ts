import { duration } from './duration';
import { easing } from './easing';

export interface CreateTransitionOptions {
  /**
   * The duration of the transition. A number is treated as milliseconds.
   * @default duration.standard
   */
  duration?: number | string;
  /**
   * The transition timing function.
   * @default easing.easeInOut
   */
  easing?: string;
  /**
   * The delay before the transition starts. A number is treated as milliseconds.
   * @default 0
   */
  delay?: number | string;
}

const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`;

const formatTime = (value: number | string) => (typeof value === 'string' ? value : formatMs(value));

/**
 * Builds a value for the CSS `transition` property.
 *
 * @param props The CSS properties to animate.
 * @param options The duration, easing and delay of the transition.
 */
export const createTransition = (props: string | string[] = ['all'], options: CreateTransitionOptions = {}) => {
  const { duration: durationOption = duration.standard, easing: easingOption = easing.easeInOut, delay = 0 } = options;

  return (Array.isArray(props) ? props : [props])
    .map((animatedProp) => `${animatedProp} ${formatTime(durationOption)} ${easingOption} ${formatTime(delay)}`)
    .join(',');
};
