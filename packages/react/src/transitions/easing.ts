/** Common transition timing functions. */
export const easing = {
  /** The most common easing curve. */
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Objects enter the screen at full velocity and slowly decelerate to a resting point. */
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  /** Objects leave the screen at full velocity. They do not decelerate when off-screen. */
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  /** Used by objects that may return to the screen at any time. */
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};
