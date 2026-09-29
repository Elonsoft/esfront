import { ElementType, HTMLAttributes, ReactNode } from 'react';

import { PopperPlacement, PopperProps } from '../Popper';
import { PortalProps } from '../Portal';

/** The direction a step was reached from. `init` is the step the tour opened on. */
export type TourDirection = 'init' | 'next' | 'prev';

export type TourCloseReason = 'complete' | 'skip' | 'escapeKeyDown' | 'error';

/** A CSS selector, or a function resolving the element itself. */
export type TourSelector = string | (() => Element | null);

export interface TourStepContext {
  /** The index of the step the tour is moving to. */
  step: number;
  /** The total number of steps. */
  count: number;
  /** The direction the step is reached from. */
  direction: TourDirection;
}

export interface TourContentProps {
  /** The index of the step being rendered. */
  step: number;
  /** The total number of steps. */
  count: number;

  /**
   * If `true`, the tour is waiting for a `before`, an `after` or for the next element to appear. The step currently
   * rendered stays on screen until the next one is ready.
   */
  loading: boolean;

  /** Moves to the next step, or closes the tour with the `complete` reason on the last one. */
  next: () => void;
  /** Moves to the previous step. Does nothing on the first one. */
  prev: () => void;
  /** Closes the tour with the `skip` reason. */
  skip: () => void;
}

export interface TourStep {
  /**
   * The placement of the card relative to the highlighted element.
   * @default 'bottom'
   */
  placement?: PopperPlacement;
  /**
   * The element to highlight, as a CSS selector or as a function returning it. The tour waits for it to appear before
   * showing the step, see `timeout`.
   *
   * It is resolved again whenever the page changes, so the highlight follows an element that is re-rendered as a new
   * node. While nothing matches, the card is hidden and the page is left dimmed; both come back with the element. An
   * element that is only covered or scrolled out of sight keeps its card.
   *
   * When omitted, nothing is highlighted and the card is centered in the viewport.
   */
  selector?: TourSelector;

  /** The content of the card. The function form receives the navigation handles. */
  content: ReactNode | ((props: TourContentProps) => ReactNode);

  /**
   * The number of milliseconds to wait for `selector` to match. Overrides the `timeout` prop.
   *
   * When it elapses the tour closes with the `error` reason.
   */
  timeout?: number;
  /**
   * The space between the highlighted element and the cutout, as a CSS length. Overrides the `padding` prop.
   *
   * Applied through the `--es-tour-padding` custom property, so a `var()` is a valid value. On each edge it shrinks to
   * what is free, down to nothing where the element itself is covered, so the cutout never reaches over a sticky
   * header or a scroll container next to it.
   */
  padding?: string;
  /**
   * The corner radius of the cutout, as a CSS length. Overrides the `radius` prop.
   *
   * Applied through the `--es-tour-radius` custom property, so a `var()` is a valid value. Corners next to an edge the
   * cutout had to stop short of are squared off, since the element carries on under whatever covers it there.
   */
  radius?: string;

  /**
   * Runs before the step is shown, e.g. to navigate to another page or to fetch the data the highlighted element
   * needs. The tour keeps the previous step on screen with `loading` set until the returned promise settles.
   *
   * A rejection closes the tour with the `error` reason.
   */
  before?: (context: TourStepContext) => void | Promise<void>;
  /**
   * Runs when the step is left, before the `before` of the step being moved to.
   *
   * A rejection closes the tour with the `error` reason.
   */
  after?: (context: TourStepContext) => void | Promise<void>;
}

export interface TourProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** The steps of the tour. */
  steps: TourStep[];

  /** If `true`, the tour is shown. */
  open: boolean;

  /** The index of the active step. */
  step?: number;
  /**
   * The index of the step the tour starts on when it is not controlled.
   * @default 0
   */
  defaultStep?: number;

  /** Callback fired when the tour requests another step. */
  onStepChange?: (step: number, context: { direction: TourDirection }) => void;
  /**
   * Callback fired when the tour requests to be closed. The `reason` parameter can be used to control the response.
   *
   * @param {string} reason Can be: `"complete"`, `"skip"`, `"escapeKeyDown"`, `"error"`.
   */
  onClose?: (reason: TourCloseReason) => void;

  /**
   * The default number of milliseconds to wait for a step selector to match. Steps may override it.
   * @default 5000
   */
  timeout?: number;
  /**
   * The default space between the highlighted element and the cutout, as a CSS length. Steps may override it. It is
   * an upper bound: on each edge it shrinks to what is free.
   *
   * When omitted the value of the `--es-tour-padding` custom property is used.
   */
  padding?: string;
  /**
   * The default corner radius of the cutout, as a CSS length. Steps may override it.
   *
   * When omitted the value of the `--es-tour-radius` custom property is used.
   */
  radius?: string;

  /**
   * An element or a function that returns one. The `container` will have the portal children appended to it.
   * Defaults to the body of the top-level document object.
   */
  container?: PortalProps['container'];

  /**
   * The tour will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal?: boolean;
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * If `true`, the highlighted element cannot be interacted with either. By default only the rest of the page is
   * blocked, so the user can act on the element the step is about.
   * @default false
   */
  disableInteraction?: boolean;
  /**
   * If `true`, the cutout always covers the whole bounding box of the highlighted element. By default the tour
   * measures the part of it that is actually on screen, so a sticky header or a scroll container overlapping the
   * element is not highlighted along with it.
   * @default false
   */
  disableOcclusionTracking?: boolean;
  /**
   * If `true`, the highlighted element is not scrolled into view when its step becomes active.
   * @default false
   */
  disableScrollIntoView?: boolean;

  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: {
    root?: ElementType;
    card?: ElementType;
  };
  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * @default {}
   */
  slotProps?: {
    root?: HTMLAttributes<HTMLDivElement>;
    popper?: Partial<PopperProps>;
    card?: HTMLAttributes<HTMLDivElement>;
  };
}
