/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ElementType, HTMLProps, JSXElementConstructor, ReactNode, SyntheticEvent } from 'react';

import { TooltipClasses } from './Tooltip.classes';

import { MUIStyledCommonProps, SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { PopperProps } from '@mui/material/Popper';
import { TransitionProps } from '@mui/material/transitions';

import { OverridableStringUnion } from '@mui/types';

export interface TooltipComponentsPropsOverrides {}

export interface TooltipPropsColorOverrides {}

export interface TooltipPropsArrowSizeOverrides {}

export interface TooltipProps {
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default true
   */
  arrow?: boolean;
  /**
   * Tooltip reference element.
   */
  children: ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TooltipClasses>;
  /** Class applied to the root element. */
  className?: string;
  /**
   * The color of the component.
   * @default 'monoAA600'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'monoAA600'
    | 'monoB'
    | 'monoBA600'
    | 'whiteA600',
    TooltipPropsColorOverrides
  >;
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild?: boolean;
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener?: boolean;
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener?: boolean;
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive?: boolean;
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener?: boolean;
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay?: number;
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay?: number;
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay?: number;
  /**
   * If set, the tooltip follow the cursor over the wrapped element.
   */
  followCursor?: 'both' | 'horizontal' | 'vertical';
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id?: string;
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay?: number;
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay?: number;
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {SyntheticEvent} event The event source of the callback.
   */
  onClose?: (event: SyntheticEvent | Event) => void;
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {SyntheticEvent} event The event source of the callback.
   */
  onOpen?: (event: SyntheticEvent) => void;
  /**
   * If `true`, the component is shown.
   */
  open?: boolean;
  /**
   * Tooltip placement.
   * @default 'top'
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent?: JSXElementConstructor<PopperProps>;
  /**
   * Props applied to the Popper element.
   * @default {}
   */
  PopperProps?: Partial<PopperProps>;
  /**
   * Size of the arrow element. Applied only when default arrow is used.
   * @default '6'
   */
  arrowSize?: OverridableStringUnion<'6' | '8' | '10', TooltipPropsArrowSizeOverrides>;
  /**
   * The component maps the arrowSize prop to different icons.
   * If you wish to change this mapping, you can provide your own.
   */
  arrowIconMapping?: Record<
    OverridableStringUnion<'6' | '8' | '10', TooltipPropsArrowSizeOverrides>,
    { icon: ReactNode; width: number }
  >;
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    popper?: Partial<PopperProps> & TooltipComponentsPropsOverrides;
    transition?: TransitionProps & TooltipComponentsPropsOverrides;
    tooltip?: HTMLProps<HTMLDivElement> & MUIStyledCommonProps<Theme> & TooltipComponentsPropsOverrides;
    arrow?: HTMLProps<HTMLSpanElement> & MUIStyledCommonProps<Theme> & TooltipComponentsPropsOverrides;
  };
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    popper?: ElementType<PopperProps>;
    transition?: ElementType;
    tooltip?: ElementType;
    arrow?: ElementType;
  };
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: ReactNode;
  /**
   * The distance from the reference element.
   * @default 4
   */
  distance?: number;
  /**
   * The component used for the transition.
   * @default Fade
   */
  TransitionComponent?: JSXElementConstructor<TransitionProps & { children: ReactNode }>;
  /**
   * Props applied to the transition element.
   */
  TransitionProps?: TransitionProps;
}
