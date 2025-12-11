import { CSSProperties } from 'react';

export interface TouchRippleProps {
  /** Class applied to the root element. */
  className?: string;
  /** Style applied to the root element. */
  style?: CSSProperties;
}

export interface TouchRippleParams {
  /** If true, the ripple starts from the center. */
  center?: boolean;
  /** If true, the ripple is disabled. */
  disabled?: boolean;

  /** The duration for the ripple animation, in milliseconds. */
  pressGrowDuration?: number;
  /** The minimum duration for the ripple animation, in milliseconds. */
  minimumPressDuration?: number;

  onClick?: React.MouseEventHandler<HTMLElement>;
  onContextMenu?: React.MouseEventHandler<HTMLElement>;
  onPointerCancel?: React.PointerEventHandler<HTMLElement>;
  onPointerDown?: React.PointerEventHandler<HTMLElement>;
  onPointerUp?: React.PointerEventHandler<HTMLElement>;
  onPointerLeave?: React.PointerEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}
