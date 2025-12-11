import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { BottomSheetProps } from './BottomSheet.types';

import clsx from 'clsx';

import { duration } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { unstable_useId as useId } from '@mui/utils';

import { BottomSheetContext } from './BottomSheet.context';

import { useIntersectionObserver, useResizeObserver, useWindowEventListener } from '../../hooks';

import { useDrag } from '@use-gesture/react';

const defaultTransitionDuration = { enter: duration.enteringScreen, exit: duration.enteringScreen };

const defaultSnapPoints: BottomSheetProps['snapPoints'] = [
  {
    point: '60vh',
    dragThresholds: { up: '15vh', down: '15vh' },
    activeWhen: { screen: { minHeight: 400 }, paperOverflow: true },
  },
  { point: '100vh', dragThresholds: { up: '0px', down: '15vh' } },
];

const getPixelsFromCssUnits = (cssValue: string) => {
  const supportedUnits = {
    px: (value: number) => value,
    vh: (value: number) => (value / 100) * window.innerHeight,
  };

  const pattern = new RegExp(`^([-+]?(?:\\d+(?:\\.\\d+)?))(${Object.keys(supportedUnits).join('|')})$`, 'i');
  const matches = String.prototype.toString.apply(cssValue).trim().match(pattern);

  if (matches) {
    const value = Number(matches[1]);
    const unit = matches[2].toLocaleLowerCase() as keyof typeof supportedUnits;

    if (unit in supportedUnits) {
      return supportedUnits[unit](value);
    }
  }

  throw new Error('dragThresholds must be specified in px or vh.');
};

/**
 * Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.
 */
export const BottomSheet = forwardRef<HTMLDivElement | null, BottomSheetProps>(function BottomSheet(inProps, ref) {
  const props = useDefaultProps({ props: inProps, name: 'MuiBottomSheet' });
  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    children,
    className,
    disableEscapeKeyDown = false,
    maxWidth = '100%',
    align = 'flex-end',
    onClose,
    open,
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    snapPoints = defaultSnapPoints,
    ...other
  } = props;

  const [activeSnapPoints, setActiveSnapPoints] = useState(snapPoints);
  const [snapPointIndex, setSnapPointIndex] = useState(0);

  const [isFullHeight, setFullHeight] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const backdropClick = useRef<boolean | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const ariaLabelledby = useId(ariaLabelledbyProp);

  const isLastSnapPoint = snapPointIndex >= activeSnapPoints.length - 1;
  const duration = typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.enter || 0;

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.

    if (wrapperRef && wrapperRef === event.target) {
      backdropClick.current = true;
    } else {
      backdropClick.current = false;
    }
  };

  const onBottomSheetBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const onScroll = () => {
    if (containerRef.current) {
      setScrolled(containerRef.current.scrollTop > 0);
    }
  };

  const onResize = (index?: number) => {
    const { innerHeight, innerWidth } = window;

    const activeSnapPoints = snapPoints.filter((s) => {
      if (!s.activeWhen) {
        return true;
      }

      if (s.activeWhen.paperOverflow && (paperRef.current?.scrollHeight || 0) <= innerHeight) {
        return false;
      }

      if (s.activeWhen.screen) {
        if (
          (s.activeWhen.screen.minHeight && innerHeight < s.activeWhen.screen.minHeight) ||
          (s.activeWhen.screen.maxHeight && innerHeight > s.activeWhen.screen.maxHeight) ||
          (s.activeWhen.screen.minWidth && innerWidth < s.activeWhen.screen.minWidth) ||
          (s.activeWhen.screen.maxWidth && innerWidth > s.activeWhen.screen.maxWidth)
        ) {
          return false;
        }
      }

      if (s.activeWhen.fn && !s.activeWhen.fn()) {
        return false;
      }

      return true;
    });

    setSnapPointIndex(Math.min(index || snapPointIndex, activeSnapPoints.length - 1));
    setActiveSnapPoints(activeSnapPoints);
  };

  useWindowEventListener('resize', () => onResize());

  useResizeObserver(contentRef, () => {
    if (contentRef.current) {
      contentRef.current.style.setProperty('--client-height', `${contentRef.current.clientHeight}px`);
    }
  });

  useIntersectionObserver(
    sentinelRef,
    (entries) => {
      setFullHeight(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: '-1px 0px 0px' }
  );

  const onEnter = () => {
    setFullHeight(false);
    setScrolled(false);
    setOpen(false);
    onResize(0);
  };

  const onEntered = () => {
    setOpen(true);
  };

  const changeSnapPointIndex = (delta: -1 | 1) => {
    const newSnapPointIndex = snapPointIndex + delta;

    if (newSnapPointIndex < 0) {
      if (onClose) {
        onClose({}, 'backdropClick');
      }
    } else {
      setSnapPointIndex(Math.min(newSnapPointIndex, activeSnapPoints.length - 1));

      if (contentRef.current && containerRef.current) {
        containerRef.current.style.removeProperty('touch-action');
        containerRef.current.style.removeProperty('overflow');
        contentRef.current.style.removeProperty('margin-top');
        contentRef.current.style.removeProperty('transition');
      }
    }
  };

  const bind = useDrag(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ down, swipe: [_swipeX, swipeY], movement: [_mx, my], type, event }) => {
      // Allow only types starting with "touch".
      if (type[0] !== 't' || !containerRef.current || !contentRef.current || !wrapperRef) {
        return;
      }

      // Disable drag if dragging element outside drag bind parent
      if (!wrapperRef.contains(event.target as HTMLElement)) {
        return;
      }

      if (isScrolled) {
        return;
      }

      if (swipeY) {
        if (swipeY === -1) {
          changeSnapPointIndex(1);
        } else {
          changeSnapPointIndex(-1);
        }
      } else if (down) {
        if (isLastSnapPoint) {
          if (my <= 0) {
            my = 0;
          }

          if (my > 0) {
            containerRef.current.style.setProperty('touch-action', `none`);
            containerRef.current.style.setProperty('overflow', `hidden`);
          }
        }

        const point = activeSnapPoints[snapPointIndex].point;
        const height = point === 'auto' ? `min(100dvh, ${contentRef.current.clientHeight}px)` : point;

        contentRef.current.style.setProperty('transition', `none`);
        contentRef.current.style.setProperty('margin-top', `max(0px, calc(100dvh - ${height} + ${my}px))`);
      } else {
        const up = getPixelsFromCssUnits(activeSnapPoints[snapPointIndex].dragThresholds.up);
        const down = getPixelsFromCssUnits(activeSnapPoints[snapPointIndex].dragThresholds.down);

        if (my < -up) {
          changeSnapPointIndex(1);
        } else if (my > down) {
          changeSnapPointIndex(-1);
        } else {
          containerRef.current.style.removeProperty('touch-action');
          containerRef.current.style.removeProperty('overflow');
          contentRef.current.style.removeProperty('transition');
          contentRef.current.style.removeProperty('margin-top');
        }
      }
    },
    { pointer: { touch: true } }
  );

  useEffect(() => {
    if (open) {
      const overscrollBehaviorY = document.body.style.overscrollBehaviorY;
      document.body.style.overscrollBehaviorY = 'contain';

      return () => {
        document.body.style.overscrollBehaviorY = overscrollBehaviorY;
      };
    }
  }, [open]);

  const value = useMemo(
    () => ({
      isFullHeight,
    }),
    [isFullHeight]
  );

  const point = activeSnapPoints[snapPointIndex].point;
  const snapPoint = point === 'auto' ? `min(100dvh, var(--client-height))` : point;

  return (
    <Modal
      ref={ref}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        className: 'es-bottom-sheet__backdrop',
        transitionDuration,
      }}
      className={clsx('es-bottom-sheet', className)}
      disableEscapeKeyDown={disableEscapeKeyDown}
      open={open}
      style={
        {
          '--es-bottom-sheet-snap-point': snapPoint,
          '--es-bottom-sheet-transition-duration': `${duration}ms`,
        } as React.CSSProperties
      }
      onClick={onBottomSheetBackdropClick}
      onClose={onClose}
      {...other}
    >
      <TransitionComponent appear in={open} role="presentation" timeout={transitionDuration} {...TransitionProps}>
        <div
          ref={containerRef}
          className={clsx(
            'es-bottom-sheet__container',
            isLastSnapPoint && 'es-bottom-sheet__container--last-snap-point'
          )}
          onMouseDown={onMouseDown}
          onScroll={onScroll}
        >
          <div
            ref={setWrapperRef}
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            className={clsx('es-bottom-sheet__wrapper', `es-bottom-sheet__wrapper--align--${align}`)}
            role="dialog"
            {...bind()}
          >
            <div
              ref={contentRef}
              className={clsx('es-bottom-sheet__content', isOpen && 'es-bottom-sheet__content--open')}
              style={{ maxWidth }}
            >
              <Slide direction="up" in={open} timeout={transitionDuration} onEnter={onEnter} onEntered={onEntered}>
                <div
                  ref={paperRef}
                  className={clsx('es-bottom-sheet__paper', isFullHeight && 'es-bottom-sheet__paper--full-height')}
                >
                  <div ref={sentinelRef} />
                  <BottomSheetContext.Provider value={value}>{children}</BottomSheetContext.Provider>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </TransitionComponent>
    </Modal>
  );
});
