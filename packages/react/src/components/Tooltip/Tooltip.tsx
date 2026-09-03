'use client';

import {
  cloneElement,
  FocusEvent,
  forwardRef,
  isValidElement,
  MouseEvent,
  MutableRefObject,
  SyntheticEvent,
  TouchEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TooltipProps } from './Tooltip.types';

import clsx from 'clsx';

import { IconPolygon, IconPolygon2, IconPolygon3 } from './icons';

import { useControlled, useEvent, useForkRef, useId, useIsFocusVisible, useLatest, useTimeout } from '../../hooks';
import { useDefaultProps } from '../../theming';
import { Timeout } from '../../utils';
import { Fade } from '../Fade';
import { Popper, PopperActions } from '../Popper';

import { arrow as arrowMiddleware, flip, hide, limitShift, Middleware, offset, shift } from '@floating-ui/react-dom';

let hystersisOpen = false;
const hystersisTimer = new Timeout();
let cursorPosition = { x: 0, y: 0 };

export function testReset() {
  hystersisOpen = false;
  hystersisTimer.clear();
}

function composeEventHandler<T extends MouseEvent | FocusEvent | TouchEvent>(
  handler: (event: T, ...params: any[]) => void,
  eventHandler?: (event: T, ...params: any[]) => void
) {
  return (event: SyntheticEvent, ...params: any[]) => {
    if (eventHandler) {
      eventHandler(event as T, ...params);
    }

    handler(event as T, ...params);
  };
}

const defaultArrowIconMapping = {
  '6': { icon: <IconPolygon />, width: 10 },
  '8': { icon: <IconPolygon2 />, width: 12 },
  '10': { icon: <IconPolygon3 />, width: 16 },
};

export const Tooltip = forwardRef(function Tooltip(inProps: TooltipProps, ref) {
  const {
    arrow = true,
    arrowSize = '6',
    arrowIconMapping = defaultArrowIconMapping,
    distance = 4,
    children: childrenProp,
    color = 'mono-a-a600',
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'top',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp = Fade,
    TransitionProps,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESTooltip' });

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = isValidElement(childrenProp) ? childrenProp : <span>{childrenProp}</span>;

  const [childNode, setChildNode] = useState<HTMLElement>();
  const [arrowRef, setArrowRef] = useState(null);
  const ignoreNonTouchEvents = useRef(false);

  const disableInteractive = disableInteractiveProp || !!followCursor;

  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();

  const [openState, setOpenState] = useControlled(false, openProp);

  let open = openState;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { current: isControlled } = useRef(openProp !== undefined);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (
        childNode &&
        (childNode as HTMLButtonElement).disabled &&
        !isControlled &&
        title !== '' &&
        childNode.tagName.toLowerCase() === 'button'
      ) {
        console.error(
          [
            'You are providing a disabled `button` child to the Tooltip component.',
            'A disabled element does not fire events.',
            "Tooltip needs to listen to the child element's events to display the title.",
            '',
            'Add a simple wrapper element, such as a `span`.',
          ].join('\n')
        );
      }
    }, [title, childNode, isControlled]);
  }

  const id = useId(idProp);

  const prevUserSelect = useRef<string>();

  const stopTouchInteraction = useEvent(() => {
    if (prevUserSelect.current !== undefined) {
      (document.body.style as any).WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    touchTimer.clear();
  });

  useEffect(() => {
    return () => {
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = (event: MouseEvent | FocusEvent | TouchEvent) => {
    hystersisTimer.clear();
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = useEvent((event: MouseEvent | FocusEvent | TouchEvent | KeyboardEvent) => {
    hystersisTimer.start(800 + leaveDelay, () => {
      hystersisOpen = false;
    });

    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    closeTimer.start(150, () => {
      ignoreNonTouchEvents.current = false;
    });
  });

  const handleMouseOver = (event: MouseEvent | FocusEvent | TouchEvent) => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }

    enterTimer.clear();
    leaveTimer.clear();

    if (enterDelay || (hystersisOpen && enterNextDelay)) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };

  const handleMouseLeave = (event: MouseEvent | FocusEvent) => {
    enterTimer.clear();

    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.
  const [, setChildIsFocusVisible] = useState(false);

  const handleBlur = (event: FocusEvent) => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };

  const handleFocus = (event: FocusEvent) => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode && event.currentTarget instanceof HTMLElement) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };

  const detectTouchStart = (event: TouchEvent) => {
    ignoreNonTouchEvents.current = true;

    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleTouchStart = (event: TouchEvent) => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();

    prevUserSelect.current = (document.body.style as any).WebkitUserSelect;
    // Prevent iOS text selection on long-tap.
    (document.body.style as any).WebkitUserSelect = 'none';

    touchTimer.start(enterTouchDelay, () => {
      (document.body.style as any).WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();

    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent: KeyboardEvent) {
      // IE11, Edge (prior to using blink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);

  const handleRef = useForkRef(
    (children as JSX.Element & { ref: MutableRefObject<unknown> }).ref,
    focusVisibleRef,
    setChildNode,
    ref
  );

  // There is no point in displaying an empty tooltip.
  if (!title && title !== 0) {
    open = false;
  }

  const popperRef = useRef<PopperActions | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    cursorPosition = { x: event.clientX, y: event.clientY };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps: {
    title?: string | null;
    'aria-describedby'?: string | null;
    'aria-label'?: string | null;
    'aria-labelledby'?: string | null;
  } = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = {
    ...nameOrDescProps,
    ...props,
    ...children.props,
    className: clsx(props.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...(followCursor ? { onMouseMove: handleMouseMove } : {}),
  };

  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-es-internal-clone-element'] = true;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (childNode && !childNode.getAttribute('data-es-internal-clone-element')) {
        console.error(
          [
            'The `children` component of the Tooltip is not forwarding its props correctly.',
            'Please make sure that props are spread on the same element that the ref is applied to.',
          ].join('\n')
        );
      }
    }, [childNode]);
  }

  const interactiveWrapperListeners: {
    onMouseOver?: (event: MouseEvent | FocusEvent | TouchEvent) => void;
    onMouseLeave?: (event: MouseEvent | FocusEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
  } = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(
        [
          'You have provided a `title` prop to the child of <Tooltip />.',
          `Remove this title prop \`${children.props.title}\` or the Tooltip component.`,
        ].join('\n')
      );
    }
  }

  // `useFloating` gates middleware updates on a `deepEqual` that treats two functions with the same source as equal, so
  // recreating the `offset` middleware below with a different `arrowSize` would silently keep the previous closure. The
  // closure therefore reads its inputs from refs that are always current instead of capturing them.
  const arrowSizeRef = useLatest(arrowSize);
  const arrowIconMappingRef = useLatest(arrowIconMapping);

  const middleware = useMemo(() => {
    const items: Middleware[] = [
      offset(({ placement: currentPlacement, rects }) => {
        const padding = 8;
        const arrowOffsetX = 14;
        const arrowOffsetY = 7;
        const arrowHalfWidth = arrowIconMappingRef.current[arrowSizeRef.current].width / 2;
        const { reference, floating } = rects;

        if (currentPlacement === 'top-end' || currentPlacement === 'bottom-end') {
          return {
            crossAxis: Math.min(
              -(reference.width / 2 - arrowHalfWidth - padding - arrowOffsetX),
              -(reference.width / 2 - floating.width / 2)
            ),
          };
        }

        if (currentPlacement === 'top-start' || currentPlacement === 'bottom-start') {
          return {
            crossAxis: Math.max(
              reference.width / 2 - arrowHalfWidth - padding - arrowOffsetX,
              reference.width / 2 - floating.width / 2
            ),
          };
        }

        if (currentPlacement === 'right-end' || currentPlacement === 'left-end') {
          return {
            crossAxis: Math.min(
              -(reference.height / 2 - arrowHalfWidth - padding - arrowOffsetY),
              -(reference.height / 2 - floating.height / 2)
            ),
          };
        }

        if (currentPlacement === 'right-start' || currentPlacement === 'left-start') {
          return {
            crossAxis: Math.max(
              reference.height / 2 - arrowHalfWidth - padding - arrowOffsetY,
              reference.height / 2 - floating.height / 2
            ),
          };
        }

        return {};
      }),
      flip(),
      // `limitShift` keeps the tooltip tethered to its anchor, the way popper.js's `preventOverflow` `tether` did.
      shift({ limiter: limitShift() }),
    ];

    if (arrowRef) {
      items.push(arrowMiddleware({ element: arrowRef, padding: 4 }));
    }

    if (PopperProps.middleware) {
      items.push(...(PopperProps.middleware.filter(Boolean) as Middleware[]));
    }

    // `hide` powers the `[data-es-reference-hidden]` rules in the sidebar, sidenav and gallery themes.
    items.push(hide());

    return items;
  }, [arrowRef, PopperProps.middleware]);

  const PopperComponent = slots.popper ?? PopperComponentProp ?? Popper;
  const TransitionComponent = slots.transition ?? TransitionComponentProp ?? Fade;
  const TooltipComponent = slots.tooltip ?? 'div';
  const ArrowComponent = slots.arrow ?? 'span';

  const popperProps = {
    ...PopperProps,
    ...slotProps.popper,
    className: clsx(
      'es-tooltip__popper',
      !disableInteractive && 'es-tooltip__popper--interactive',
      arrow && 'es-tooltip__popper--arrow',
      arrowSize && `es-tooltip__popper--arrow-size--${arrowSize}`,
      PopperProps?.className,
      slotProps.popper?.className
    ),
    style: {
      '--es-tooltip-distance': `${distance || 0}px`,
      ...PopperProps?.style,
      ...slotProps.popper?.style,
    } as React.CSSProperties,
  };

  const transitionProps = { ...TransitionProps, ...slotProps.transition };

  const tooltipProps = {
    ...slotProps.tooltip,
    className: clsx(
      'es-tooltip__tooltip',
      arrow && 'es-tooltip__tooltip--arrow',
      ignoreNonTouchEvents.current && 'es-tooltip__tooltip--touch',
      placement && `es-tooltip__tooltip--placement--${placement}`,
      color && `es-tooltip__tooltip--color--${color}`,
      'caption',
      slotProps.tooltip?.className
    ),
  };

  const tooltipArrowProps = {
    ...slotProps.arrow,
    className: clsx('es-tooltip__arrow', color && `es-tooltip__arrow--color--${color}`, slotProps.arrow?.className),
  };

  return (
    <>
      {cloneElement(children, childrenProps)}
      <PopperComponent
        transition
        anchorEl={
          followCursor
            ? {
                getBoundingClientRect: () => {
                  const { x, y } = cursorPosition;

                  if (followCursor !== 'both' && childNode) {
                    const rect = childNode.getBoundingClientRect();

                    if (followCursor === 'horizontal') {
                      return new DOMRect(x, rect.y, 0, rect.height);
                    }

                    return new DOMRect(rect.x, y, rect.width, 0);
                  }

                  return new DOMRect(x, y, 0, 0);
                },
              }
            : childNode
        }
        id={id}
        open={childNode ? open : false}
        placement={placement}
        popperRef={popperRef}
        {...interactiveWrapperListeners}
        {...popperProps}
        middleware={middleware}
      >
        {({ middlewareData, TransitionProps: TransitionPropsInner }) => (
          // eslint-disable-next-line
          // @ts-ignore
          <TransitionComponent timeout={200} {...TransitionPropsInner} {...transitionProps}>
            <TooltipComponent {...tooltipProps}>
              {title}
              {arrow ? (
                <ArrowComponent
                  {...tooltipArrowProps}
                  ref={setArrowRef}
                  style={{
                    left: middlewareData.arrow?.x === undefined ? undefined : `${middlewareData.arrow.x}px`,
                    top: middlewareData.arrow?.y === undefined ? undefined : `${middlewareData.arrow.y}px`,
                    ...tooltipArrowProps.style,
                  }}
                >
                  {!slots.arrow && arrowIconMapping[arrowSize].icon}
                </ArrowComponent>
              ) : null}
            </TooltipComponent>
          </TransitionComponent>
        )}
      </PopperComponent>
    </>
  );
});
