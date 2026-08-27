import { ReactElement } from 'react';

export type ClickAwayMouseEvent = 'onClick' | 'onMouseDown' | 'onMouseUp' | 'onPointerDown' | 'onPointerUp';

export type ClickAwayTouchEvent = 'onTouchStart' | 'onTouchEnd';

export interface ClickAwayListenerProps {
  /** A single child content element. */
  children: ReactElement<any, any>;
  /**
   * If `true`, the react tree is ignored and only the DOM tree is considered. This prop changes how portaled elements
   * are handled.
   * @default false
   */
  disableReactTree?: boolean;
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent?: ClickAwayMouseEvent | false;
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent?: ClickAwayTouchEvent | false;
  /** Callback fired when a click outside of the child element is detected. */
  onClickAway: (event: Event) => void;
}
