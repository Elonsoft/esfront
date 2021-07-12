import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { SwiperProps, SwiperPaginationBaseProps } from './Swiper.types';

import clsx from 'clsx';
import { useStyles } from './Swiper.styles';

import { SwiperButtonDown, SwiperButtonLeft, SwiperButtonRight, SwiperButtonUp } from './SwiperButton';

import useThemeProps from '@material-ui/core/styles/useThemeProps';

import { usePropertiesMapping } from './usePropertiesMapping';
import { useDocumentEventListener, useResizeObserver } from '../hooks';

export const Swiper = <P extends SwiperPaginationBaseProps>(inProps: SwiperProps<P>) => {
  const {
    children,
    ref,
    classes,
    className,
    direction = 'horizontal',
    alignment = 'center',
    gap = 16,
    snap,
    draggable,
    loop,
    loopCount = 1,
    actions,
    onActiveSlideChange,
    onPaginationRangeChange,
    buttonPrev,
    buttonPrevLabel,
    buttonNext,
    buttonNextLabel,
    buttonScrollDistance = 1,
    pagination: Pagination,
    PaginationProps
  } = useThemeProps({
    props: inProps,
    name: 'ESSwiper'
  });
  const styles = useStyles({ classes });

  const ButtonPrev = buttonPrev ?? (direction === 'horizontal' ? SwiperButtonLeft : SwiperButtonUp);
  const ButtonNext = buttonNext ?? (direction === 'horizontal' ? SwiperButtonRight : SwiperButtonDown);

  const mapping = usePropertiesMapping(direction);

  const container = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState(-1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const [isPrevVisible, setPrevVisible] = useState(false);
  const [isNextVisible, setNextVisible] = useState(false);

  const [isMouseDown, setMouseDown] = useState(false);
  const [isMouseOver, setMouseOver] = useState(false);
  const [isTouchDown, setTouchDown] = useState(false);

  /**
   * @returns Index of the slide closest to the center of the container.
   */
  const getActiveSlide = () => {
    let active: number | null = null;
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const center = (rect[mapping.start] + rect[mapping.end]) / 2;
      const children = container.current.children;

      for (let i = 0; i < children.length; i++) {
        const childRect = children[i].getBoundingClientRect();
        const start = childRect[mapping.start];
        const end = childRect[mapping.end];

        if (start - gap / 2 < center && end + gap / 2 > center) {
          active = i;
          break;
        }
      }
    }
    return active;
  };

  /**
   * Scroll to the slide by its index.
   * @param index Index of the slide.
   */
  const setActiveSlide = (index: number) => {
    if (container.current) {
      const children = container.current.children[index] as HTMLElement;
      if (children) {
        const start =
          children[mapping.offset] - container.current[mapping.clientSize] / 2 + children[mapping.clientSize] / 2;
        container.current.scrollTo({ [mapping.start]: start, behavior: 'smooth' });
      }
    }
  };

  /**
   * @param direction -1 for the previous slide(s) or 1 for the next slide(s).
   * @param count Count of the slides.
   * @returns Distance to scroll the container.
   */
  const getStep = (direction: -1 | 1, count = 1) => {
    if (container.current) {
      let step = 0;
      const containerRect = container.current.getBoundingClientRect();
      const start = containerRect[mapping.start];
      const end = containerRect[mapping.end];
      const children = container.current.children;

      if (alignment === 'center') {
        const active = getActiveSlide();
        if (active !== null) {
          const center = (start + end) / 2;
          for (let i = active; count >= 1 && (direction === -1 ? i >= 0 : i < children.length); i += direction) {
            const child = children[i];
            const childNext = children[i + direction];
            if (i === active) {
              const rect = child.getBoundingClientRect();
              step += direction === -1 ? center - rect[mapping.start] : rect[mapping.end] - center;
            } else {
              step += child[mapping.clientSize] / 2;
            }
            if (childNext) {
              step += childNext[mapping.clientSize] / 2 + gap;
            }
            count--;
          }
        }
      } else {
        const BUFFER = 8;

        if (direction === 1) {
          for (let i = 0; i < children.length; i++) {
            const rect = children[i].getBoundingClientRect();
            if (rect[mapping.end] - start > BUFFER) {
              step = rect[mapping.end] - start + gap;
              if (count === 1) {
                break;
              } else {
                count--;
              }
            }
          }
        } else {
          for (let i = children.length - 1; i >= 0; i--) {
            const rect = children[i].getBoundingClientRect();
            if (rect[mapping.start] - start < -BUFFER) {
              step = -(rect[mapping.start] - start + gap);
              if (count === 1) {
                break;
              } else {
                count--;
              }
            }
          }
        }
      }

      return step;
    }
    return 0;
  };

  const getPaginationRange = () => {
    if (container.current) {
      const children = container.current.children;

      const start = container.current.getBoundingClientRect()[mapping.start];
      const scrollPosition = container.current[mapping.scrollPosition];
      const scrollSize = container.current[mapping.scrollSize];
      const center = container.current[mapping.clientSize] / 2;

      let newFrom = 0;
      let newTo = children.length - 1;

      while (
        children[newFrom] &&
        children[newFrom].getBoundingClientRect()[mapping.end] - start + scrollPosition + gap / 2 <= center
      ) {
        newFrom++;
      }

      while (
        children[newTo] &&
        scrollSize - (children[newTo].getBoundingClientRect()[mapping.start] - start + scrollPosition) + gap / 2 <=
          center
      ) {
        newTo--;
      }

      if (newFrom !== from) {
        setFrom(newFrom);
      }
      if (newTo !== to) {
        setTo(newTo);
      }
    }
  };

  const onPrevClick = () => {
    if (container.current) {
      const step = getStep(-1, buttonScrollDistance);
      container.current.scrollBy({ [mapping.start]: -step, behavior: 'smooth' });
    }
  };

  const onNextClick = () => {
    if (container.current) {
      const step = getStep(1, buttonScrollDistance);
      container.current.scrollBy({ [mapping.start]: step, behavior: 'smooth' });
    }
  };

  const onDragStart = (event: React.DragEvent) => {
    event.preventDefault();
    return false;
  };

  const onMouseDown = () => {
    setMouseDown(true);
  };

  const onMouseUp = () => {
    if (isMouseDown) {
      setMouseDown(false);

      // Manually trigger scroll snap.
      setTimeout(() => {
        if (container.current) {
          // There is a smooth behavior issue in chromium.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=1136958
          container.current.scrollBy({ [mapping.start]: 0, behavior: 'smooth' });
        }
      });
    }
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (draggable && isMouseDown && container.current) {
      container.current[mapping.scrollPosition] -= event[mapping.movement];
    }
  };

  const onMouseEnter = () => {
    setMouseOver(true);
  };

  const onMouseLeave = () => {
    setMouseOver(false);
    onMouseUp();
  };

  const onTouchStart = () => {
    setTouchDown(true);
  };

  const onScroll = () => {
    if (container.current) {
      if (container.current[mapping.scrollPosition] <= 0) {
        setPrevVisible(false);
      } else {
        setPrevVisible(true);
      }

      // Sometimes there is a 1px offset which cannot be scrolled.
      if (
        container.current[mapping.clientSize] + container.current[mapping.scrollPosition] >=
        container.current[mapping.scrollSize] - 1
      ) {
        setNextVisible(false);
      } else {
        setNextVisible(true);
      }

      const newActive = getActiveSlide();
      if (newActive !== null && newActive !== active) {
        setActive(newActive);
        if (onActiveSlideChange) {
          onActiveSlideChange(newActive);
        }
      }
    }
  };

  useImperativeHandle(actions, () => ({ setActiveSlide }), [container.current]);

  useEffect(() => {
    onScroll();
  }, []);

  useDocumentEventListener('touchend', () => {
    setTouchDown(false);
  });

  useResizeObserver(container, () => {
    onScroll();
    getPaginationRange();
  });

  useEffect(() => {
    if (onPaginationRangeChange) {
      onPaginationRangeChange(from, to);
    }
  }, [from, to]);

  useEffect(() => {
    if (loop && loop > 0 && !isMouseDown && !isMouseOver && !isTouchDown) {
      const interval = setInterval(() => {
        if (container.current) {
          if (
            container.current[mapping.clientSize] + container.current[mapping.scrollPosition] >=
            container.current[mapping.scrollSize] - 1
          ) {
            container.current.scrollTo({ [mapping.start]: 0, behavior: 'smooth' });
          } else {
            const step = getStep(1, loopCount);
            container.current.scrollBy({ [mapping.start]: step, behavior: 'smooth' });
          }
        }
      }, loop);

      return () => {
        clearInterval(interval);
      };
    }
  }, [loop, loopCount, isMouseDown, isMouseOver, isTouchDown, direction, alignment]);

  return (
    <div
      className={clsx(styles.root, styles[direction], className)}
      ref={ref}
      role="group"
      aria-roledescription="carousel"
    >
      <div className={styles.wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isPrevVisible && !!ButtonPrev && (
          <ButtonPrev
            onClick={onPrevClick}
            label={buttonPrevLabel}
            className={clsx(styles.button, styles.buttonPrev)}
          />
        )}
        {isNextVisible && !!ButtonNext && (
          <ButtonNext
            onClick={onNextClick}
            label={buttonNextLabel}
            className={clsx(styles.button, styles.buttonNext)}
          />
        )}
        <div
          className={clsx(
            styles.container,
            { [styles.containerSnap]: snap && !isMouseDown },
            alignment === 'center' ? styles.containerSnapAlignCenter : styles.containerSnapAlignStart
          )}
          style={{ gap: `${gap}px`, cursor: draggable ? (isMouseDown ? 'grabbing' : 'grab') : 'unset' }}
          ref={container}
          tabIndex={-1}
          onScroll={onScroll}
          onDragStart={onDragStart}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
        >
          {children}
        </div>
      </div>
      {!!Pagination && (
        <Pagination
          {...(PaginationProps as P)}
          direction={direction}
          active={active}
          from={from}
          to={to}
          onChange={setActiveSlide}
        />
      )}
    </div>
  );
};
