import { useImperativeHandle, useRef } from 'react';

import { ImageZoomProps } from './ImageZoom.types';

import clsx from 'clsx';
import { getImageZoomUtilityClass } from './ImageZoom.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { animated, useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, moveAction, pinchAction } from '@use-gesture/react';

const useGesture = createUseGesture([dragAction, moveAction, pinchAction]);

type ImageZoomOwnerState = {
  classes?: ImageZoomProps['classes'];
};

const useUtilityClasses = (ownerState: ImageZoomOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    transform: ['transform'],
  };

  return composeClasses(slots, getImageZoomUtilityClass, classes);
};

function getImageContainedSize(img: HTMLImageElement) {
  const ratio = img.naturalWidth / img.naturalHeight;

  const rect = img.getBoundingClientRect();

  let height = rect.height;
  let width = rect.height * ratio;

  if (width > rect.width) {
    width = rect.width;
    height = rect.width / ratio;
  }

  return [width, height] as const;
}

function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}

const ImageZoomRoot = styled('div', {
  name: 'ESImageZoom',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  overflow: 'hidden',
  userSelect: 'none',
}));

const ImageZoomTransform = styled(animated.div, {
  name: 'ESImageZoom',
  slot: 'Transform',
  overridesResolver: (props, styles) => styles.transform,
})(() => ({
  width: '100%',
  height: '100%',
  touchAction: 'none',
  userSelect: 'none',

  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    pointerEvents: 'none',
  },
}));

/**
 * Component for zooming, panning and pinching of images.
 */
export const ImageZoom = (inProps: ImageZoomProps) => {
  const {
    children,
    className,
    sx,
    maxScale = 5,
    magnify,
    magnifyScale = 2,
    doubleTapScale = 3,
    disablePinch,
    disableWheel,
    disableDoubleTap,
    actions,
    ...props
  } = useDefaultProps({ props: inProps, name: 'ESImageZoom' });
  const ownerState = { ...props };

  const ref = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const doubleTapped = useRef(false);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const getBounds = (ratio = 1) => {
    if (ref.current && transformRef.current) {
      const img = transformRef.current.querySelector('img');

      if (img) {
        const [width, height] = getImageContainedSize(img);
        const boundX = Math.max(0, (width * ratio - ref.current.clientWidth) / 2);
        const boundY = Math.max(0, (height * ratio - ref.current.clientHeight) / 2);

        return { left: -boundX, top: -boundY, right: boundX, bottom: boundY };
      }
    }

    return { left: 0, top: 0, right: 0, bottom: 0 };
  };

  useGesture(
    {
      onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s], memo, type }) => {
        if (type === 'wheel' && (disableWheel || magnify)) {
          return;
        }

        if ((type[0] === 't' || type[0] === 'p') && disablePinch) {
          return;
        }

        if (first) {
          const { width, height, x, y } = transformRef.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const ratio = s / style.scale.get();
        const bounds = getBounds(ratio);

        const x = clamp(memo[0] - (ms - 1) * memo[2], bounds.left, bounds.right);
        const y = clamp(memo[1] - (ms - 1) * memo[3], bounds.top, bounds.bottom);

        if (type === 'wheel') {
          api.start({ scale: s, x, y });
        } else {
          api.set({ scale: s, x, y });
        }

        return memo;
      },

      onDrag: ({ pinching, tap, offset: [x, y], xy, cancel }) => {
        if (pinching) {
          return cancel();
        }

        if (tap && !disableDoubleTap) {
          if (timer.current) {
            clearTimeout(timer.current);
            timer.current = null;

            doubleTapped.current = true;

            setTimeout(() => {
              doubleTapped.current = false;
            });

            const scale = style.scale.get();

            if (scale === 1) {
              const rect = ref.current!.getBoundingClientRect();
              const bounds = getBounds(doubleTapScale / scale);

              api.start({
                x: clamp((rect.width / 2 - xy[0] + rect.left) * (doubleTapScale - 1), bounds.left, bounds.right),
                y: clamp((rect.height / 2 - xy[1] + rect.top) * (doubleTapScale - 1), bounds.top, bounds.bottom),
                scale: doubleTapScale,
              });
            } else {
              api.start({
                x: 0,
                y: 0,
                scale: 1,
              });
            }
          }

          timer.current = setTimeout(() => {
            timer.current = null;
          }, 300);

          return;
        }

        api.set({ x, y });
      },
      onDragEnd: ({ offset, direction, velocity }) => {
        if (doubleTapped.current) {
          return;
        }

        const modifier = 100;

        const bounds = getBounds();
        const x = clamp(offset[0] + direction[0] * velocity[0] * modifier, bounds.left, bounds.right);
        const y = clamp(offset[1] + direction[1] * velocity[1] * modifier, bounds.top, bounds.bottom);

        api.start({
          x,
          y,
        });
      },
      onPointerMove: ({ event }) => {
        if (!magnify || event.pointerType[0] === 't') {
          return;
        }

        requestAnimationFrame(() => {
          const rect = ref.current!.getBoundingClientRect();

          const bounds = getBounds(magnifyScale / style.scale.get());

          const x = (rect.width / 2 - event.offsetX) * (magnifyScale - 1);
          const y = (rect.height / 2 - event.offsetY) * (magnifyScale - 1);

          api.set({
            x: clamp(x, bounds.left, bounds.right),
            y: clamp(y, bounds.top, bounds.bottom),
            scale: magnifyScale,
          });
        });
      },
      onPointerEnter: ({ event }) => {
        if (!magnify || event.pointerType[0] === 't') {
          return;
        }

        const rect = ref.current!.getBoundingClientRect();

        const bounds = getBounds(magnifyScale / style.scale.get());
        const x = (rect.width / 2 - event.offsetX) * (magnifyScale - 1);
        const y = (rect.height / 2 - event.offsetY) * (magnifyScale - 1);

        api.set({
          x: clamp(x, bounds.left, bounds.right),
          y: clamp(y, bounds.top, bounds.bottom),
          scale: magnifyScale,
        });
      },
      onPointerLeave: ({ event }) => {
        if (!magnify || event.pointerType[0] === 't') {
          return;
        }

        api.set({ scale: 1, x: 0, y: 0 });
      },
    },
    {
      target: transformRef,
      pinch: {
        modifierKey: null,
        scaleBounds: { min: 1, max: maxScale },
      },
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: () => getBounds(),
      },
    }
  );

  useImperativeHandle(
    actions,
    () => ({
      getScale: () => style.scale.get(),
      setScale: (scale, animate) => {
        const newScale = clamp(scale, 1, maxScale);
        const bounds = getBounds(newScale / style.scale.get());

        const params = {
          x: clamp(style.x.get(), bounds.left, bounds.right),
          y: clamp(style.y.get(), bounds.top, bounds.bottom),
          scale: newScale,
        };

        if (animate) {
          api.start(params);
        } else {
          api.set(params);
        }
      },
    }),
    [style, api, maxScale]
  );

  const classes = useUtilityClasses(ownerState);

  return (
    <ImageZoomRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
      <ImageZoomTransform ref={transformRef} className={classes.transform} style={style}>
        {children}
      </ImageZoomTransform>
    </ImageZoomRoot>
  );
};
