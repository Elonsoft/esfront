import { ReactElement } from 'react';

export interface FocusTrapProps {
  /** A single child content element. */
  children: ReactElement<any, any>;
  /** If `true`, focus is locked. */
  open: boolean;
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root. For instance, you can provide the
   * "tabbable" npm dependency.
   */
  getTabbable?: (root: HTMLElement) => ReadonlyArray<HTMLElement>;
  /**
   * This prop extends the `open` prop. It allows to toggle the open state without having to wait for a rerender when
   * changing the `open` prop. This prop should be memoized. It can be used to support multiple focus traps mounted at
   * the same time.
   */
  isEnabled?: () => boolean;
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and replace it to the last
   * focused element when it closes. This also works correctly with any focus trap children that have the
   * `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less accessible to assistive technologies,
   * like screen readers.
   * @default false
   */
  disableAutoFocus?: boolean;
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less accessible to assistive technologies,
   * like screen readers.
   * @default false
   */
  disableEnforceFocus?: boolean;
  /**
   * If `true`, the focus trap will not restore focus to the previously focused element once the focus trap is hidden
   * or unmounted.
   * @default false
   */
  disableRestoreFocus?: boolean;
}
