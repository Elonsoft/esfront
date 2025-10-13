import { ReactNode, Ref } from 'react';

import { ImageClasses } from './Image.classes';

import { SxProps, Theme } from '@mui/material';

export interface ImageImperativeActions {
  /** Get the current scale. */
  getScale: () => number;
  /**
   * Set the new scale.
   * @param scale The new scale.
   * @param animate Should the scale change be animated.
   * */
  setScale: (scale: number, animate?: boolean) => void;
}

export interface ImageProps {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: ImageClasses;
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
   * Do not scale image with wheel events.
   * @default false
   */
  disableWheel?: boolean;
  /**
   * Do not scale image with touch events.
   * @default false
   */
  disablePinch?: boolean;

  /** A ref for imperative actions. */
  actions?: Ref<ImageImperativeActions>;
}
