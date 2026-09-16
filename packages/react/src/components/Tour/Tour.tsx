'use client';

import { CSSProperties, forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { TourContentProps, TourDirection, TourProps } from './Tour.types';

import clsx from 'clsx';

import { useTourTarget } from './useTourTarget';
import { resolveSelector, TourRect, waitForTarget } from './utils';

import { useControlled, useDocumentEventListener, useEvent, useForkRef } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { ownerDocument } from '../../utils';
import { Popper } from '../Popper';
import { Portal } from '../Portal';

import { flip, limitShift, shift } from '@floating-ui/react-dom';

const VIEWPORT_PADDING = 8;

const middleware = [
  flip({ padding: VIEWPORT_PADDING }),
  shift({
    padding: VIEWPORT_PADDING,
    crossAxis: true,
    limiter: limitShift({ crossAxis: false }),
  }),
];

interface TourActive {
  step: number;
  element: Element | null;
}

const toClientRect = (rect: TourRect) => ({
  x: rect.left,
  y: rect.top,
  top: rect.top,
  left: rect.left,
  right: rect.left + rect.width,
  bottom: rect.top + rect.height,
  width: rect.width,
  height: rect.height,
});

/**
 * The Tour walks the user through the interface, highlighting one element at a time and showing a card next to it.
 */
export const Tour = forwardRef<HTMLDivElement, TourProps>(function Tour(inProps, ref) {
  const {
    steps,
    open,
    step: stepProp,
    defaultStep = 0,
    onStepChange,
    onClose,
    padding,
    radius,
    timeout = 5000,
    container,
    disablePortal = false,
    disableEscapeKeyDown = false,
    disableInteraction = false,
    disableOcclusionTracking = false,
    disableScrollIntoView = false,
    className,
    style,
    slots = {},
    slotProps = {},
    ...other
  } = useDefaultProps({
    props: inProps,
    name: 'ESTour',
  });

  const [step, setStep] = useControlled(defaultStep, stepProp);
  const [active, setActive] = useState<TourActive | null>(null);
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState<HTMLDivElement | null>(null);

  const handleRef = useForkRef(setOverlay, ref);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<AbortController | null>(null);
  const pendingRef = useRef<number | null>(null);

  const count = steps.length;
  const rect = useTourTarget({ element: active?.element || null, overlay, disableOcclusionTracking });

  const run = useEvent(async (target: number, direction: TourDirection) => {
    const next = steps[target];

    if (!next) {
      return;
    }

    controllerRef.current?.abort();

    const controller = new AbortController();
    const { signal } = controller;

    controllerRef.current = controller;
    pendingRef.current = target;

    const context = { step: target, count, direction };
    const current = active ? steps[active.step] : undefined;

    setLoading(true);

    try {
      if (current?.after) {
        await current.after(context);

        if (signal.aborted) {
          return;
        }
      }

      if (next.before) {
        await next.before(context);

        if (signal.aborted) {
          return;
        }
      }

      let element: Element | null = null;

      if (next.selector) {
        element = await waitForTarget(ownerDocument(overlay), next.selector, next.timeout ?? timeout, signal);

        if (signal.aborted) {
          return;
        }

        if (!disableScrollIntoView) {
          element.scrollIntoView({ block: 'center', inline: 'center' });
        }
      }

      pendingRef.current = null;
      setActive({ step: target, element });
      setLoading(false);
    } catch (error) {
      if (signal.aborted) {
        return;
      }

      pendingRef.current = null;
      setLoading(false);

      if (process.env.NODE_ENV !== 'production') {
        console.error(error);
      }

      onClose?.('error');
    }
  });

  useEffect(() => {
    if (!open) {
      controllerRef.current?.abort();
      controllerRef.current = null;
      pendingRef.current = null;
      setActive(null);
      setLoading(false);
      return;
    }

    if (active?.step === step || pendingRef.current === step) {
      return;
    }

    run(step, active ? (step > active.step ? 'next' : 'prev') : 'init');
  }, [open, step, active, run]);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const activeStep = active?.step;
  const hasActiveSelector = activeStep !== undefined && !!steps[activeStep]?.selector;

  const syncElement = useEvent(() => {
    const selector = activeStep === undefined ? undefined : steps[activeStep]?.selector;

    if (!selector) {
      return;
    }

    const element = resolveSelector(ownerDocument(overlay), selector);

    setActive((previous) => (previous && previous.element !== element ? { ...previous, element } : previous));
  });

  useEffect(() => {
    if (!open || !hasActiveSelector) {
      return;
    }

    const document = ownerDocument(overlay);
    const observer = new MutationObserver(syncElement);

    observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [open, overlay, activeStep, hasActiveSelector, syncElement]);

  useEffect(() => {
    if (activeStep !== undefined) {
      cardRef.current?.focus();
    }
  }, [activeStep]);

  useDocumentEventListener('keydown', (event) => {
    if (open && !disableEscapeKeyDown && event.key === 'Escape') {
      event.stopPropagation();
      onClose?.('escapeKeyDown');
    }
  });

  const changeStep = useEvent((target: number, direction: 'next' | 'prev') => {
    if (loading) {
      return;
    }

    setStep(target);
    onStepChange?.(target, { direction });
  });

  const element = active?.element || null;

  const anchorEl = useMemo(() => {
    if (!element) {
      return null;
    }

    if (!rect) {
      return element;
    }

    return {
      getBoundingClientRect: () => spotlightRef.current?.getBoundingClientRect() ?? toClientRect(rect),
      contextElement: element,
    };
  }, [element, rect]);

  const current = active ? steps[active.step] : undefined;

  if (!open || !active || !current) {
    return null;
  }

  const contentProps: TourContentProps = {
    step: active.step,
    count,
    loading,
    next: () => {
      if (loading) {
        return;
      }

      if (active.step >= count - 1) {
        onClose?.('complete');
      } else {
        changeStep(active.step + 1, 'next');
      }
    },
    prev: () => {
      if (active.step > 0) {
        changeStep(active.step - 1, 'prev');
      }
    },
    skip: () => {
      onClose?.('skip');
    },
  };

  const isTargetPresent = !current.selector || !!element;

  const stepPadding = current.padding ?? padding;
  const stepRadius = current.radius ?? radius;

  const rootStyle = {
    ...(rect && {
      '--es-tour-rect-top': `${rect.top}px`,
      '--es-tour-rect-left': `${rect.left}px`,
      '--es-tour-rect-width': `${rect.width}px`,
      '--es-tour-rect-height': `${rect.height}px`,

      ...(rect.gap.top !== null && { '--es-tour-gap-top': `${rect.gap.top}px` }),
      ...(rect.gap.right !== null && { '--es-tour-gap-right': `${rect.gap.right}px` }),
      ...(rect.gap.bottom !== null && { '--es-tour-gap-bottom': `${rect.gap.bottom}px` }),
      ...(rect.gap.left !== null && { '--es-tour-gap-left': `${rect.gap.left}px` }),

      ...((rect.cut.top || rect.cut.left) && { '--es-tour-radius-top-left': '0px' }),
      ...((rect.cut.top || rect.cut.right) && { '--es-tour-radius-top-right': '0px' }),
      ...((rect.cut.bottom || rect.cut.right) && { '--es-tour-radius-bottom-right': '0px' }),
      ...((rect.cut.bottom || rect.cut.left) && { '--es-tour-radius-bottom-left': '0px' }),
    }),
    ...(stepPadding && { '--es-tour-padding': stepPadding }),
    ...(stepRadius && { '--es-tour-radius': stepRadius }),
    ...style,
    ...slotProps.root?.style,
  } as CSSProperties;

  const Root = slots.root || 'div';
  const Card = slots.card || 'div';

  const card = (
    <Card
      aria-modal={disableInteraction}
      role="dialog"
      tabIndex={-1}
      {...slotProps.card}
      ref={cardRef}
      className={clsx('es-tour__card', slotProps.card?.className)}
    >
      {typeof current.content === 'function' ? current.content(contentProps) : current.content}
    </Card>
  );

  return (
    <Portal container={container} disablePortal={disablePortal}>
      <Root
        {...other}
        {...slotProps.root}
        ref={handleRef}
        className={clsx(
          className,
          'es-tour',
          !rect && 'es-tour--dimmed',
          loading && 'es-tour--loading',
          slotProps.root?.className
        )}
        style={rootStyle}
      >
        {!!rect && <div ref={spotlightRef} className="es-tour__spotlight" />}
        {rect && !disableInteraction ? (
          <>
            <div className="es-tour__blocker es-tour__blocker--top" />
            <div className="es-tour__blocker es-tour__blocker--bottom" />
            <div className="es-tour__blocker es-tour__blocker--left" />
            <div className="es-tour__blocker es-tour__blocker--right" />
          </>
        ) : (
          <div className="es-tour__blocker es-tour__blocker--full" />
        )}
        {isTargetPresent &&
          (anchorEl ? (
            <Popper
              disablePortal
              open
              anchorEl={anchorEl}
              middleware={middleware}
              placement={current.placement || 'bottom'}
              {...slotProps.popper}
              className={clsx('es-tour__popper', slotProps.popper?.className)}
            >
              {card}
            </Popper>
          ) : (
            <div className="es-tour__center">{card}</div>
          ))}
      </Root>
    </Portal>
  );
});
