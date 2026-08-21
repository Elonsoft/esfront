/**
 * Common transition durations in milliseconds.
 *
 * These values are the single source of truth for the motion of the library: `react-transition-group`
 * needs numeric timeouts, so durations cannot live in CSS.
 */
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  /** The most basic recommended timing. */
  standard: 300,
  /** Recommended for complex animations. */
  complex: 375,
  /** Recommended when something is entering the screen. */
  enteringScreen: 225,
  /** Recommended when something is leaving the screen. */
  leavingScreen: 195,
};
