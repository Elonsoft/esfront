import { ReactNode, Ref } from 'react';

import { ImageZoomClasses } from './ImageZoom.classes';

import { SxProps, Theme } from '@mui/material';

export interface ImageZoomImperativeActions {
  /** Get the current scale. */
  getScale: () => number;
  /**
   * Set the new scale.
   * @param scale The new scale.
   * @param animate Should the scale change be animated.
   * */
  setScale: (scale: number, animate?: boolean) => void;
}

export interface ImageZoomProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: ImageZoomClasses;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Limit the scale to the given value.
   * @default 5
   */
  maxScale?: number;

  /**
   * Enable image magnify on mouse hover.
   * @default false
   */
  magnify?: boolean;
  /**
   * The scale on mouse hover.
   * @default 2
   */
  magnifyScale?: number;
  /**
   * The scale on double tap.
   * @default 3
   */
  doubleTapScale?: number;

  /**
   * Do not scale image with wheel events.
   * @default false
   */
  disableWheel?: boolean;
  /**
   * Do not scale image with touch events.
   * @default false
   */
  disablePinch?: boolean;
  /**
   * Do not scale image with double tap events.
   * @default false
   */
  disableDoubleTap?: boolean;

  /** A ref for imperative actions. */
  actions?: Ref<ImageZoomImperativeActions>;
}
