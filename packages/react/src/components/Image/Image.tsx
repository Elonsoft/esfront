import { useRef } from 'react';

import { ImageProps } from './Image.types';

import clsx from 'clsx';
import { getImageUtilityClass } from './Image.classes';

import { styled } from '@mui/material/styles';
import { useDefaultProps } from '@mui/system/DefaultPropsProvider';
import composeClasses from '@mui/utils/composeClasses';

import { animated, useSpring } from '@react-spring/web';
import { createUseGesture, dragAction, pinchAction } from '@use-gesture/react';

const useGesture = createUseGesture([dragAction, pinchAction]);

type ImageOwnerState = {
  classes?: ImageProps['classes'];
};

const useUtilityClasses = (ownerState: ImageOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getImageUtilityClass, classes);
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

const ImageRoot = styled('div', {
  name: 'ESImage',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  width: '100%',
  maxWidth: '500px',
  aspectRatio: '1',
  overflow: 'hidden',
  border: '1px solid black',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    pointerEvents: 'none',
  },
}));

const ImageTransform = styled(animated.div, {
  name: 'ESImage',
  slot: 'Transform',
  overridesResolver: (props, styles) => styles.transform,
})(() => ({
  width: '100%',
  height: '100%',
  transformOrigin: 'center',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  touchAction: 'none',
  userSelect: 'none',
}));

/**
 * Component for zooming, panning and pinching of images.
 */
export const Image = (inProps: ImageProps) => {
  const { children, className, sx, maxZoom = 5, ...props } = useDefaultProps({ props: inProps, name: 'ESImage' });
  const ownerState = { ...props };

  const ref = useRef<HTMLDivElement>(null);
  const transformRef = useRef<HTMLDivElement>(null);

  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    // config: {
    //   bounce: 0,
    //   friction: 10,
    // },
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
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (pinching) {
          return cancel();
        }

        api.set({ x, y });
      },
      onDragEnd: ({ offset, direction, velocity }) => {
        // const modifier = style.scale.get() * 100;
        const modifier = 100;
        const bounds = getBounds();
        const x = clamp(offset[0] + direction[0] * velocity[0] * modifier, bounds.left, bounds.right);
        const y = clamp(offset[1] + direction[1] * velocity[1] * modifier, bounds.top, bounds.bottom);

        api.start({
          x,
          y,
        });
      },
    },
    {
      target: transformRef,
      pinch: {
        modifierKey: null,
        scaleBounds: { min: 1, max: maxZoom },
      },
      drag: {
        from: () => [style.x.get(), style.y.get()],
        bounds: () => getBounds(),
      },
    }
  );

  const classes = useUtilityClasses(ownerState);

  return (
    <ImageRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
      <ImageTransform ref={transformRef} style={style}>
        {children}
      </ImageTransform>
    </ImageRoot>
  );
};
