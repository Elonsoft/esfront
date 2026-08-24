import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { PopoverAnchorEl, PopoverOrigin, PopoverProps } from './Popover.types';

import clsx from 'clsx';

import { useDefaultProps } from '@mui/system/DefaultPropsProvider';

import { useForkRef } from '../../hooks';
import { debounce } from '../../transitions/debounce';
import { ownerDocument, ownerWindow } from '../../utils';
import { Grow } from '../Grow';
import { Modal } from '../Modal';

const defaultAnchorOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'left' };
const defaultTransformOrigin: PopoverOrigin = { vertical: 'top', horizontal: 'left' };

export const getOffsetTop = (rect: { height: number }, vertical: PopoverOrigin['vertical']) => {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
};

export const getOffsetLeft = (rect: { width: number }, horizontal: PopoverOrigin['horizontal']) => {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
};

const getTransformOriginValue = (transformOrigin: { vertical: number; horizontal: number }) => {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => `${n}px`).join(' ');
};

const resolveAnchorEl = (anchorEl: PopoverAnchorEl | undefined) => {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
};

/**
 * The Popover displays content on top of the page, anchored to an element. It is a lower-level construct — prefer the
 * Menu when building a list of actions.
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'ESPopover' });

  const {
    action,
    anchorEl,
    anchorOrigin = defaultAnchorOrigin,
    anchorPosition,
    anchorReference = 'anchorEl',
    children,
    className,
    container: containerProp,
    disableScrollLock = false,
    marginThreshold = 16,
    open,
    transformOrigin = defaultTransformOrigin,
    transitionDuration: transitionDurationProp = 'auto',
    TransitionProps = {},
    slots = {},
    slotProps = {},
    ...other
  } = props;

  const paperRef = useRef<HTMLDivElement | null>(null);
  const handlePaperRef = useForkRef(paperRef, slotProps.paper?.ref);

  // Returns the top/left offset of the point on the anchor the popover attaches to.
  const getAnchorOffset = useCallback(() => {
    if (anchorReference === 'anchorPosition') {
      return anchorPosition;
    }

    const resolvedAnchorEl = resolveAnchorEl(anchorEl);

    // If an anchor element wasn't provided, just use the parent body element of this Popover.
    const anchorElement =
      resolvedAnchorEl && resolvedAnchorEl.nodeType === 1
        ? (resolvedAnchorEl as Element)
        : ownerDocument(paperRef.current).body;

    const anchorRect = anchorElement.getBoundingClientRect();

    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal),
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

  const getTransformOrigin = useCallback(
    (elemRect: { width: number; height: number }) => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal),
      };
    },
    [transformOrigin.horizontal, transformOrigin.vertical]
  );

  const getPositioningStyle = useCallback(
    (element: HTMLElement) => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };

      // Get the transform origin point on the element itself.
      const elemTransformOrigin = getTransformOrigin(elemRect);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin),
        };
      }

      const anchorOffset = getAnchorOffset() || { top: 0, left: 0 };

      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      // Use the parent window of the anchorEl if provided.
      const containerWindow = ownerWindow(resolveAnchorEl(anchorEl) as Element | null);

      // Window thresholds taking the required margin into account.
      const heightThreshold = containerWindow.innerHeight - (marginThreshold ?? 0);
      const widthThreshold = containerWindow.innerWidth - (marginThreshold ?? 0);

      // Check if the vertical axis needs shifting.
      if (marginThreshold !== null && top < marginThreshold) {
        const diff = top - marginThreshold;

        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (marginThreshold !== null && bottom > heightThreshold) {
        const diff = bottom - heightThreshold;

        top -= diff;
        elemTransformOrigin.vertical += diff;
      }

      // Check if the horizontal axis needs shifting.
      if (marginThreshold !== null && left < marginThreshold) {
        const diff = left - marginThreshold;

        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (marginThreshold !== null && right > widthThreshold) {
        const diff = right - widthThreshold;

        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }

      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin),
      };
    },
    [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]
  );

  const [isPositioned, setIsPositioned] = useState(open);

  const setPositioningStyles = useCallback(() => {
    const element = paperRef.current;

    if (!element) {
      return;
    }

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.setProperty('top', positioning.top);
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);

  useEffect(() => {
    // Without the scroll lock the anchor may move, so the popover has to follow it.
    if (disableScrollLock) {
      window.addEventListener('scroll', setPositioningStyles);
    }

    return () => window.removeEventListener('scroll', setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);

  useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });

  useImperativeHandle(
    action,
    () =>
      open
        ? {
            updatePosition: () => {
              setPositioningStyles();
            },
          }
        : null,
    [open, setPositioningStyles]
  );

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleResize = debounce(() => {
      setPositioningStyles();
    });

    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl) as Element | null);

    containerWindow.addEventListener('resize', handleResize);

    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);

  // If the container prop is provided, use that. If the anchorEl prop is provided, use its owner document body.
  // Otherwise let the Modal choose.
  const container =
    containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl) as Element | null).body : undefined);

  const Root = slots.root || Modal;
  const Paper = slots.paper || 'div';
  const Transition = slots.transition || Grow;

  let transitionDuration: PopoverProps['transitionDuration'] = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !(Transition as typeof Grow).muiSupportAuto) {
    transitionDuration = undefined;
  }

  const transitionProps = { ...TransitionProps, ...slotProps.transition };

  return (
    <Root
      container={container}
      disableScrollLock={disableScrollLock}
      open={open}
      slotProps={{ backdrop: { invisible: true, ...slotProps.backdrop } }}
      slots={{ backdrop: slots.backdrop }}
      {...other}
      {...slotProps.root}
      ref={ref}
      className={clsx(className, 'es-popover', slotProps.root?.className)}
    >
      <Transition
        appear
        in={open}
        timeout={transitionDuration}
        {...transitionProps}
        onEntering={(node: HTMLElement, isAppearing: boolean) => {
          transitionProps.onEntering?.(node, isAppearing);
          setPositioningStyles();
        }}
        onExited={(node: HTMLElement) => {
          transitionProps.onExited?.(node);
          setIsPositioned(false);
        }}
      >
        <Paper
          {...slotProps.paper}
          ref={handlePaperRef}
          className={clsx('es-popover__paper', slotProps.paper?.className)}
          style={{ ...(isPositioned ? undefined : { opacity: 0 }), ...slotProps.paper?.style }}
        >
          {children}
        </Paper>
      </Transition>
    </Root>
  );
});
