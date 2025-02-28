import { BadgePlacementControlProps } from './BadgePlacementControl.types';

import clsx from 'clsx';
import { badgePlacementControlClasses, getBadgePlacementControlUtilityClass } from './BadgePlacementControl.classes';

import { capitalize, styled, useThemeProps } from '@mui/material';
import composeClasses from '@mui/utils/composeClasses';

type BadgePlacementControlOwnerState = {
  classes: BadgePlacementControlProps['classes'];
  placement: NonNullable<BadgePlacementControlProps['placement']>;
  offset: NonNullable<BadgePlacementControlProps['offset']>;
  overlap: NonNullable<BadgePlacementControlProps['overlap']>;
};

const capitalizeWithHyphen = (placement: BadgePlacementControlOwnerState['placement']) => {
  return placement
    .split('-')
    .map((part) => capitalize(part))
    .join('');
};

const calculateTransform = (
  placement: BadgePlacementControlOwnerState['placement'],
  offset: BadgePlacementControlOwnerState['offset']
) => {
  const [offsetX, offsetY] = offset;

  switch (placement) {
    case 'top-right':
      return `translate(calc(35% + ${offsetX}px), calc(-35% + ${offsetY}px))`;
    case 'top-left':
      return `translate(calc(-35% + ${offsetX}px), calc(-35% + ${offsetY}px))`;
    case 'bottom-right':
      return `translate(calc(35% + ${offsetX}px), calc(35% + ${offsetY}px))`;
    case 'bottom-left':
      return `translate(calc(-35% + ${offsetX}px), calc(35% + ${offsetY}px))`;
    default:
      return 'translate(35%, -35%)';
  }
};

const useUtilityClasses = (ownerState: BadgePlacementControlOwnerState) => {
  const { classes, placement, overlap } = ownerState;

  const slots = {
    root: ['root', `placement${capitalizeWithHyphen(placement)}`, `overlap${capitalize(overlap)}`],
    wrapper: ['wrapper'],
  };

  return composeClasses(slots, getBadgePlacementControlUtilityClass, classes);
};

const BadgePlacementControlRoot = styled('div', {
  name: 'ESBadgePlacementControl',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => {
  return {
    position: 'relative',
    display: 'inline-flex',

    [`&.${badgePlacementControlClasses.placementTopRight}`]: {
      [`&.${badgePlacementControlClasses.overlapRectangular} .${badgePlacementControlClasses.wrapper}`]: {
        top: 0,
        right: 0,
      },

      [`&.${badgePlacementControlClasses.overlapCircular} .${badgePlacementControlClasses.wrapper}`]: {
        top: '5%',
        right: '5%',
      },
    },

    [`&.${badgePlacementControlClasses.placementTopLeft}`]: {
      [`&.${badgePlacementControlClasses.overlapRectangular} .${badgePlacementControlClasses.wrapper}`]: {
        top: 0,
        left: 0,
      },

      [`&.${badgePlacementControlClasses.overlapCircular} .${badgePlacementControlClasses.wrapper}`]: {
        top: '5%',
        left: '5%',
      },
    },

    [`&.${badgePlacementControlClasses.placementBottomRight}`]: {
      [`&.${badgePlacementControlClasses.overlapRectangular} .${badgePlacementControlClasses.wrapper}`]: {
        bottom: 0,
        right: 0,
      },

      [`&.${badgePlacementControlClasses.overlapCircular} .${badgePlacementControlClasses.wrapper}`]: {
        bottom: '5%',
        right: '5%',
      },
    },

    [`&.${badgePlacementControlClasses.placementBottomLeft}`]: {
      [`&.${badgePlacementControlClasses.overlapRectangular} .${badgePlacementControlClasses.wrapper}`]: {
        bottom: 0,
        left: 0,
      },

      [`&.${badgePlacementControlClasses.overlapCircular} .${badgePlacementControlClasses.wrapper}`]: {
        bottom: '5%',
        left: '5%',
      },
    },
  };
});

const BadgePlacementControlWrapper = styled('div', {
  name: 'ESBadgePlacementControl',
  slot: 'Wrapper',
  overridesResolver: (_props, styles) => styles.wrapper,
})<{ ownerState: BadgePlacementControlOwnerState }>(({ ownerState }) => {
  const { placement, offset } = ownerState;

  const transform = calculateTransform(placement, offset);

  return {
    display: 'inline-flex',
    position: 'absolute',
    zIndex: 1,
    transform,
  };
});

export const BadgePlacementControl = (inProps: BadgePlacementControlProps) => {
  const {
    badge,
    classes: inClasses,
    className,
    children,
    offset = [0, 0],
    overlap = 'rectangular',
    placement = 'top-right',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBadge',
  });

  const ownerState = { classes: inClasses, offset, overlap, placement };
  const classes = useUtilityClasses(ownerState);

  return (
    <BadgePlacementControlRoot className={clsx(className, classes.root)} {...props}>
      <BadgePlacementControlWrapper className={classes.wrapper} ownerState={ownerState}>
        {badge}
      </BadgePlacementControlWrapper>
      {children}
    </BadgePlacementControlRoot>
  );
};
